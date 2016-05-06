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

var matricula = Mongoose.Schema({
    turma: {type: types.ObjectId, ref: 'turma'},
    aluno: {type: types.ObjectId, ref: 'aluno'},
});

module.exports = Mongoose.model('matricula', matricula);