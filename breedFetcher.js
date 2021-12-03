const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (body === '[]') {
      return callback (`This breed can not be found.`, null);

    } else if (error) {
      return callback (error, null);

    } else {
      const data = JSON.parse(body);
      return callback (null, data[0]["description"]);
    };
  });
};

module.exports = { fetchBreedDescription };