const mongoose = require('mongoose')

// Modelo do objeto de Produto que será utilizado no banco
const Product = mongoose.model('Film', {
  name:        String,
  price:  String,
  link_buy: String,
  images:    [String]
});

module.exports = Product;