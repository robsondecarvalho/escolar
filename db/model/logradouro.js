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
    rua: {type: types.String},
    numero: {type: types.Number},
    cep: {type: types.Number},
    cidade: {type: types.ObjectId, ref: 'cidade'}
});

module.exports = Mongoose.model('logradouro', obj);