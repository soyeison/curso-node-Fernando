const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //Aquí estoy preguntando: Si hay errores, entonces
    return res.status(400).json(errors);
  }
  //Next es lo que tengo que llamar en caso de que el middleware pase
  next();
};

module.exports = {
  validarCampos,
};
