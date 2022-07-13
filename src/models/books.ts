import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Books extends Model<InferAttributes<Books>, InferCreationAttributes<Books>>{
    declare bookId: number;
    declare title: string;
    declare description: string;
    declare price: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function BookFactory(sequelize: Sequelize) {
    Books.init({
        bookId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'books',
        sequelize
    });
}