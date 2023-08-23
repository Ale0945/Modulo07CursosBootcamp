const Sequelize = require("sequelize");
const conexion = require("./../config/db.config");


const User = conexion.define("user" , {
    firstName: {
        type: Sequelize.STRING(15),
        allowNul: false,
        unique: false
    },
    lastName: {
        type: Sequelize.STRING(15),
        allowNul: false,
        unique: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {

            isEmail: true
        
            }
    }

})
module.exports = User;