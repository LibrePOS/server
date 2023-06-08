// --- users.js ---
// Users routing for v1 of the API


// --- SETUP ---

// Setup express
const express = require("express")
const router = express.Router()


// --- ROUTES ---
router.get("/get", (req, res) => {
    let test = require("./db").init()
    res.send(test)
})


// --- EXPORT ---

module.exports = router