import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';
import { fileURLToPath} from 'url';
import 'dotenv/config';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.post("/api/add", async (req, res) => {

    const recipe = req.body.recipe;

    console.log(recipe);

    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@atlascluster.lxepgmh.mongodb.net/`)

    await client.connect();

    const db = client.db('recipes-db');

    await db.collection('recipes').insertOne(recipe);

    const recipes = await db.collection('recipes').find().toArray();

    res.json(recipes);
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