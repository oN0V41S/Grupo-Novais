// Importando Pacotes
const Router = require("express");

// Iniciando Roteador
const router = Router();

// Importando Controladores
const [
  getUsers,
  postUser,
  deleteUser,
  putUser,
] = require("../controller/userController.js");

router.get("/", getUsers);
router.post("/", postUser);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);

module.exports = router;
