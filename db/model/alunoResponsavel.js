/**
 * Created by Robson de Carvalho on 03/05/2016.
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

var alunoResponsavel = Mongoose.Schema({
    aluno: {type: types.ObjectId, ref: 'aluno'},
    responsavel: {type: types.ObjectId, ref: 'responsavel'}
});

module.exports = Mongoose.model('alunoResponsavel', alunoResponsavel);
