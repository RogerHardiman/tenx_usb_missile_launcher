//
// Tenx USB Rocket Launcher Test
// (C) Roger Hardiman 2016
//


// Dependencies
var tenx_driver = require('./tenx_driver');
var keypress = require('keypress');

// GLOBALS
var tenx = new tenx_driver();
var STOP_DELAY_MS = 50;
var stop_timer;

// Start of main program
tenx.open();
read_and_process_keyboard();

// end of main program.
// Program keeps running as keyboard event handlers are registered



function read_and_process_keyboard() {
	// listen for the "keypress" events
	keypress(process.stdin);
	process.stdin.setRawMode(true);
	process.stdin.resume();

	console.log('TENX ROCKET LAUNCHER DEMO');
	console.log('Press Cursor Keys to move camera');
	console.log('Press f to Fire');
	console.log('Press q to quit');

	// keypress handler
	process.stdin.on('keypress', function (ch, key) {

		/* Exit on 'q' or 'Q' or 'CTRL C' */
		if ((key && key.ctrl && key.name == 'c') ||
		    (key && key.name == 'q')) {
			process.exit();
		}


		if (ch) console.log('got "keypress character"',ch);
		else if (key) console.log('got "keypress"',key.name);

		// Clear the auto-stop timer
		if (stop_timer) clearTimeout(stop_timer);

		// Flag to see if we need to set a auto Stop Timer
		var s = 0;

		if      (key && key.name == 'up')    {tenx.up(); s=1}
		else if (key && key.name == 'down')  {tenx.down(); s=1}
		else if (key && key.name == 'left')  {tenx.left(); s=1}
		else if (key && key.name == 'right') {tenx.right(); s=1}
		else if (ch  && ch=='7')             {tenx.upleft(); s=1}
		else if (ch  && ch=='8')             {tenx.up(); s=1}
		else if (ch  && ch=='9')             {tenx.upright(); s=1}
		else if (ch  && ch=='4')             {tenx.left(); s=1}
		else if (ch  && ch=='6')             {tenx.right(); s=1}
		else if (ch  && ch=='1')             {tenx.downleft(); s=1}
		else if (ch  && ch=='3')             {tenx.downright(); s=1}
		else if (ch  && ch=='f')             {tenx.fire();}
		else if (ch  && ch=='s')             {tenx.stop();}

		// Set a timer to trigger an automatic stop if required
		if (s==1) stop_timer = setTimeout(tenx.stop(), STOP_DELAY_MS);

	});
}



