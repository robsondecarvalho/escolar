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
    //todo se financeiro ou comum
    tipo: {type: types.Number},
    nome: {type: types.String, required: true},
    email: {type: types.String, required: true},
    datanascimento: {type: types.Date},
    imagem: {type: types.String},
    cpf: {type: types.String},
    endereco: {type: types.ObjectId, ref: 'logradouro'},
    idioma: {type: types.ObjectId, ref: 'idioma'}
});

module.exports = Mongoose.model('usuario', usuario);