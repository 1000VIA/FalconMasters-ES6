"use strict";

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

var arregloDatos = ["Dayana", 15, "correo@correo.com", "Colombia"];
mostrarDatos.apply(void 0, arregloDatos); // de una arreglo se pasan todo los elementos como argumento, solo utilizando los tres puntos.