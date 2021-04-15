const {pool} =require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: 'pakistan@100',
    port: 5000
})

module.exports= pool