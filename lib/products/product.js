const {sequelize} = require('../common/sequelize');
const {User} = require('../users/user');
const Sequelize = require('sequelize');

const Product = sequelize.define('Product', {
    name: {
        type: Sequelize.DataTypes.STRING,
    }
});

Product.isInitialized = true;

exports.Product = Product;