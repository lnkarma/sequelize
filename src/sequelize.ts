import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize("testdb", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  models: [__dirname + "/models"],
});

export const connect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
