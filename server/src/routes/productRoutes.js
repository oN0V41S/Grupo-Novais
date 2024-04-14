// Importando Pacotes
const Router = require("express");

// Iniciando Roteador
const router = Router()

// Importando funções
const getProduct = require("../controller/productController.js");
const postProduct = require("../controller/productController.js");
const deleteProduct = require("../controller/productController.js");
const putProduct = require("../controller/productController.js");

// Tratamento de requisições
router.get("/", getProduct);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", putProduct);

module.exports = router