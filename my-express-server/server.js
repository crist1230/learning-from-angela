
const express = require('express');

const app = express();

// when the app gets a request on the 'home' page
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: mateas.cri@gmail.com');
});

app.get('/about', (req, res) => {
  res.send('Hi my name is Cristiana and I love Jesus! <3');
});

app.get('/hobbies', (req, res) => {
  res.send('<li>Reading the Bible</li><li>Studying</li><li>Hanging out with friends :)</li>');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
