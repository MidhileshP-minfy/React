import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import authMiddleware from './middleware/auth.js';
import adminMiddleware from './middleware/admin.js';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const app = express();
app.use(express.json());

const users = [];
const todos = [];

app.post('/register', async (req, res) => {
  const { username, password, role = 'user' } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = users.length + 1;
  users.push({ id, username, password: hashedPassword, role });
  res.status(201).json({ message: 'User registered successfully.' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.json({ accessToken: token });
});

app.get('/api/todos', authMiddleware(SECRET_KEY), (req, res) => {
  const userTodos = todos.filter(todo => todo.userId === req.user.id);
  res.json(userTodos);
});

app.post('/api/todos', authMiddleware(SECRET_KEY), (req, res) => {
  const { task } = req.body;
  const id = todos.length + 1;
  const todo = { id, task, userId: req.user.id };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete('/api/todos/:id', authMiddleware(SECRET_KEY), (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id && t.userId === req.user.id);
  if (index === -1) return res.status(403).json({ message: 'Not allowed' });

  todos.splice(index, 1);
  res.json({ message: 'Deleted successfully' });
});


app.get(
  '/api/admin/all-todos',
  authMiddleware(SECRET_KEY),
  adminMiddleware,
  (req, res) => {
    res.json(todos);
  }
);

app.listen(3000, () => console.log('Server running on port 3000'));
