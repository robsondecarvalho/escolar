/**
 * Created by Osvaldo on 06/10/15.
 */
var Mongoose = require('mongoose');
var hub = require('../hub/hub.js');

function Banco() {
    var me = this;
    var db;
    me.listeners = {};
    console.log("iniciou o banco");
    Mongoose.connect('mongodb://localhost/Escolar');
    this.mongoose = Mongoose;
    this.conectado = false;
    db = Mongoose.connection;
    db.on('error', function(err, val) {
        return console.log("error", err, val);
    });
    db.once('open', function() {
        me.wiring();
        this.conectado = true;
        hub.emit('banco.status.ready');
    });
}

Banco.prototype.wiring = function(){
    var me = this;

    me.listeners['rtc.usuario.*'] = me.repassaComando.bind(me);
    
    for(var name in me.listeners){
        hub.on(name, me.listeners[name]);
    }
    hub.emit('banco.status.wired');
};

Banco.prototype.repassaComando = function (msg) {
    var me = this;
    var novoEvento = 'banco.' + msg.getEvento();
    msg.setEvento(novoEvento);
    hub.emit(novoEvento, msg);
};

module.exports = new Banco();