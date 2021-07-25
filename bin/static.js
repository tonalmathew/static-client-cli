#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');

console.clear();

console.log(
  chalk.red(figlet.textSync('STATIC CLI'))
);

