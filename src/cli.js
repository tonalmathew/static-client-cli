"use strict";

var inquirer = require("inquirer");

import * as app from "./utils/app";

app.showIntroduction();

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
