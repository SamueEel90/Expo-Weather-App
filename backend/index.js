const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const filePath = './locations.json';


app.get('/locations', (req, res) => {
  const data = fs.readFileSync(filePath);
  res.json(JSON.parse(data));
});


app.post('/locations', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Missing name' });

  const data = JSON.parse(fs.readFileSync(filePath));
  if (!data.includes(name)) {
    data.push(name);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  res.status(201).json({ message: 'Location saved', locations: data });
});


app.delete('/locations/:name', (req, res) => {
  const name = req.params.name;
  let data = JSON.parse(fs.readFileSync(filePath));
  data = data.filter(loc => loc !== name);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: 'Deleted', locations: data });
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));