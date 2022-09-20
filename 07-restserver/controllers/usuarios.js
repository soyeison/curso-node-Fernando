const { response, request } = require("express"); //Esto es para tener los métodos de express (Esto se podria evitar si manejara typescript)
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");

const usuariosGet = async (req, res) => {
  // const { q, nombre = "No name", apikey } = req.query;
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    //Esto es para cuestiones de eficiencia
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  //Validar contra base de datos

  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuario);
};

const usuariosPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en base de datos
  await usuario.save();
  res.json(usuario);
};

const usuariosDelete = async (req, res) => {
  const { id } = req.params;

  //Borrarlo fisicamente
  // const usuario = await Usuario.findByIdAndDelete(id); //No es buena práctica hacerlo de esta forma.

  //Forma correcta: Cambiar estado
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
  res.json(usuario);
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
