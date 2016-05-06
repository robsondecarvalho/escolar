/**
 * Created by Osvaldo on 06/10/15.
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

var usuario = Mongoose.Schema({
    senha: {type: types.String, required: true},
    tipo: {type: types.Number, required: true},
    nome: {type: types.String, required: true},
    email: {type: types.String, required: true},
    ramal: {type: types.String},
    imagem: {type: types.String}
});

module.exports = Mongoose.model('usuario', usuario);