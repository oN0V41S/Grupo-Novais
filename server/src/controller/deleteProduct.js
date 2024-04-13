// Importando modelos
const Product = require('../model/product.js')

// Tratamento de Requisição DELETE
async function deleteProduct(req,res){
  // Procura e Deletando Filme por ID
  const product = await Product.findByIdAndDelete(req.params.id)
  return res.send(product)
}

module.exports = deleteProduct;