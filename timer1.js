const args = process.argv.slice(2).filter(time => !isNaN(time)).filter(time =>  time >= 0);

//console.log(args);
args.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');

  }, time * 1000);
});




