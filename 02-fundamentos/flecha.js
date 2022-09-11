// function sumar(a, b = 10) { //Esto establece el parametro por defecto en caso de que no se mande.
//   return a + b;
// }

//Funcion flecha

// const sumar = (a, b) => {
//   return a + b;
// };

//Cuando el cuerpo tiene una sola línea y esa linea es el return entonces se puede escribir asi:

const sumar = (a, b) => a + b;

console.log(sumar(5, 10)); //15
