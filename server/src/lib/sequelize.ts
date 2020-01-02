import { Sequelize } from "sequelize";
import config from "./config";

const connection =  new Sequelize({
    database: config.get("postgres:credits:dbname"),
    dialect: "postgres",
    logging: process.env.NODE_ENV !== "production",
    password: config.get("postgres:credits:password"),
    storage: ":memory:",
    username: config.get("postgres:credits:username"),
});

export {
    connection
};
