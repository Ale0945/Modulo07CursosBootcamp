const db = require("./../models/index")
const user = db.user


exports.crearusuarios = async (usuarios) => {
    try {
        const registrouser = await user.create(usuarios)
        return registrouser
    } catch (error) {
        console.log("Error registro de Usuarios, error");
        return null
    }
    
}