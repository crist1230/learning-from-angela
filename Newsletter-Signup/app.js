
const express = require('express');
const https = require('https');

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;
  console.log(firstName, lastName, email)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});


// API Key
// 68bc019762b14e4f29f12614b7299886-us14

// List ID
// 146a764eb4
