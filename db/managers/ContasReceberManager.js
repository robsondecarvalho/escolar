/**
 * Created by Robson de Carvalho on 04/05/2016.
 */

var Manager = require('./manager.js');
var utility = require('util');
var Model = require('../model/contasReceber.js');
var hub = require('../../hub/hub.js');
var Mensagem = require('../../util/mensagem.js');

function ContasReceberManager(){
    var me = this;
    Manager.call(me);
    me.model = Model;
    me.listeners = {};

    me.wiring();
}

utility.inherits(ContasReceberManager, Manager);

/**
 * Inicia o tratamento dos namespace dos eventos, method recebe o nome da função
 * que vai ser executada por meio da herança.
 */
ContasReceberManager.prototype.executaCrud = function(msg){
    var me = this;
    var method = msg.getEvento().substr(msg.getEvento().lastIndexOf('.')+1);
    try {
        me[method](msg);
    }catch (e){
        me.emitManager(msg, 'error.manager', {err: e});
    }
};

ContasReceberManager.prototype.wiring = function(){
    var me = this;
    me.listeners['banco.contasPagar.*'] = me.executaCrud.bind(me);

    for(var name in me.listeners){
        hub.on(name, me.listeners[name]);
    }
};

module.exports = new ContasReceberManager();