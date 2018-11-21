import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'st-migration',
    username: 'root',
    password: '',
    dialect: 'mysql',
    define: {
        freezeTableName: false,
        timestamps: true,
    }
});
