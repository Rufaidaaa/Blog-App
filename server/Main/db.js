<<<<<<< HEAD
const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: process.env.DB,
        password: process.env.PASSWORD,
    port: 5432
=======
const {pool} =require('pg')
<<<<<<< HEAD

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: 'pakistan@100',
=======
require('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    host: 'localhost',
    database: 'mydb',
    password: process.env.PASSWORD,
>>>>>>> Express-API-request-pSQL-queries
    port: 5000
>>>>>>> master
})

module.exports= pool