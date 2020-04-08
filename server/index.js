const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const posts = [
  {
    id: 1,
    content: 'Post 01',
  },
  {
    id: 2,
    content: 'Post 02',
  },
  {
    id: 3,
    content: 'Post 03',
  },
  {
    id: 4,
    content: 'Post 04',
  },
];

app.get('/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  res.send(post);
});

app.get('/posts', (req, res) => res.send(posts));
app.get('/now', (req, res) => res.send({ now: new Date() }));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
