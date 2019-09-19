"use strict";

//Forma tradicional
// const mostrarDatos = (nombre, edad, correo, pais) => {
//   console.log(nombre, edad, correo, pais);
// };
// mostrarDatos("Milvia", 30, "correo@correo.com", "Colombia");
//Forma ECMASCRIPT 6 (ES6)
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  //los tres puntos me agrega los datos como un arreglo
  console.log(datos);
};

mostrarDatos("Milvia", 30, "correo@correo.com", "Colombia");