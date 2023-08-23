const bootcamp = require("./bootcamp.model")
const user = require("./user.model")
const sequelize = require("./../config/db.config")

const db = {
    sequelize: sequelize,
    bootcamp: require("./bootcamp.model.js"),
    user: require("./user.model.js")
}

db.bootcamp.belongsToMany(db.user, {
    through: "bootcamp_user",
    as: "users", 
    foreignKey: "bootcamp_id"
})
db.user.belongsToMany(db.bootcamp, {
    through: "bootcamp_user",
    as: "bootcamps",
    foreignKey: "user_id"
})
module.exports = db
