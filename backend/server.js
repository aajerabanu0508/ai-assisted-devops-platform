const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("AI Assisted DevOps Platform Backend Running");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        service: "backend",
        timestamp: new Date()
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});