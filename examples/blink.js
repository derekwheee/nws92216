const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {

    const led = new five.Led(12);

    led.blink();

});
