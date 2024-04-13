// Importando pacotes
const express = require('express')
const mongoose = require('mongoose')

// Importando Modelos
const Product = require('./src/model/product.js')

// Importando Funções de controle de Requisição
const getProduct = require('./src/controller/getProduct.js')
const postProduct = require('./src/controller/postProduct.js')
const deleteProduct = require('./src/controller/deleteProduct.js')
const putProduct = require('./src/controller/putProduct.js')

// Iniciando Variável da Aplicação
const app = express();

// Formatando resposta para JSON e adicionando Porta da aplicação
app.use(express.json());
const port = 3001;

// Tratamento de requisição GET
app.get('/', getProduct)

// Tratamento de requisição POST
app.post('/', postProduct)

// Tratamento de requisição DELETE
app.delete('/:id', deleteProduct)

// Tratamento de requisição PUT
app.put('/:id',putProduct)

// Executa aplicação na porta iniciada

app.listen(port, ()=>{
    // String de Conexão com Banco
    mongoose.connect('mongodb+srv://rafaelaugustonnovais:7KrTy3jABMVnNmOE@free-cluster.xkizxqe.mongodb.net/')
    }
)

