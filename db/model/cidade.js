/**
 * Created by Robson de Carvalho on 12/05/2016.
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
    estado: {type: types.ObjectId, ref: 'estado'}
});

module.exports = Mongoose.model('cidade', obj);