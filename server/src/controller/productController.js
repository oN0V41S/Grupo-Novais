// Importando modelos
const Product = require("../model/product.js");

// Tratamento de requisição GET
async function getProduct(req, res) {
  console.log("Busancdo Produtos...");
  const products = await Product.find();
  return res.send(products);
}

// Tratamento de requisição POST
async function postProduct(req, res) {
  console.log("Realizando POST...");
  // Iniciando um objeto do Tipo Filme para inserir no banco
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    link_buy: req.body.link_buy,
    images: req.body.images,
  });

  await product.save();
  return res.send(product);
}

// Tratamento de requisição PUT
async function putProduct(res, req) {
  console.log("Realizando PUT...");
  // Procura e atualiza o dado
  const product = await Product.findAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
      link_buy: req.body.link_buy,
      images: req.body.images,
    },
    {
      new: true,
    },
  );

  return res.send(product);
}

// Tratamento de Requisição DELETE
async function deleteProduct(req, res) {
  console.log("Realizando DELETE...");
  // Procura e Deletando Filme por ID
  const product = await Product.findByIdAndDelete(req.params.id);
  return res.send(product);
}

module.exports = [getProduct, postProduct, deleteProduct, putProduct];
