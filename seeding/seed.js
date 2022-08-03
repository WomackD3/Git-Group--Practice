
import chalk from "chalk";
import db from "../../seeding/seed.js";
import User from "../models/user.js";

const deleteAll = async () => {
  console.log(chalk.red(chalk.bold("Purging Database")));

  await User.deleteMany({});
  console.log(
    chalk.green(chalk.bold("Successfully deleted all users "))
  );

  db.close();
};

deleteAll();