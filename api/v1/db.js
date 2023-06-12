// --- db.js ---
// Main subroutines for accessing the database


// --- SETUP ---

// Setup .env variables
require("dotenv").config()

const DB_HOST = process.env.LIBREPOS_DB_HOST || "localhost"
const DB_PORT = process.env.LIBREPOS_DB_PORT || "5432"
const DB_USER = process.env.LIBREPOS_DB_USER || "librepos"
const DB_PASS = process.env.LIBREPOS_DB_PASS || "librepos"
const DB_NAME = process.env.LIBREPOS_DB_NAME || "librepos"

// Setup DB
const { Client } = require("pg")

const client = new Client({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS
})


// --- SUBROUTINES ---

// Init the database
async function init() {
    await client.connect()

    await client.query(`CREATE TABLE IF NOT EXISTS users (
                                                            username TEXT UNIQUE NOT NULL,
                                                            password TEXT NOT NULL
                                                        );`)
    return 200
}

// Delete the database
async function drop() {
    await client.query("DROP TABLE users;")
    return 200
}

// Run command
async function run(command) {
    let query = await client.query(command)
    return query
}

module.exports = { init, drop, run }