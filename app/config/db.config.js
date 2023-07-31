const Sequelize = require("sequelize")
const conexion = new Sequelize("bootcamp", "postgres", "Postgres" , {
host: 'localhost',
port: 5432,
dialect: 'postgres'
})
module.exports = conexion