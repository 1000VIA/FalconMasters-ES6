"use strict";

function registrarUsuario(nombre, pais, correo) {
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "No especificado";
  return "Nombre: ".concat(nombre, ", Pa\xEDs: ").concat(pais, ", Correo: ").concat(correo, ", Tel\xE9fono: ").concat(telefono);
}

console.log(registrarUsuario("Milvia", "Colombia", "correo.correo.com"));