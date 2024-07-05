const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Airport = require('./airport')(sequelize, DataTypes);
const City = require('./city')(sequelize, DataTypes);
const Country = require('./country')(sequelize, DataTypes);

City.hasMany(Airport);
Airport.belongsTo(City);

Country.hasMany(City);
City.belongsTo(Country);

sequelize.sync();

module.exports = { sequelize, Airport, City, Country };
