const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {
  //Toda esta función es una promesa
  return new Promise((resolve) => {
    console.clear();
    console.log("===========================".green);
    console.log("   Seleccione una opción".green);
    console.log("===========================\n".green);

    console.log(`${"1.".green} Crear una tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tareas`);
    console.log(`${"0.".green} Salir \n`);

    const readLine = require("readline").createInterface({
      //Esta es la interfaz que se le presenta al usuario
      input: process.stdin, //Esto lee la entrada de lo qe se escriba en la consola
      output: process.stdout, //Esto es para mostrar un mensaje en consola cuando se ingrese la información
    });

    readLine.question("Seleccione una opción: ", (opt) => {
      //Esto se usa cuando hay un stdout para gregar una pregunta seguido del input.
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      //Esta es la interfaz que se le presenta al usuario
      input: process.stdin, //Esto lee la entrada de lo qe se escriba en la consola
      output: process.stdout, //Esto es para mostrar un mensaje en consola cuando se ingrese la información
    });

    readLine.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
      //Esto se usa cuando hay un stdout para gregar una pregunta seguido del input.
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
