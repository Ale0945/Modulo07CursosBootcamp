const bootcamp = require("./bootcamp.model")

const db = {
    bootcamp: require("./bootcamp.model"),
    user: require("./user.model")
}

db.bootcamp.belongsToMany(db.user, {
    through: "bootcamp_user",
    as: "user", 
    foreignKey: "bootcamp_id"
})
db.user.belongsToMany(db.bootcamp, {
    through: "bootcamp_user",
    as: "bootcamp",
    foreignKey: "user_id"
})
module.exports = db
