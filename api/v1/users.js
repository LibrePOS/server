// --- users.js ---
// Users routing for v1 of the API


// --- SETUP ---

// Setup express
const express = require("express")
const router = express.Router()

// Setup body-parser
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({ extended: true }));


// Setup db
const db = require("./db")


// --- ROUTES ---

// Get list of users
router.get("/get/:user?", (req, res) => {

    // Get user requirement
    let user

    if (req.params.user === undefined) {
        user = ""
    } else {
        user = "WHERE username='" + req.params.user + "'"
    }

    // Selects & returns specific user
    db.run("SELECT username FROM users " + user + ";")
        .then(result => result.rows)
        .then(result => res.send(result))
})

// Check password
router.post("/login", (req, res) => {

    // Get credentials
    let username = req.body.username
    let password = req.body.password

    // TODO: return 400 if the request doesn't have 'username' & 'password'

    // Finds credentials if they exist
    db.run("SELECT username, password FROM users WHERE username=" + username + ";")
        .then(result => result.rows[0])
        .then(result => {

            // Invalid
            if (result === undefined) {
                res.sendStatus(406)

            // Valid
            } else {

                // Remove junk
                username = username.replaceAll("'", "")
                password = password.replaceAll("'", "")

                // Check if correct
                if (result.username == username && result.password == password) {
                    res.sendStatus(200)
                } else {
                    res.sendStatus(401)
                }
            }
        })
})


// --- EXPORT ---

module.exports = router