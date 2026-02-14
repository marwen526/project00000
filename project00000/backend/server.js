import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const user = {
    name: 'Muaaz',
    age: 18,
    job: 'Software Engineer',
    city: 'Berlin'
};
app.get('/api/user', (req, res) => {
  res.json(user);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
