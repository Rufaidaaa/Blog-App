const {pool} =require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    host: 'localhost',
    database: 'mydb',
    password: process.env.PASSWORD,
    port: 5000
})

module.exports= pool