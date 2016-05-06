/**
 * Created by Osvaldo on 23/07/15.
 */

var hub = require('../hub/hub.js');
var Mensagem = require('../util/mensagem.js');
var utility = require('util');
var basico = require('./basicRtc.js');
var fs = require('fs');
utility.inherits(RtcRoot, basico);

function RtcRoot(conf){
    var me = this;
    me.config = conf;
    me.listeners = {};
    me.browserlisteners = {};

    console.log('rtcRoottttt', me.config.socket.id);

    hub.emit('rtcLogin.destroy');

    me.wiring();
    me.interfaceWiring();
}

RtcRoot.prototype.teste = function(msg){
    console.log('chegou ', msg);
};

RtcRoot.prototype.wiring = function(){
    var me = this;

    me.listeners['usuario.created'] = me.emitePraInterface.bind(me);

    for(var name in me.listeners){
        hub.on(name, me.listeners[name]);
    }
};

RtcRoot.prototype.interfaceWiring = function(){
    var me = this;

    me.browserlisteners['usuario.create'] = me.daInterface.bind(me);

    for(var name in me.browserlisteners){
        me.config.socket.on(name, me.browserlisteners[name]);
    }
};

module.exports = RtcRoot;