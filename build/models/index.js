"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const books_1 = require("./books");
const dbName = 'restDB';
const username = 'root';
const password = '123';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, books_1.BookFactory)(sequelize);
exports.db = sequelize;
