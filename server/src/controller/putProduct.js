// Importando modelos
const Product = require('../model/product.js')

// Tratamento de requisição PUT
async function putProduct(res,req){
  // Procura e atualiza o dado
  const product = await Product.findAndUpdate(req.params.id, {
    name:        req.body.name,
    price:        req.body.price,
    link_buy: req.body.link_buy,
    images:    req.body.images
 },  
  {
    new: true
  })

  return res.send(product);
}

module.exports = putProduct;