const conexion = require("./app/config/db.config")
const db =require("./app/models")
//const controller = require("./app/controller/user.controller")
const controller = require("./app/controller/bootcamp.controller")
const main =async() => {
    console.log("Ejecutando aplicación");
    //Registro de participantes
    // const user1 = await controller.crearusuarios({firstName: "Mateo", lastName: "Días", email: "mateo.diaz@correo.com" })
    // const user2 = await controller.crearusuarios({firstName: "Santiago", lastName: "Mejías", email: "santiago.mejias@correo.com" })
    // const user3 = await controller.crearusuarios({firstName: "Lucas", lastName: "Rojas", email: "lucas.rojas@correo.com" })
    // const usur4 = await controller.crearusuarios({firstName: "Facundo", lastName: "Fernandez", email: "facundo.fernandez@correo.com" })
    
    //Registro de Bootcamp
    const bootcamp1 = await controller.crearCursos({title: "Introduciendo El Bootcamp De React", cue: "10", description: "React es la librería más usada en Javascript para el desarrollo de interfaces"})
    const bootcamp2 = await controller.crearCursos({title: "Bootcamp Desarrollo Web Full Stack", cue: "12", description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: Javascript, node JS, Angular, Mongo DB, ExpressJS"})
    const bootcamp3 = await controller.crearCursos({title: "Bootcamp Big data, Inteligencia Artificial", cue: "18", description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine learning"})
    
    console.log("Ejecución Exitosa");
}

conexion.sync().then(() => {
    console.log("BD sincronizada");
    main()
})