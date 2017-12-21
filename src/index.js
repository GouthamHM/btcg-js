const countries = require('../data/country_list.json');
const url = require('../data/url.json');
const https = require('https');

function getCurrentPrice(currency) {
  let found = false;
  let returnObject = {
    last_updated: null,
    value: null,
    currency: null,
  };
  if (!currency || typeof currency !== 'string') {
    return null;
  }
  countries.forEach((country) => {
    if (currency.toLowerCase() === country.currency.toLowerCase()) {
      found = true;
    }
  });
  if (!found) {
    return null;
  }
  https.get(`${url.api}/currentprice/${currency}.json`, (res) => {
    let body = '';
    res.on('data', (data) => {
      body += data;
    });
    res.on('end', () => {
      body = JSON.parse(body);
      returnObject.last_updated = body.time.updated;
      returnObject.currency = currency.toUpperCase();
      returnObject.value = body.bpi[returnObject.currency].rate;
      return returnObject;
    });
  });
}

export default getCurrentPrice;
