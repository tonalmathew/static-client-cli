#!/usr/bin/env node

const figlet = require("figlet");
const chalk = require("chalk");
const commander = require("commander");

commander
  .version("0.0.1")
  .option(
    "-e, --environment [environment]",
    "Environment to work with Static Cli by Terminal"
  )
  .option("-n, --name[name]", "The name", "admin")
  .action((options) => {
    console.log(chalk.blue.bold(figlet.textSync(options.environment)));
  });
console.clear();
commander.parse(process.argv);
