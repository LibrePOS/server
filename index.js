// --- index.js ---
// Entrypoint for the backend server
// Version: v1.0.0


// --- SETUP ---

// Setup express
const express = require("express")
const app = express()

// Setup .env variables
require("dotenv").config()

const PORT = process.env.PORT || 80
const VERSION = "v1.0.0"


// --- API ---

// Get version
app.get("/version", (req, res) => {
    res.send(VERSION.substring(1).split("."))
})

// API v1
app.use("/api/v1", require("./api/v1"))



// --- RUN ---

app.listen(PORT)