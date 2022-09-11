//Esto hay que intentar evitarlo porque se hace bastante complejo de entender

const empleados = [
  {
    id: 1,
    nombre: "Linda",
  },
  {
    id: 2,
    nombre: "Fernando",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  if (empleado) {
    //Si el empleado existe, es decir, no es null, no es undefined
    callback(null, empleado); //Aqui estoy especificando que el primer argumento del callback, el error, es null en caso de que si exista el empleado
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario; //Importante. Esto significa que si salario.find no es undefined entonces devuelve lo que esta dentro de la propiedad salario
  if (salario) {
    callback(null, salario);
  } else {
    callback(`Salario con id ${id} no existe`);
  }
};

const id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("ERROR");
    return console.log(err);
  }
  getSalario(id, (err, salario) => {
    if (err) {
      console.log("ERROR");
      return console.log(err);
    }
    console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
  });
});

//Cuando llamo la funcion getEmpeado, le mando 2 parametros: 1 el id del empleado, 2 un callback.
//La funcion primero busca el empleado, si el empleado existe voy a llamar ejecutar el callback que pase como parametro
//pasando a este callback null y empleado. para que me imprima 'Empleado existe y muestre el objeto que contiene este id

//Si el empleado no existe entonces ejecuta el callback, pasandole como paremtro un string, ese string hace las veces de empleado y el err se pasa como true.
//Es decir, esto significa que si tengo un error. entonces imprimo 'EEROR y el string que se paso como parametro al callback.
