const countries = require('../data/country_list.json');

function getCurrentPrice(currency) {
  let found = false;
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
  return '$10000';
}

export default getCurrentPrice;
