module.exports = (sequelize, DataTypes) => {
    const Airport = sequelize.define('Airport', {
      iata_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Airport;
  };
  