/**
 * Created by Robson de Carvalho on 13/05/2016.
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

var obj = Mongoose.Schema({
    nome: {type: types.String},
    inicio: {type: types.Date},
    final: {type: types.Date},
    objetivo: {type: types.String}
});

module.exports = Mongoose.model('turma', obj);