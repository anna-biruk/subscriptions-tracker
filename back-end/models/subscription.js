'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Subscription extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Subscription.belongsTo(models.User, {foreignKey: "userId", as: "user", targetKey: "id"})
            models.Subscription.belongsTo(models.Seller, {foreignKey: "sellerId", as: 'seller', targetKey: "id"})
        }
    }

    Subscription.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:DataTypes.STRING,
        price: DataTypes.INTEGER,
        currency: DataTypes.STRING,
        period: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        chargeDay: DataTypes.INTEGER,
        imageUrl:DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Subscription',
    });
    return Subscription;


};

