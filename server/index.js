require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Experience = require("./models/Experience");

const app = express();
const port = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());







app.get("/api/experience", async (req, res) => {
    try {   
        const data = await Experience.find({});
        console.log("Data:", data);
        res.json(data);
    } catch (error) {
        console.error(error); // Log the error to the console
        res.status(500).json({ error: error.message });
    }
});

app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.get("*", (req, res) => {
    res.status(404).json("404 Not Found");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});