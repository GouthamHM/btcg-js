function getCurrentPrice(currency) {
  if (!currency || typeof currency !== 'string') {
    return null;
  }
  return '$10000';
}

export default getCurrentPrice;
