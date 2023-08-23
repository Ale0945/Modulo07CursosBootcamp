const db =require("./app/models")
const controllerUser = require("./app/controller/user.controller")
const controllerBootcamp = require("./app/controller/bootcamp.controller")
const main =async() => {
    console.log("Ejecutando aplicación");

    console.log("Ejecución Exitosa");
   
    db.sequelize
        .sync({ force: true, alter: true })
        .then(async () => {
            console.log("BD sincronizada");

//   Registro de participantes
const user1 = await controllerUser.crearusuarios({firstName: "Mateo", lastName: "Días", email: "mateo.diaz@correo.com" })
const user2 = await controllerUser.crearusuarios({firstName: "Santiago", lastName: "Mejías", email: "santiago.mejias@correo.com" })
const user3 = await controllerUser.crearusuarios({firstName: "Lucas", lastName: "Rojas", email: "lucas.rojas@correo.com" })
const user4 = await controllerUser.crearusuarios({firstName: "Facundo", lastName: "Fernandez", email: "facundo.fernandez@correo.com" })
    
// Registro de Bootcamp
const bootcamp1 = await controllerBootcamp.crearCursos({title: "Introduciendo El Bootcamp De React", cue: "10", description: "React es la librería más usada en Javascript para el desarrollo de interfaces"})
const bootcamp2 = await controllerBootcamp.crearCursos({title: "Bootcamp Desarrollo Web Full Stack", cue: "12", description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: Javascript, node JS, Angular, Mongo DB, ExpressJS"})
const bootcamp3 = await controllerBootcamp.crearCursos({title: "Bootcamp Big data, Inteligencia Artificial", cue: "18", description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine learning"})
                
// Agregando usuarios a los Bootcamp
  await controllerBootcamp.addUser(1,1);
  await controllerBootcamp.addUser(1,2);
  await controllerBootcamp.addUser(2,1);
  await controllerBootcamp.addUser(3,1);
  await controllerBootcamp.addUser(3,2);
  await controllerBootcamp.addUser(3,3);

        //Consultando el Bootcamp por id, incluyendo los usuarios.

  const Bootcamp1 = await controllerBootcamp.findById(bootcamp1.id);
  console.log(" Bootcamp  ", JSON.stringify(Bootcamp1, null, 2));
              
    
            // Listar todos los Bootcamp con sus usuarios.
           console.log(await controllerBootcamp.findAll())
    
            // Consultar un usuario por id, incluyendo los Bootcamp.
           console.log(await controllerUser.findUserById(1))
    
            // Listar los usuarios con sus Bootcamp.
           console.log(await controllerUser.findAll())
    
            // Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.
           console.log(await controllerUser.updateUserById(1, { firstName: 'Pedro', lastName: 'Sánchez' }))
    
            // Eliminar un usuario por id; por ejemplo: el usuario con id=1.
           await controllerUser.deleteUserById(1)
    
        })


}

/* conexion.sync().then(() => {
    console.log("BD sincronizada");
    main()
}) */
main()