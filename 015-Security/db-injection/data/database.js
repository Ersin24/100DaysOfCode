const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'Eg145723.',
  multipleStatements: true // Bunu da kaldırmamız lazım çünkü açık olursa bu injeection yiyebilir. 
})

module.exports = pool;