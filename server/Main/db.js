const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: process.env.DB,
        password: process.env.PASSWORD,
    port: 5432
})

module.exports= pool