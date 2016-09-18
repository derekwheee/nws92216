const five = require('johnny-five');
const barcli = require('barcli');
const board = new five.Board({
    repl: false
});

board.on('ready', () => {

    const graph = new barcli({
        range : [20, 90],
        constrain : true
    });
    const prox = new five.Proximity({
        controller : 'GP2Y0A02YK0F',
        pin: 'A0'
    });

    prox.on('data', (data) => {
        graph.update(data.cm);
    });

});
