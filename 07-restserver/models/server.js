const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Conectar a base de datos
    this.conectarDB();

    //Aqui van los middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lerctura y parseo del body
    this.app.use(express.json()); //2. Con esto la informacion que venga en put, delete o post la va a serializar a JSON

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    //Rutas para usuarios
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
