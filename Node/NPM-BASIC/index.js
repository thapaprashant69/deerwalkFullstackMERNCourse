// const chalk = require("chalk");
import chalk from 'chalk';
import validator from 'validator';


console.log(chalk.blue("Hello World!"));
console.log(chalk.bgCyan("Hello World!"));
console.log(chalk.white.bgRed.bold("Hello World!"));

console.log(validator.isEmail("a@deerwalk.com",{allow_display_name:true}));
console.log(validator.isEmail("@gmail.com"));