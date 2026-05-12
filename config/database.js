import { Sequelize } from 'sequelize'
import { env } from './env.js';

export const sequelize = new 

Sequelize(env.db.name, 
    env.db.user, 
    env.db.pass,  
    {
        host: env.db.host,
        port: env.db.port,
        dialect: env.db.dialect,
        logging: false
    }
);

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Banco conectado com sucesso!");
    } catch (error) {
        console.error(`Erro ao conectar: ${error}`);
    }
};