'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Seller extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Seller.hasMany(models.Subscription, {sourceKey: 'id', foreignKey:'sellerId'})
            // define association here
        }
    }

    Seller.init({
        title: DataTypes.STRING,
        iconUrl: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Seller',
    });
    return Seller;
};