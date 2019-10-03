const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://Victor:Victor@omnistack-sxjba.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE
//Metodos para: Buscar, Criar, Alterar e Deletar

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);