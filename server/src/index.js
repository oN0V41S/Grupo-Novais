// Importando pacotes
const express = require("express");

// Iniciando Variável da Aplicação
const app = express();

// Formatando resposta para JSON
app.use(express.json());

// Rota Principal
app.get("/", (req, res) => {
  return res.send("Bem Vindo a API...");
});

// Definindo Rotas
app.use("/products", require("./routes/productRoutes.js"));
app.use("/users", require("./routes/userRoutes.js"));

// Configurando Aplicação
const port = 3001;
const index = require("./app.js");

// Executa aplicação
app.listen(port, index);
