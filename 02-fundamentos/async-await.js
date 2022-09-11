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

const getInfoUsuario = async (id) => {
  //Cuando se pone el async se transforma la funcion para que regrese una promesa
  //Se convierte en una función asincrona
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de ${salario}`;
  } catch (error) {
    throw error; //Si se manda el throw inmediatamente se manda a llamar el reject de la función asincrona, de aquí se llamaria el catch
  }
};

const id = 3;

getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
