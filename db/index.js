/**
 * Created by Osvaldo on 13/03/15.
 */

var hub = require('../hub/hub.js');
require('./bdteste.js');
var Managers = null;

/**
 * se escutar 'banco.status.ready' no hub, carrega os managers que seraão usados e da um emit informando que o banco está
 * pronto.
 */
hub.on('banco.status.ready', function(){
    console.log('vou chamar os managers');

    Managers = require('./managers/');

    process.nextTick(function(){
        console.log('banco finalizado');
        hub.emit('banco.ready');
    });
});

var banco = require('./Banco.js');