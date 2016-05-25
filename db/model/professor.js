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
    matricula: {type: types.Number},
    pessoa: {type: types.ObjectId, ref:'usuario'}

});

module.exports = Mongoose.model('professor', obj);