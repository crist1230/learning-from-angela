
const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
app.use(express.urlencoded());

app.get('/', (req, res) => {

  res.sendFile(__dirname + '/index.html');

  /*
  __dirname will give you the file path of the current file. In this case: calculator.js
  We know that the index.html is located with this current file so the code will run because the
  path to get to this file is the same as the path to get to the index.html file.

  NOTE: res.sendFile only works with direct path and not relative path so we can't just use '/index.html'
  */

});

app.post('/', (req, res) => {

  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);

  let result = num1 + num2;

  res.send('Your result is ' + result + '.');

  /*
  When you get a request to post something on the route
  the code, req.body, is going to access what information wants
  to be posted on the route

  req is basically refering to what wants to be posted

  "Hey! I want to post something on the root route!" (app.post('/', (req, res) => {})
  "Alright! I'm going to look into what you want to post!" (req.body)
  */

});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {

  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let bmi = (weight/(height*height))*703;

  res.send(`Your BMI is ${bmi}.`);

});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
