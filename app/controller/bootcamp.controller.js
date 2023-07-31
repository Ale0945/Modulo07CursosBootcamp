const db = require("./../models/index")
const bootcamp = db.bootcamp

exports.crearCursos = async (cursos) => {
    try {
        const registrobootcamp = await bootcamp.create(cursos)
        return registrobootcamp
    } catch (error) {
        console.log("Error registrando bootcamp",error);
        return null
    }
}