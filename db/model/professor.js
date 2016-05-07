/**
 * Created by Robson de Carvalho on 30/04/2016.
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

var professor = Mongoose.Schema({
    nome: {type: types.String, required: true},
    datanascimento: {type: types.Date, required: true},
    cpf: {type: types.Number, required: true},
    rg: {type: types.Number, required: true},
    sexo: {type: types.Boolean, required: true},
    endereco: {type: types.String, required: true},
    escolaridade: {type: types.String, required: true},
    email: {type: types.String, required: true},
    telefone: {type: types.Number, required: true},
    admissao: {type: types.Date, required: true},
    salario: {type: types.Number, required: true},
    bancodehoras: {type: types.Number, required: true},
    advertencia: {type: types.String},
    faltasMensal: {type: types.Number},
    dificuldadesInformadas: {type: types.String},
    comparecimentoReuniao: {type: types.Boolean},
});

module.exports = Mongoose.model('professor', professor);