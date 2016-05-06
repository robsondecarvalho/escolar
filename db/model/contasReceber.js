/**
 * Created by Robson de Carvalho on 04/05/2016.
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

var contasReceber = Mongoose.Schema({
    nome: {type: types.String, required: true}
});

module.exports = Mongoose.model('contasReceber', contasReceber);