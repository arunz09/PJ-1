const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.post('/api/admin/course', (req, res) => {
  const { name, description, platform, exam_date, exam_time, fee } = req.body;
  const stmt = db.prepare(`
    INSERT INTO courses (name, description, platform, exam_date, exam_time, fee)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(name, description, platform, exam_date, exam_time, fee, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Course added successfully' });
  });
  stmt.finalize();
});

app.get('/api/courses', (req, res) => {
  db.all('SELECT * FROM courses', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.post('/api/student/register', (req, res) => {
  const { name, reg_number, aadhar, abc_id, course_id } = req.body;
  const stmt = db.prepare(`
    INSERT INTO students (name, reg_number, aadhar, abc_id, course_id)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(name, reg_number, aadhar, abc_id, course_id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Registration successful' });
  });
  stmt.finalize();
});

app.get('/api/admin/students', (req, res) => {
  db.all('SELECT * FROM students', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});