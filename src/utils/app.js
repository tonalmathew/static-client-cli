import figlet from "figlet";
import chalk from "chalk";

import * as logger from "./logger";
import * as constants from "../constants/constants";

/**
 * Shows application name
 * @return {void} -  returns nothing
 */

export const showIntroduction = async () => {
  console.log(
    chalk.red.bold(
      figlet.textSync(constants.appName, {
        horizontalLayout: "default",
        verticalLayout: "default",
        whitespaceBreak: true,
      })
    )
  );

  logger.warn(`         ${constants.tagLine}`);
};
