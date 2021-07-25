#!/usr/bin/env node

const figlet = require("figlet");
const chalk = require("chalk");

// add commander for cli
const commander = require("commander");

commander
  // .command("start")
  // .description("start the server")
  // .action(() => {
  //   console.log("starting");
  // })
  .version("0.0.1")
  .option(
    "-e, --environment [environment]",
    "Environment to work with Static Cli by Terminal"
  )
  .option("-n, --name[name]", "The name", "admin")
  .action((options) => {
    console.log(options.environment);
    console.log(
      chalk.blue(
        figlet.textSync(options.environment, { horizontalLayout: "full" })
      )
    );
  });
console.clear();

// console.log(chalk.red(figlet.textSync("STATIC CLI")));
commander.parse(process.argv);
