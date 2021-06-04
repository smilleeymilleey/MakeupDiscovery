require('dotenv').config()



fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(data => console.log(data));

  console.log(data)