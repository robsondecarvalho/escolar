/**
 * Created by Robson de Carvalho on 28/04/2016.
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

var turmaProfessor = Mongoose.Schema({
    turma: {type: types.ObjectId, ref: 'turma'},
    professor: {type: types.ObjectId, ref: 'professor'}
});

module.exports = Mongoose.model('turmaProfessor', turmaProfessor);