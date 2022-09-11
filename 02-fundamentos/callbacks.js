// setTimeout(function () {
//   console.log("Hola Mundo");  //Esta función es un Callback, es una funcion que se pasa como argumento a otra función.
// }, 1000);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Yeison",
  };
  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario);
});

//getUsuarioById establece el usuario por medio del id que se mando como paremtro y despues comienza a llamar el setTimeOut.
//Despues de 1.5 segundos se ejecuta la función del setTimeOut, que esta ejecuta el Callcak que se paso como paremetro y imprime
//el usuario porque en este punto ya se tiene la información del usuario establecida.
