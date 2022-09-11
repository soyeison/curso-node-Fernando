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

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado
      ? resolve(empleado) //Esto es lo que va a mandar como parametro al .then en caso de la promesa cumplirse
      : reject(`No existe empleado con id ${id}`); //Esto es lo que va a tirar al error en caso de la promesa no poderse cumplir
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario ? resolve(salario) : reject(`No existe salario con id ${id}`);
  });
};

const id = 3;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado)) //Solo con esto no estoy manjenado el rechazo de la promesa. Solo estoy manejando el resolve
//   .catch((err) => console.log(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));

//Promesas

// getEmpleado(id)
//   .then((empleado) => {
//     getSalario(id).then((salario) => {
//       console.log(`El empleado: ${empleado} tiene un salario: ${salario}`);
//     });
//   })
//   .catch((err) => console.log(err));

//Promesas en cadena

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado: ${nombre} tiene un salario: ${salario}`)
  )
  .catch((err) => console.log(err));

//Explicación del código:
//Llamo la función getEmpleado, esta función me devuelve una promesa, que si se resuelve devuelve un empleado y si no se revulve devuelve un mensaje de error
//asigno a la variable nombre dicho empleado que me devolvio la promesa cumplida y restorno una funcion que a su vez retorna una promesa
//Por tanto puedo encadenarle otro .then, esta ultima promesa si se resuelve me devuelve un salario y si no se resuelve devuelve un mensaje de error.
//Aqui al tener guardada en la variable nombre le informacion del empleado entonces puedo imprimir por consola todo junto.
//Y si sucede algun error en cualquiera de las promesas entonces lo captura el .catch y lo imprime por pantalla
