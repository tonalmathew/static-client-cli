"use strict";

// var inquirer = require("inquirer");
const { program } = require('commander')

import updateNotifier from 'update-notifier';
import init from './commands/init/index';
import * as app from "./utils/app";
import pkg from '../package';
import * as constants from './constants/constants';

updateNotifier({ pkg }).notify();


const suggestCommands = (cmd) => {
  const availableCommands = program.commands.map((c) => c._name);
  
  const suggestion = availableCommands.find(
    (c) => leven(c, cmd) < c.length * 0.4
    );
    
    if (suggestion) {
      logger.error(` Did you mean ${chalk.yellow(suggestion)}?`);
    }
  };
  
  // app.showIntroduction();

program
  .description(constants.tagLine)
  .version(pkg.version)
  .usage('<command> [options]');

program
  .command('init <appname>')
  .description('Scaffolds a Static project in the current path')
  .action(init);

// Validation for unknown commands
program.on('command:*', ([cmd]) => {
  program.outputHelp();
  logger.error(`\n Unknown command ${chalk.yellow(cmd)}.\n`);
  suggestCommands(cmd);
  process.exitCode = 1;
});

program.parse(process.argv);

// Shows up help if no arguments were provided.
if (!program.args.length) {
  app.showIntroduction();
}
