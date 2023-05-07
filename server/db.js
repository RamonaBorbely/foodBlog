import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'user123',
    password: '12345678',
    database: 'food-blog'
})