import * as Sequelize from 'sequelize';
import { Type } from '@angular/core';

interface INflTeamsAtrributes {
    team_no?: string;
    team_name?: string;
    team_shortnm?: string;
    archived?: boolean;
    created_at?: string;
    updated_at?: string;
}

type NflTeamsInstance = Sequelize.Instance<INflTeamsAtrributes> & INflTeamsAtrributes;

/* export default (sequalize: Sequelize.Sequelize) => {
    const attributes: SequelizeAttributes<NflTeamsAtrributes> = {
        team_no: { type: Sequelize.STRING, allowNull: false},
        team_name: { type: Sequelize.STRING, allowNull: false},
        team_shortnm: { type: Sequelize.STRING, allowNull: false},
        archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    };
    return sequalize.define<NflTeamsInstance, NflTeamsAtrributes>('Nflteams', attributes);
  }; */

export default (sequelize: Sequelize.Sequelize) => {
    const Nflteams = sequelize.define('nflteams', {
        team_no: { type: Sequelize.STRING, allowNull: false},
        team_name: { type: Sequelize.STRING, allowNull: false},
        team_shortnm: { type: Sequelize.STRING, allowNull: false},
        archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    });
    return Nflteams;
};
