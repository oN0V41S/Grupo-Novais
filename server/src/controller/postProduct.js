// Importando modelos
const Product = require('../model/product.js')

// Tratamento de requisição POST
async function postProduct(req,res){
  // Iniciando um objeto do Tipo Filme para inserir no banco 
  const product = new Product({
    name:        req.body.name,
    price:        req.body.price,
    link_buy: req.body.link_buy,
    images:    req.body.images
  }) 

  await film.save();
  return res.send(film);
}

module.exports = postProduct;