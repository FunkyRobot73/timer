const args = process.argv;
const timer = (args.slice(2));
//console.log(timer);

for (let x of timer) {
  setTimeout(() => {
    process.stdout.write("Boom!!!")
  },x*1000);
} 
