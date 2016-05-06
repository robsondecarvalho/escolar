/**
 * Created by Robson de Carvalho on 03/05/2016.
 */

var Mongoose = require('../Banco.js').mongoose;

var types = Mongoose.Schema.Types;

var options = {
    toJSON: {
        getters: true
    },
    toObject: {
        getters: true
    }
};

var responsavel = Mongoose.Schema({
    nome: {type: types.String, required: true},
    datanascimento: {type: types.Date, required: true},
    cpf: {type: types.Number, required: true},
    rg: {type: types.Number, required: true},
    sexo: {type: types.Boolean, required: true},
    endereco: {type: types.String, required: true},
    escolaridade: {type: types.String, required: true},
    email: {type: types.String, required: true},
    telefone: {type: types.Number, required: true},
    profissao: {type: types.String, required: true}

});

module.exports = Mongoose.model('responsavel', responsavel);
