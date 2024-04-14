// Importando Pacotes
const Router = require("express");

// Iniciando Roteador
const router = Router()

// Importando Controladores
const getUsers = require("../controller/userController.js");
const postUser = require("../controller/userController.js");
const deleteUser = require("../controller/userController.js");
const putUser = require("../controller/userController.js");

router.get("/", getUsers);
router.post("/", postUser);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);

module.exports = router;