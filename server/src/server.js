import express from 'express';
import multer from 'multer';
import { MongoClient } from 'mongodb';
import path from 'path';
import { fileURLToPath} from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads")
    },
    filename: function(req, file, cb) {
        return cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({storage});

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.get("/api/recipes", async (req, res) => {

    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@atlascluster.lxepgmh.mongodb.net/`);

    await client.connect();

    const db = client.db('recipes-db');

    const recipes = await db.collection('recipes').find().toArray();

    res.json(recipes);
})

app.post("/api/add", upload.single("picture"), async (req, res) => {

    const filename = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const ingredients = req.body.ingredients;
    const instructions = req.body.instructions;

    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@atlascluster.lxepgmh.mongodb.net/`);

    await client.connect();

    const db = client.db('recipes-db');

    await db.collection('recipes').insertOne({
        "name": name, 
        "description": description, 
        "ingredients": [ingredients],
        "instructions": [instructions],
        "picture": filename}
        );
        

    res.sendStatus(200);
});

app.post("/api/removeRecipe", async (req, res) => {
    const recipeName = req.body.name;

    console.log(recipeName);

    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@atlascluster.lxepgmh.mongodb.net/`);

    await client.connect();

    const db = client.db('recipes-db');

    await db.collection('recipes').deleteOne({name: recipeName});

    const recipes = await db.collection('recipes').find().toArray();

    res.json(recipes);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT + ".");
});