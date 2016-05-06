/**
 * Created by Osvaldo on 06/10/15.
 */
var Mongoosemodels = {
    usuario: require('./UsuarioManager.js'),
    turma: require('./TurmaManager.js'),
    turmaProfessor: require('./TurmaProfessorManager.js'),
    professor: require('./ProfessorManager.js'),
    aluno: require('./AlunoManager.js'),
    matricula: require('./MatriculaManager.js'),
    responsavel: require('./ResponsavelManager.js'),
    alunoResponsavel: require('./AlunoResponsavelManager.js'),
    financeiro: require('./FinanceiroManager.js'),
    contasPagar: require('./ContasPagarManager.js'),
    contasReceber: require('./ContasReceberManager.js')
};

module.exports = Mongoosemodels;