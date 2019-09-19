"use strict";

var usuario = {
  nombre: "Milvia",
  correo: "correo.correo.com",
  edad: 30,
  pais: "Colombia",
  profesion: "front-end Javascript"
};
var nombre = usuario.nombre,
    correo = usuario.correo,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? "No especificado" : _usuario$profesion; //estamos diciendo que es lo que queremos exttaer de usuario

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "Estudiante" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);