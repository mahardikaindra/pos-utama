// Import necessary modules and setup Express
import express from 'express';
import database from './database';
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
  database.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  database.query('SELECT * FROM users WHERE id = ?', userId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching user');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('User not found');
    } else {
      res.json(result[0]);
    }
  });
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  database.query('INSERT INTO users SET ?', newUser, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error creating user');
      return;
    }
    if(result) {
      console.log("User created successfully", result);
      res.status(201).send('User created successfully');
    }
  });
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  database.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error updating user');
      return;
    }
    if(result) {
      console.log("User updated successfully", result);
      res.status(200).send('User updated successfully');
    }
  });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  database.query('DELETE FROM users WHERE id = ?', userId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error deleting user');
      return;
    }
    if(result) {
      console.log("User deleted successfully", result);
      res.status(200).send('User deleted successfully');
    }
  });
});

// Students
app.get('/students', (req, res) => {
  database.query('SELECT * FROM students', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching students');
      return;
    }
    const responseObj = { results, responseMessage: 'Success getting students' };
    res.json(responseObj);
  });
});

app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  database.query('SELECT * FROM students WHERE student_id = ?', studentId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching student');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Student not found');
    } else {
      res.json(result[0]);
    }
  });
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  database.query('INSERT INTO students SET ?', newStudent, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error creating student');
      return;
    }
    if(result) {
      console.log("Student created successfully", result);
      res.status(201).send('Student created successfully');
    }
  });
});

app.put('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;
  database.query('UPDATE students SET ? WHERE student_id = ?', [updatedStudent, studentId], (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error updating student');
      return;
    }
    if(result) {
      console.log("Student updated successfully", result);
      res.status(200).send('Student updated successfully');
    }
  });
});

app.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;
  database.query('DELETE FROM students WHERE student_id = ?', studentId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error deleting student');
      return;
    }
    if(result) {
      console.log("Students deleted successfully", result);
      res.status(200).send('Students deleted successfully');
    }
  });
});

// Lectures
app.get('/lectures', (req, res) => {
  database.query('SELECT * FROM lectures', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching lectures');
      return;
    }
    const responseObj = { results, responseMessage: 'Success getting lectures' };
    res.json(responseObj);
  });
});

app.get('/lectures/:id', (req, res) => {
  const lectureId = req.params.id;
  database.query('SELECT * FROM lectures WHERE lecture_id  = ?', lectureId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching lecture');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Lecture not found');
    } else {
      res.json(result[0]);
    }
  });
});

app.post('/lectures', (req, res) => {
  const newLecture = req.body;
  database.query('INSERT INTO lectures SET ?', newLecture, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error creating lecture');
      return;
    }
    if(result) {
      console.log("Lecture created successfully", result);
      res.status(201).send('Lecture created successfully');
    }
  });
});

app.put('/lectures/:id', (req, res) => {
  const lectureId = req.params.id;
  const updateLecture = req.body;
  database.query('UPDATE lectures SET ? WHERE lecture_id  = ?', [updateLecture, lectureId], (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error updating lecture');
      return;
    }
    if(result) {
      console.log("Lecture updated successfully", result);
      res.status(200).send('Lecture updated successfully');
    }
  });
});

app.delete('/lectures/:id', (req, res) => {
  const lectureId = req.params.id;
  database.query('DELETE FROM lectures WHERE lecture_id  = ?', lectureId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error deleting lecture');
      return;
    }
    if(result) {
      console.log("Lecture deleted successfully", result);
      res.status(200).send('Lecture deleted successfully');
    }
  });
});

// Subject || Mata Kuliah
app.get('/subjects', (req, res) => {
  database.query('SELECT * FROM subjects', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching subjects');
      return;
    }
    const responseObj = { results, responseMessage: 'Success getting subject' };
    res.json(responseObj);
  });
});

app.get('/subjects/:id', (req, res) => {
  const subjectId = req.params.id;
  database.query('SELECT * FROM subjects WHERE subject_id   = ?', subjectId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching subject');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Subject not found');
    } else {
      res.json(result[0]);
    }
  });
});

app.post('/subjects', (req, res) => {
  const newLecture = req.body;
  database.query('INSERT INTO subjects SET ?', newLecture, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error creating subject');
      return;
    }
    if(result) {
      console.log("Subject created successfully", result);
      res.status(201).send('Subject created successfully');
    }
  });
});

app.put('/subjects/:id', (req, res) => {
  const subjectId = req.params.id;
  const updateLecture = req.body;
  database.query('UPDATE subjects SET ? WHERE subject_id   = ?', [updateLecture, subjectId], (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error updating subject');
      return;
    }
    if(result) {
      console.log("Subject updated successfully", result);
      res.status(200).send('Subject updated successfully');
    }
  });
});

app.delete('/subjects/:id', (req, res) => {
  const subjectId = req.params.id;
  database.query('DELETE FROM subjects WHERE subject_id   = ?', subjectId, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error deleting subject');
      return;
    }
    if(result) {
      console.log("Subject deleted successfully", result);
      res.status(200).send('Subject deleted successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
