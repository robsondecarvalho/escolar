/**
 * Created by Robson de Carvalho on 28/04/2016.
 */
var hub = require('../hub/hub.js');
var Mensagem = require('../util/mensagem.js');

var bdteste = function(){
    var me = this;
    console.log("Iniciei o teste do banco");
    me.listeners = {};
    me.wiring();
};

bdteste.prototype.criaidioma = function () {
    var me = this;
    var obj = [
        {
            nome: 'portugues',
            sigla: 'Pt-Br'
        },
        {
            nome: 'ingles',
            sigla: 'eng'
        },
        {
            nome: 'espanhol',
            sigla: 'espn'
        }

    ];

    var msg = new Mensagem(me, 'banco.idioma.create', {res: obj}, 'idioma');
    hub.emit(msg.getEvento(), msg);

};

bdteste.prototype.idiomacriated = function (msg) {
    var me = this;
    me.idiomas = msg.getRes();
    me.criapais();
};

bdteste.prototype.criapais = function () {
    var me = this;
    var obj = [
        {
            nome: 'Brasil'
        },
        {
            nome: 'Angola'
        },
        {
            nome: 'Argentina'
        },
        {
            nome: 'Bolivia'
        }
    ];

    var msg = new Mensagem(me, 'banco.pais.create', {res: obj}, 'pais');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.paiscreated = function (msg) {
    var me = this;
    me.pais = msg.getRes();
    me.criaestado();
};

bdteste.prototype.criaestado = function () {
    var me = this;
    var obj = [
        {
            nome: 'Santa Catarina',
            pais: me.pais[0]
        },
        {
            nome: 'Rio Grande do Sul',
            pais: me.pais[0]
        },
        {
            nome: 'Amazonas',
            pais: me.pais[0]
        },
        {
            nome: 'Paraná',
            pais: me.pais[0]
        }
    ];

    var msg = new Mensagem(me, 'banco.estado.create', {res: obj}, 'estado');

    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retEstadoCreate = function (msg) {
    var me = this;
    me.estados = msg.getRes();
    me.criacidade();
};

bdteste.prototype.criacidade = function () {
    var me = this;
    //console.log('criaou o estado', me.estados);
    var obj = [
        {
            nome: 'Balneario Camboriu',
            estado: me.estados[0]
        },
        {
            nome: 'Alegrete',
            estado: me.estados[1]
        },
        {
            nome: 'Curitiba',
            estado: me.estados[3]
        },
        {
            nome: 'Florianópolis',
            estado: me.estados[0]
        }
    ];

    var msg = new Mensagem(me, 'banco.cidade.create', {res: obj}, 'cidade');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retCidadeCreate = function (msg) {
    var me = this;
    me.cidades = msg.getRes();
    me.crialogradouro();
};

bdteste.prototype.crialogradouro = function () {
    var me = this;
    var obj = [
        {
            rua: 'Rua dos Bandeirantes',
            numero: 10,
            cep: 88102378,
            cidade: me.cidades[0]
        },
        {
            rua: 'Rua dos Graciosa',
            numero: 1012,
            cep: 88123444,
            cidade: me.cidades[2]
        },
        {
            rua: 'Rua das Palmeiras',
            numero: 12,
            cep: 88345333,
            cidade: me.cidades[1]
        },
        {
            rua: 'Rua Alberto Swift',
            numero: 1132,
            cep: 88222111,
            cidade: me.cidades[0]
        }
    ];

    var msg = new Mensagem(me, 'banco.logradouro.create', {res: obj}, 'logradouro');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retLogradouroCreate = function (msg) {
    var me = this;
    me.logradouros = msg.getRes();
    me.criausuario();
};

bdteste.prototype.criausuario = function () {
    var me = this;
    var obj = [
        {
            nome:'Robson de Carvalho',
            datanascimento: 1992-06-12,
            cpf: 0912331239,
            senha: 123456,
            email: 'robsondecarvalho@outlook.com',
            endereco: me.logradouros[0],
            idioma: me.idiomas[1]

        },
        {
            nome:'Joao da Silva',
            datanascimento: 1992-08-22,
            cpf: 123134444,
            senha: 123,
            email: 'joadasilva@outlook.com',
            endereco: me.logradouros[1],
            idioma: me.idiomas[0],
        }

    ];

    var msg = new Mensagem(me, 'banco.usuario.create', {res: obj}, 'usuario');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retUsuarioCreate = function (msg) {
    var me = this;
    me.usuarios = msg.getRes();
    me.criaprofessor();
};

bdteste.prototype.criaprofessor = function () {
    var me = this;
    var obj = [
        {
            matricula: 123712387,
            pessoa: me.usuarios[0]
        },
        {
            matricula: 99023484,
            pessoa: me.usuarios[0]
        },
        {
            matricula: 029328312,
            pessoa: me.usuarios[0]
        }
    ];

    var msg = new Mensagem(me, 'banco.professor.create', {res: obj}, 'professor');

    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retProfessorCreate = function (msg) {
    var me = this;
    me.professores = msg.getRes();
    me.criaturma();
};

bdteste.prototype.criaturma = function () {
    var me = this;
    var obj = [
        {
            nome: 'Infantil A',
            inicio: 2016-02-10,
            final: 2016-07-10,
            objetivo: 'Conhecimento das partes do corpo dos sentidos'

        },
        {
            nome: 'Infantil B',
            inicio: 2016-02-10,
            final: 2016-07-10,
            objetivo: 'Ensino dos números e a contagem'
        }
    ];

    var msg = new Mensagem(me, 'banco.turma.create', {res: obj}, 'turma');

    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retTurmaCreate = function (msg) {
    var me = this;
    me.turmas = msg.getRes();
    me.criaaluno();
};

bdteste.prototype.criaaluno = function () {
    var me = this;
    var obj = [
        {
            nome: 'Maria Eduarda da Silva',
            datanascimento: 2014-01-10,
            matricula: 1123232

        },
        {
            nome: 'Joao Ferreira de Lima',
            datanascimento: 2013-02-10,
            matricula: 982342
        }
    ];

    var msg = new Mensagem(me, 'banco.aluno.create', {res: obj}, 'aluno');

    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retAlunoCreate = function (msg) {
    var me = this;
    me.alunos = msg.getRes();
    me.criaboletimdesempenho();
};

bdteste.prototype.criaboletimdesempenho = function () {
    var me = this;
    var obj = [
        {
            texto: 'Muitas dificuldades no aprendizado durante os primeiros meses',
            data: 2016-05-19,
            aluno: me.alunos[0]

        },
        {
            texto: 'Agitado nos primeiros dias da semana',
            data: 2016-05-19,
            aluno: me.alunos[1]
        }
    ];

    var msg = new Mensagem(me, 'banco.boletimdesempenho.create', {res: obj}, 'boletimdesempenho');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retBoletimdesempenhoCreate = function (msg) {
    var me = this;
    me.boletimdesempenhos = msg.getRes();
    me.criaturmaaluno();
};

bdteste.prototype.criaturmaaluno = function () {
    var me = this;
    var obj = [
        {
            turma: me.turmas[0],
            aluno: me.alunos[1]

        },
        {
            turma: me.turmas[1],
            aluno: me.alunos[1]
        }
    ];

    var msg = new Mensagem(me, 'banco.turmaaluno.create', {res: obj}, 'turmaaluno');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retTurmaalunoCreate = function (msg) {
    var me = this;
    me.turmaalunos = msg.getRes();
    me.criaturmaprofessor();
};

bdteste.prototype.criaturmaprofessor = function () {
    var me = this;
    var obj = [
        {
            professor: me.professores[0],
            turma: me.turmas[0]

        },
        {
            professor: me.professores[1],
            turma: me.turmas[1]

        }
    ];

    var msg = new Mensagem(me, 'banco.turmaprofessor.create', {res: obj}, 'turmaprofessor');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retTurmaprofessorCreate = function (msg) {
    var me = this;
    me.turmaprofessores = msg.getRes();
    me.criarelatorio();
};

bdteste.prototype.criarelatorio = function () {
    var me = this;
    var obj = [
        {
            texto: 'Relatório de atividades das professoras',
            data: 2010-08-12,
            autor: me.usuarios[0]
        },
        {
            texto: 'Relatório de atividades das professoras 2',
            data: 2016-10-31,
            autor: me.usuarios[1]
        }
    ];

    var msg = new Mensagem(me, 'banco.relatorio.create', {res: obj}, 'relatorio');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retRelatorioCreate = function (msg) {
    var me = this;
    me.relatorios = msg.getRes();
    me.criaresponsavelaluno();
};

bdteste.prototype.criaresponsavelaluno = function () {
    var me = this;
    var obj = [
        {
            aluno: me.alunos[0],
            responsavel: me.usuarios[0]

        },
        {
            aluno: me.alunos[0],
            responsavel: me.usuarios[0]

        }
    ];

    var msg = new Mensagem(me, 'banco.responsavelaluno.create', {res: obj}, 'responsavelaluno');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retResponsavelalunoCreate = function (msg) {
    var me = this;
    me.responsavelalunos = msg.getRes();
    me.criacontasapagar();
};


bdteste.prototype.criacontasapagar = function () {
    var me = this;
    var obj = [
        {
            nome: 'Luz',
            valor: 1234,
            vencimento: 2016-09-09,
            status: 0

        },
        {
            nome: 'Água',
            valor: 1234,
            vencimento: 2016-09-09,
            status: 0

        }
    ];

    var msg = new Mensagem(me, 'banco.contasapagar.create', {res: obj}, 'contasapagar');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retContasapagarCreate = function (msg) {
    var me = this;
    me.contasapagars = msg.getRes();
    me.criacontasareceber();
};


bdteste.prototype.criacontasareceber = function () {
    var me = this;
    var obj = [
        {
            nome: 'Mensalidade Aluno X',
            valor: 333,
            vencimento: 2016-09-12,
            status: 1

        },
        {
            nome: 'Alimentação Aluno Y',
            valor: 2233,
            vencimento: 2016-12-31,
            status: 0

        }
    ];

    var msg = new Mensagem(me, 'banco.contasareceber.create', {res: obj}, 'contasareceber');
    hub.emit(msg.getEvento(), msg);
};

bdteste.prototype.retContasareceberCreate = function (msg) {
    var me = this;
    me.contasarecebers = msg.getRes();
    console.log('Terminei o teste do banco!')
};


bdteste.prototype.wiring = function(){
    var me  = this;

    me.listeners['banco.ready'] = me.criaidioma.bind(me);
    me.listeners['idioma.created'] = me.idiomacriated.bind(me);
    me.listeners['pais.created'] = me.paiscreated.bind(me);
    me.listeners['estado.created'] = me.retEstadoCreate.bind(me);
    me.listeners['cidade.created'] = me.retCidadeCreate.bind(me);
    me.listeners['logradouro.created'] = me.retLogradouroCreate.bind(me);
    me.listeners['usuario.created'] = me.retUsuarioCreate.bind(me);
    me.listeners['professor.created'] = me.retProfessorCreate.bind(me);
    me.listeners['turma.created'] = me.retTurmaCreate.bind(me);
    me.listeners['aluno.created'] = me.retAlunoCreate.bind(me);
    me.listeners['boletimdesempenho.created'] = me.retBoletimdesempenhoCreate.bind(me);
    me.listeners['turmaaluno.created'] = me.retTurmaalunoCreate.bind(me);
    me.listeners['turmaprofessor.created'] = me.retTurmaprofessorCreate.bind(me);
    me.listeners['relatorio.created'] = me.retRelatorioCreate.bind(me);
    me.listeners['responsavelaluno.created'] = me.retResponsavelalunoCreate.bind(me);
    me.listeners['contasapagar.created'] = me.retContasapagarCreate.bind(me);
    me.listeners['contasareceber.created'] = me.retContasareceberCreate.bind(me);

    for(var name in me.listeners){
        hub.on(name, me.listeners[name]);
    }
};

module.exports = new bdteste();