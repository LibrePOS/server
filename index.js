// --- index.js ---
// Entrypoint for the backend server
// Version: v0.0.1


// --- SETUP ---

// Setup express
const express = require("express")
const app = express()

// Setup .env variables
require("dotenv").config()

const PORT = process.env.PORT
const VERSION = process.env.VERSION


// --- API ---

// Get version
app.get("/version", (req, res) => {
    res.send(VERSION)
})


// --- RUN ---

app.listen(PORT)