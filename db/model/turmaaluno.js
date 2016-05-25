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
    aluno: {type: types.ObjectId, ref: 'aluno'},
    turma: {type: types.ObjectId, ref: 'turma'}

});

module.exports = Mongoose.model('turmaaluno', obj);
