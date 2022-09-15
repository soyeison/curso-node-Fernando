require("dotenv").config();

const {
  inquirerMenu,
  leerInput,
  pausa,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busquedas = new Busquedas();
  let opt = "";

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //mostrar mensaje para que el usuario escriba
        const termino = await leerInput("Ciudad: ");

        //Buscar los lugares
        const lugares = await busquedas.ciudad(termino);

        //Seleccionar el lugar
        const id = await listarLugares(lugares);
        if (id === "0") continue;

        const lugarSel = lugares.find((lugar) => lugar.id === id);
        //Guardar en DB
        busquedas.agregarHistorial(lugarSel.nombre);

        //Datos del clima
        const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

        //Mostrar resultados
        console.clear();
        console.log("\nInformación de la ciudad\n".green);
        console.log("Ciudad: ", lugarSel.nombre.green);
        console.log("Lat: ", lugarSel.lat);
        console.log("Lng: ", lugarSel.lng);
        console.log("Como está el clima: ", clima.desc.green);
        console.log("Temperatura: ", clima.temp);
        console.log("Mínima: ", clima.min);
        console.log("Máxima: ", clima.max);
        break;

      case 2:
        console.log();
        busquedas.historialcapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
