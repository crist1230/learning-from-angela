
const express = require('express');
const https = require('https');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  // Let me access the body of what is being requested to post.
  const query = req.body.cityName;
  const units = 'imperial';
  const apiKey = '400d2362b684226cd1d72b8642794d5e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
  // I want you to get me this url and to return back the info you recieved.
  https.get(url, (res2) => {
    console.log(res2.statusCode);

    // When you get data, do this. Data is built in so it's not like your entering a random string.
    res2.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      // server can only send one response back at a time.
      res.write(`<h1>The temperatire in ${query} is ${temp} degrees fahrenheit.</h1>`);
      res.write(`<p>The weather currently is ${weatherDescription}.</p>`);
      res.write(`<img src=${imageURL}>`)
      res.send();
    });

  });

});





app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
