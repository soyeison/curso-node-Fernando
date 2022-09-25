const { response } = require("express");
const { Producto } = require("../models");

//obtenerCategorias - paginado - total - populate(consultar)
const obetenerProductos = async (req, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, productos] = await Promise.all([
    Producto.countDocuments(query),
    Producto.find(query)
      .populate("categoria", "nombre")
      .populate("usuario", "nombre")
      .skip(Number(desde))
      .limit(Number(limite)),
  ]);

  res.json({
    total,
    productos,
  });
};

//obtenerCategoria - populate - objeto {}
const obtenerProducto = async (req, res = response) => {
  const { id } = req.params;

  const producto = await Producto.findById(id)
    .populate("categoria", "nombre")
    .populate("usuario", "nombre");

  res.json({
    producto,
  });
};

const crearProducto = async (req, res = response) => {
  const { estado, usuario, ...body } = req.body;

  const productoDB = await Producto.findOne({ nombre: body.nombre });

  if (productoDB) {
    return res.status(400).json({
      msg: `EL producto ${productoDB.nombre}, ya existe`,
    });
  }

  //Generar la data a guardar
  const data = {
    ...body,
    nombre: body.nombre.toUpperCase(),
    usuario: req.usuario._id,
  };

  const producto = new Producto(data);

  //Guardar en DB
  await producto.save();

  res.status(201).json(producto);
};

//actualizarCategoria - cambiar nombre - nombre no debería existir
const actualizarProducto = async (req, res = response) => {
  const { id } = req.params;
  const { estado, usuario, categoria, ...data } = req.body;

  if (data.nombre) {
    data.nombre = data.nombre.toUpperCase();
  }

  data.nombre = data.nombre.toUpperCase();

  const producto = await Producto.findByIdAndUpdate(id, data, { new: true });

  res.json({
    producto,
  });
};

//borrarCategoría - estado: false
const borrarProducto = async (req, res = response) => {
  const { id } = req.params;

  const productoBorrado = await Producto.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  res.json({
    productoBorrado,
  });
};

module.exports = {
  obetenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  borrarProducto,
};
