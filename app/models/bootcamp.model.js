const Sequelize = require("sequelize")
const conexion = require("./../config/db.config.js")


const bootcamp = conexion.define("bootcamp", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNul:false,
        unique: true
    },
    cue: {
        type: Sequelize.INTEGER,
        allowNul:false,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNul:false,
        unique: true
    },
})
module.exports = bootcamp;