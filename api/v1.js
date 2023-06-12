// --- v1.js ---
// Main entrypoint for v1 of the API


// --- SETUP ---

// Setup express
const express = require("express")
const router = express.Router()

// Setup db
require("./v1/db").init()


// --- ROUTES ---

// Users
router.use("/users", require("./v1/users"))

// Inventory
router.use("/inv", require("./v1/inventory"))


// --- EXPORT ---

module.exports = router