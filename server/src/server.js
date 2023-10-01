import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

app.get("/api/recipes", async (req, res) => {
    const client = new MongoClient("mongodb://127.0.0.1:27017");

    await client.connect();

    const db = client.db('recipes');

    const recipes = await db.collection('recipes').find().toArray();

    res.json(recipes);
})

app.post("/api/add", async (req, res) => {
    const recipe = req.body;

    const client = new MongoClient("mongodb://127.0.0.1:27017")

    await client.connect();

    const db = client.db('recipes');

    await db.collection('recipes').insertOne(recipe);

    res.sendStatus(200);
});

app.post("/api/removeRecipe", async (req, res) => {
    const recipeName = req.body.name;

    const client = new MongoClient("mongodb://127.0.0.1:27017");

    await client.connect();

    const db = client.db('recipes');

    await db.collection('recipes').deleteOne({name: recipeName});

    res.sendStatus(200);
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000 ya dummy.");
});