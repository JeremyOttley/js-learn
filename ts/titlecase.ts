const { Command } = require("commander");

const program = new Command();

function titlecase (str: string) {
    if ((str===null) || (str===''))
        return false;
    else
    str = str.toString();
    
    return str.replace(/\w\S*/g,
    function(txt: string){return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();});
    }

program
  .version("1.0.0")
  .description("Titlecase text")
  .option("-t, --titlecase <text>", "Titlecase text")
  .action((options) => {
    console.log(titlecase(options.titlecase));
  })
  .parse(process.argv); 

const options = program.opts();

