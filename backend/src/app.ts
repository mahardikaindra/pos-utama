import express from 'express';
import database from './database';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.get('/users', (req, res) => {
  // Example: Fetch users from the database
  database.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
