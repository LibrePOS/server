// --- v1.js ---
// Main entypoint for v1 of the API


// --- SETUP ---

// Setup express
const express = require("express")
const router = express.Router()


// --- ROUTES ---

// Users
router.use("/users", require("./v1/users"))

// Inventory
router.use("/inv", require("./v1/inventory"))


// --- EXPORT ---

module.exports = router