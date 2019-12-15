import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'elrincon1920',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)