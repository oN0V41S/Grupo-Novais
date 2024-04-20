// Importando pacotes
const express = require("express");

// Iniciando Variável da Aplicação
const app = express();

// Rota Principal
app.get("/", (req, res) => {
  return res.send("Bem Vindo a API...");
});

// Importando Middleware de requisições
const bodyParser = require('express-json');

// Adicionando na aplicação o middleware
app.use(bodyParser());

// Definindo Rotas
app.use("/products", require("./src/routes/productRoutes.js"));
app.use("/users", require("./src/routes/userRoutes.js"));

// Configurando Aplicação
const port = 3001;
const index = require("./src/index.js");

// Executa aplicação
app.listen(port, index);
