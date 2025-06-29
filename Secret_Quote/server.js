import express from "express"
import jwt from "jsonwebtoken"
import authMiddleware from "./middleware/auth.js";
import dotenv from "dotenv"

dotenv.config()
const app = express();
app.use(express.json());

const users = [];
const SECRET_KEY = process.env.SECRET_KEY;


app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const id = users.length + 1;
    users.push({ id, username, password });
    res.status(201).json({ message: 'User registered successfully.' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
        { id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: '1h' }
    );

    res.json({ accessToken: token });
});

app.get('/api/secret-quote', authMiddleware(SECRET_KEY), (req, res) => {
    res.json({ quote: "The secret to getting ahead is getting started." });
});

app.listen(3000, () => console.log('Server running on port 3000'));
