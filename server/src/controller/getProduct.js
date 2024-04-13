// Importando modelos
const Product = require('../model/product.js')

// Tratamento de requisição GET
async function getProduct(req,res){
  // Buscando todos os filmes no banco de dados
  const products = await Product.find();
  return res.send(films);
}

module.exports = getProduct;