import chalk from "chalk";

export const error = (msg) => console.error(chalk.red.bold(msg));
export const info = (msg) => console.info(chalk.cyan.bold(msg));
export const warn = (msg) => console.warn(chalk.yellow.bold(msg));
export const success = (msg) => console.error(chalk.green.bold(msg));
