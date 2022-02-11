const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'istana_bangunan',
    port: 3307,
    multipleStatements: true,
})

db.connect((err) => {
    if(err) console.log(`Error : ${err.message}`)

    console.log(`Connected to mysql server istana_bangunan`)
})

module.exports = {db}