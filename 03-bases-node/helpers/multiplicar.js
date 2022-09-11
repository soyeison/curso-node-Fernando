const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".cyan} ${i} ${"=".cyan} ${base * i}\n`;
    }
    if (listar) {
      console.log(colors.america("=================="));
      console.log(`  Tabla del ${colors.cyan(base)}`);
      console.log(colors.america("=================="));
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
