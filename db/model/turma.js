/**
 * Created by Robson de Carvalho on 28/04/2016.
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

var turma = Mongoose.Schema({
    nome: {type: types.String, required: true},
    inicio: {type: types.Date, required: true},
    final: {type: types.Date, required: true}
});

module.exports = Mongoose.model('turma', turma);