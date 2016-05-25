/**
 * Created by Osvaldo on 06/10/15.
 */
var Mongoosemodels = {
    aluno: require('./alunoManager.js'),
    boletimdesempenho: require('./boletimdesempenhoManager.js'),
    cidade: require('./cidadeManager.js'),
    contasapagar: require('./contasapagarManager.js'),
    contasareceber: require('./contasareceberManager.js'),
    estado: require('./estadoManager.js'),
    idioma: require('./idiomaManager.js'),
    logradouro: require('./logradouroManager.js'),
    pais: require('./paisManager.js'),
    professor: require('./professorManager.js'),
    relatorio: require('./relatorioManager.js'),
    responsavel: require('./responsavelalunoManager.js'),
    turmaaluno: require('./turmaalunoManager.js'),
    turma: require('./turmaManager.js'),
    turmaprofessor: require('./turmaprofessorManager.js'),
    usuario: require('./usuarioManager.js'),
};

module.exports = Mongoosemodels;