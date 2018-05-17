import * as Sequelize from 'sequelize';
import nflteamsFactory from './nflteams';
// import nflteams from './nflteams';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config.json')[env];
const url = config.url || process.env.DATABASE_CONNECTION_URL;

const sequelize = new Sequelize(url, config);

const db = {
    sequelize,
    Sequelize,
    NflTeams: nflteamsFactory(sequelize),
};

Object.values(db).forEach((model: any) => {
    if (model.associate) {
        model.associate(db);
    }
});

export default db;
