// Importando pacotes
const express = require("express");

// Iniciando Variável da Aplicação
const app = express();

// Importando aplicação
const App = require("./src/app.js");

// Importando Rotas de Produtos
const productRoutes = require('./src/routes/productRoutes.js')
const userRoutes = require('./src/routes/userRoutes.js')

app.use('/product', productRoutes)
app.use('/user', userRoutes)

// Porta da aplicação
const port = 3001;

// Executa aplicação
app.listen(port, App);
