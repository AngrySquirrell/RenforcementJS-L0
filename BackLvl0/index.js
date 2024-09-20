import express from "express";
import cors from "cors";
import { getCollection, addTaskToDb, deleteTaskToDb } from "./mongodb.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

//& 1er Endpoint
app.get("/tasks", async (req, res) => {
    res.json(await getCollection());
});

//! 2nd Endpoint (+DELETE)
app.delete("/task/:id", async (req, res) => {
    res.json({
        result: await deleteTaskToDb(req.params.id),
        newData: await getCollection(),
    });
});

//? 3ème Endpoint (+POST)
app.post("/task/new", async (req, res) => {
    let { name, description } = req.body;
    console.log(name, description);

    const result = await addTaskToDb(name, description);

    if (result.acknowledged) {
        res.json({ message: "Successful" });
    } else {
        res.status(500).json({
            message: "An Error occured",
        });
    }
});

//& 4ème Endpoint
app.get("/", (req, res) => {
    res.send("Tasks API");
});

app.listen(port, () => {
    console.log(`App en écoute sur le port ${port}`);
});
