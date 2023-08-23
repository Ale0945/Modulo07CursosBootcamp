const db = require("./../models/index");
const Bootcamp = db.bootcamp;
const User = db.user;

exports.crearCursos = async (cursos) => {
    try {
        const registrobootcamp = await Bootcamp.create(cursos)
        return registrobootcamp.dataValues
    } catch (error) {
        console.log("Error registrando bootcamp", error);
        return null
    }
}

exports.addUser = async (bootcampId, userId) => {
    const bootcamp = await Bootcamp.findByPk(bootcampId)
    if (!bootcamp) {
        console.log("Bootcamp no encontro");
        return null;
    }
    const user = await User.findByPk(userId)
    if (!user) {
        console.log("Usuario no encontrado");
        return null;
    }
    await bootcamp.addUser(user);
    console.log(`Usuario ${user.id} agregado al bootcamp ${bootcamp.id}`);

    return bootcamp;
};



exports.findById = async (bootcampId) => {
    try {
        const bootcamp = await Bootcamp.findByPk(bootcampId, {
            include: [{
              model: User,
              as: "users",
              attributes: ["id", "firstName", "lastName"],
              through: {
                attributes: [],
              }
            }, ],
          })
        if (!bootcamp) throw new Error('Bootcamp no encontrado');
        return JSON.parse(JSON.stringify(bootcamp))
    } catch (error) { return console.log(error.message), null; }
}

exports.findAll = async () => {
    try {
        const bootcamps = await Bootcamp.findAll({
            include: [{
              model: User,
              as: "users",
              attributes: ["id", "firstName", "lastName"],
              through: {
                attributes: [],
              }
            }, ],
          })
        return JSON.stringify(bootcamps, null, 2)
    } catch (error) { return console.log(error.message), null; }
}

