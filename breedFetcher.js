const request = require('request');
const breedName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (body === '[]') {
    console.log(`This breed can not be found.`);

  } else if (error) {
    console.log('error: ', error);

  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  };
});