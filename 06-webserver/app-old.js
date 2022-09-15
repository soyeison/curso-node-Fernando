const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });

    // res.write("id, nombre");
    // res.write("1, Fernando");
    // res.write("2, Maria");
    // res.write("3, Yeison");
    res.write("Hola mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
