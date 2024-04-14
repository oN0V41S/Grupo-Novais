// Importando Credênciais de ambiente
const AUTH = require("../authenticate.js");
const login = AUTH.login;
const password = AUTH.password;
const db = AUTH.db;

// Importando pacotes
const mongoose = require("mongoose");

function App() {
  // String de Conexão com Banco
  mongoose.connect(`mongodb+srv://${login}:${password}@${db}/`);
  console.log("Executando API na porta 3001");
}

module.exports = App;
