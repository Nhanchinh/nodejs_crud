
import mysql from 'mysql2/promise'// get the client
//const mysql = require('mysql2');

// create the pool to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

console.log('create connection pool')

export default pool;
