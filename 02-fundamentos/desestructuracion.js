const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
  //La desestructuración del objeto que va a recibir como paremtro la puedo hacer dentro de los parametros directamente
  console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool)

// const { nombre, apellido, poder, edad = 0  } = deadpool;
//Lo que estoy haciendo con poner edad = 0 es establecer un valor por defecto a la edad.

//Desestructuración de arreglos

const heroes = ["Deadpool", "Superman", "Batman"];

// const [h1, h2, h3] = heroes //Esto quiere decir que le estoy asiganando a cada posición de mi array una variable donde se va a guardar el valor que hay en dicha posicion

//h1 = Deadpool
//h2 = Superman
//h3 = Batman

const [, , h3] = heroes; //Las comas significan que no me interesa el primer elemento, ni el segundo, pero al tercero le voy a asignar la variable h3 que se corresponde al valor Batman

console.log(h3);
