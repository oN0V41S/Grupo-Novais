// Importando modelos
const Product = require("../model/product.js");

// Tratamento de requisição GET
async function getProduct(req, res) {
  console.log("Realizando GET...")
  
  // Buscando todos os filmes no banco de dados
  const products = await Product.find();
  return res.send(products);
}

module.exports = getProduct;
