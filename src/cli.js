"use strict";

const figlet = require("figlet");
const chalk = require("chalk");
const commander = require("commander");
var inquirer = require("inquirer");

// INQUIRER

const receiver = () => {
  inquirer
    .prompt([
      {
        typr: "input",
        name: "name",
        message: "your name",
      },
    ])
    .then((answers) => {
      console.log(`Helloo ${answers.name}`);
    });
};

commander
  .version("0.0.1")
  .option(
    "-e, --environment [environment]",
    "Environment to work with Static Cli by Terminal"
  )
  .option("-n, --name[name]", "The name", "admin")
  .action((options) => {
    console.log(chalk.red.bold(figlet.textSync('STATIC CLIENT')));
  });
console.clear();
commander.parse(process.argv);

inquirer
  .prompt([
    {
      type: "list",
      message: "Select the framework which you want to use: ",
      name: "framework",
      choices: ["Bootsrap", "tailwnd", "anyother frameworks"],
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error.message);
    } else {
      console.error(error.stack);
    }
  });