const db = require("./../models/index");
const User = db.user;
const Bootcamp = db.bootcamp;


exports.crearusuarios = async (user) => {
    try {
        const registrouser = await User.create(user)
        return registrouser.dataValues
    } catch (error) {
        console.log("Error registro de Usuarios, error");
        return null
    }
}
exports.findUserById = async (userId) => {
        try {
            const user = await User.findByPk(userId, {
                include: [{
                  model: Bootcamp,
                  as: "bootcamps",
                  attributes: ["id", "title"],
                  through: {
                    attributes: [],
                  }
                }, ],
              })
            if (!user) throw new Error('User no encontrado');
            return JSON.stringify(user, null, 2)
        } catch (error) { return console.log(error.message), null; }
    },

exports.findAll = async () => {
        try {
            const users = await User.findAll({
                include: [{
                  model: Bootcamp,
                  as: "bootcamps",
                  attributes: ["id", "title"],
                  through: {
                    attributes: [],
                  }
                }, ],
              })
            return JSON.stringify(users, null, 2)
        } catch (error) { return console.log(error.message), null; }
    }

exports.updateUserById = async (userId, userFields) => {
        const fields = ["firstName", "lastName", "email"]
        try {
            const user = await User.findByPk(userId)
            if (!user) throw new Error(`User no encontrado, id:${userId}`)
            fields.forEach(field => userFields.hasOwnProperty(field) && (user[field] = userFields[field]))
            return (await user.save()).dataValues
        } catch (error) { return console.log(error.message), null; }
    }

exports.deleteUserById= async (userId) => {
        try {
            const user = await User.findByPk(userId)
            if (!user) throw new Error('User no encontrado')
            return await user.destroy()
        } catch (error) { return console.log(error.message), null; }
    } 

