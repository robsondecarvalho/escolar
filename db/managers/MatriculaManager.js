/**
 * Created by Robson de Carvalho on 30/04/2016.
 */

var Manager = require('./manager.js');
var utility = require('util');
var Model = require('../model/matricula.js');
var hub = require('../../hub/hub.js');
var Mensagem = require('../../util/mensagem.js');

function MatriculaManager(){
    var me = this;
    Manager.call(me);
    me.model = Model;
    me.listeners = {};

    me.wiring();
}

utility.inherits(MatriculaManager, Manager);

/**
 * Inicia o tratamento dos namespace dos eventos, method recebe o nome da função
 * que vai ser executada por meio da herança.
 */
MatriculaManager.prototype.executaCrud = function(msg){
    var me = this;
    var method = msg.getEvento().substr(msg.getEvento().lastIndexOf('.')+1);
    try {
        me[method](msg);
    }catch (e){
        me.emitManager(msg, 'error.manager', {err: e});
    }
};

MatriculaManager.prototype.wiring = function(){
    var me = this;
    me.listeners['banco.matricula.*'] = me.executaCrud.bind(me);

    for(var name in me.listeners){
        hub.on(name, me.listeners[name]);
    }
};

module.exports = new MatriculaManager();
