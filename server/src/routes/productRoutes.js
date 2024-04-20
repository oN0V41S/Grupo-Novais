// Importando Pacotes
const Router = require("express");

// Iniciando Roteador
const routerProduct = Router();

// Importando funções
const [ getProduct, postProduct, deleteProduct, putProduct ] = require("../controller/productController.js");

// Tratamento de requisições
routerProduct.get("/", getProduct);
routerProduct.post("/", postProduct);
routerProduct.delete("/:id", deleteProduct);
routerProduct.put("/:id", putProduct);

module.exports = routerProduct;
