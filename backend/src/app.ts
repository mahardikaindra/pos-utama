// Import necessary modules and setup Express
import express from 'express';
import database from './database';

const app = express();
const PORT = 3000;

app.use(express.json());

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
