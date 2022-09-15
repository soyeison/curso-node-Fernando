const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "hbs");
//Un middleware es una función que se ejecuta antes de hacer otra cosa
//Servir cotenido estatico
//Con el app.use se usan los middlewares

app.use(express.static("public")); //2. Esto es para que cuando se ingrese a la ruta principal se muestre el contenido que hay en esta carpeta

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  //1. Cualquier otra ruta que no este regisrada va a caer aquí
  res.sendFile(__dirname + "/public/404.html"); //3. Asi puedo leer un archivo para mostrar contenido estático
  //__dirname devuelve la ruta donde se encuentra el archivo JS actual
});

app.listen(port, () => {
  console.log(`Ejemplo escuchando en el puerto http://localhost:${port}`);
});
