/**
 * Created by Robson de Carvalho on 28/04/2016.
 */


var Manager = require('./manager.js');
var utility = require('util');
var Model = require('../model/turmaProfessor.js');
var hub = require('../../hub/hub.js');
var Mensagem = require('../../util/mensagem.js');

function TurmaProfessorManager(){
    var me = this;
    Manager.call(me);
    me.model = Model;
    me.listeners = {};

    me.wiring();
}

utility.inherits(TurmaProfessorManager, Manager);

/**
 * Inicia o tratamento dos namespace dos eventos, method recebe o nome da função
 * que vai ser executada por meio da herança.
 */
TurmaProfessorManager.prototype.executaCrud = function(msg){
    var me = this;
    var method = msg.getEvento().substr(msg.getEvento().lastIndexOf('.')+1);
    try {
        me[method](msg);
    }catch (e){
        me.emitManager(msg, 'error.manager', {err: e});
    }
};

TurmaProfessorManager.prototype.wiring = function(){
    var me = this;
    me.listeners['banco.turmaprofessor.*'] = me.executaCrud.bind(me);

    for(var name in me.listeners){
        hub.on(name, me.listeners[name]);
    }
};

module.exports = new TurmaProfessorManager();