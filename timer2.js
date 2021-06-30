const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// For the standOut process //
const stdout = process.stdout;
const sound = () => process.stdout.write('\x07');


stdin.on('data', (key) => {
  if (key === 'b') {

    sound();
  }
  if (key >= 1 && key <= 9) {
    stdout.write(`Setting timer for ${key} seconds ...\n`);
    setTimeout(() => {
      sound();
    }, key * 1000);
  }
  if (key === '\u0003') {
    stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }

});
