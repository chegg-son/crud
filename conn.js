/* eslint-disable indent */
const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'todo'
})

module.exports = db
