/**
 * Created by Robson de Carvalho on 28/04/2016.
 */
var hub = require('../hub/hub.js');
var Mensagem = require('../util/mensagem.js');

var bdteste = function(){
    var me = this;
    console.log("iniciei o teste do banco");
    me.listeners = {};
    me.usuarios = [];
    me.turmas = [];

    me.wiring();
};

bdteste.prototype.criausuario = function () {
    var me = this;

    var usuarios = [
        {
            email: 'labtic@labtic.com',
            senha: 'firefox2',
            tipo: 0,
            nome: 'labtic'
        },
        {
            email: 'gus@gmail.com',
            senha: '123',
            tipo: 1,
            nome: 'gustavo'
        },
        {
            email: 'osvaldo.miguel@grad.ufsc.br',
            senha: '321',
            tipo: 1,
            nome: 'Osvaldo'
        },
        {
            email: 'fulano@ufsc.br',
            senha: '123456',
            tipo: 1,
            nome: 'Etevaldo'
        }

    ];

    var msg = new Mensagem(me, 'banco.usuario.create', {res: usuarios}, 'usuario');

    hub.emit(msg.getEvento(), msg);

};

bdteste.prototype.criaturma = function () {
    var me = this;
    var turma = {
        nome: 'turma Bolada'
    };

    var msg = new Mensagem(me, 'banco.turma.create', {res: turma}, 'turma');

    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.criaprofessor = function () {
    var me = this;
    var professor = {
        nome: 'Novo Professor'
    };

    var msg = new Mensagem(me, 'banco.professor.create', {res: professor}, 'professor');

    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retusuariocreated = function (msg) {
    var me = this;
    me.usuarios = msg.getRes();
    me.criaturma();
};

bdteste.prototype.criaturmaprofessor = function () {
    var me = this;
    var turmaprofessor = [];
    for(var index in me.usuarios){
        if(me.usuarios[index].tipo != 0){
            var temp = {
                professor: me.usuarios[index],
                turma: me.turmas
            };
            turmaprofessor.push(temp);
        }
    }

    var msg = new Mensagem(me, 'banco.turmaprofessor.create', {res: turmaprofessor}, 'turmaprofessor');

    hub.emit(msg.getEvento(), msg);

};

bdteste.prototype.retprofessorcreated = function (msg) {
    var me = this;
    me.turmas = msg.getRes();
    me.criaturmaprofessor();
};

bdteste.prototype.retturmmacreated = function (msg) {
    var me = this;
    me.turmas = msg.getRes();
    me.criaturmaprofessor();
};

bdteste.prototype.encerrou = function () {
    console.log('da uma ulhada no banco');
};

bdteste.prototype.wiring = function(){
    var me  = this;

    me.listeners['banco.ready'] = me.criausuario.bind(me);
    me.listeners['usuario.created'] = me.retusuariocreated.bind(me);
    me.listeners['turma.created'] = me.retturmmacreated.bind(me);
    me.listeners['professor.created'] = me.retprofessorcreated.bind(me);
    me.listeners['turmaprofessor.created'] = me.encerrou.bind(me);

    for(var name in me.listeners){
        hub.on(name, me.listeners[name]);
    }
};

module.exports = new bdteste();