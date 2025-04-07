const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      platform TEXT,
      exam_date TEXT,
      exam_time TEXT,
      fee REAL
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      reg_number TEXT,
      aadhar TEXT,
      abc_id TEXT,
      course_id INTEGER
    )
  `);
});

module.exports = db;