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

var aluno = Mongoose.Schema({
    nome: {type: types.String, required: true},
    datanascimento: {type: types.Date, required: true},
    cpf: {type: types.Number, required: true},
    sexo: {type: types.Boolean, required: true},
    mensalidade: {type: types.Number, required: true},
    materiasMatriculadas: {type: types.String},
    doencas: {type: types.String},
    avaliacaoDescritivaMensal: {type: types.String},
    advertenciaFamilia: {type: types.String},

});

module.exports = Mongoose.model('aluno', aluno);