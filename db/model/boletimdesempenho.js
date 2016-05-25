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
    texto: {type: types.String},
    data: {type: types.Date},
    aluno: {type: types.ObjectId, ref: 'aluno'},
});

module.exports = Mongoose.model('boletimdesempenho', obj);
