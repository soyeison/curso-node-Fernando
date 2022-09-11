const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear(); //Esto limpia la consola antes de ejecutar el resto del código

// const [, , arg3 = "base=5"] = process.argv; //Esto me devuelve los argumentos que pase por línea de comenados. Ej: node app --base=5. Las siguientes líneas me permiten extraer y trabajar con ese numero
// const [, base = 5] = arg3.split("=");

// base = 3;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(colors.green(nombreArchivo), "creado"))
  .catch((err) => console.log(colors.red(err)));

//Usando yargs
