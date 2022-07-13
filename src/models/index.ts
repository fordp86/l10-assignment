import { Sequelize } from "sequelize";
import { BookFactory } from "./books";

const dbName = 'restDB';
const username = 'root';
const password = '123';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

BookFactory(sequelize);


export const db = sequelize;