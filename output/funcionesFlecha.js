"use strict";

var nombres = ["Carlos", "Pily", "Nana E", "Mati", "Kmy"];
var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
}); // const numero_caracteres = nombres.map(function() {
//   return `${nombre} tiene ${nombre.length} letras`;
// });

console.log(numero_caracteres); // const numero_caracteres = nombres.map(function(nombre) {
//   console.log(`${nombre} tiene ${nombre.length} letras`);
// });
// parametro => {
//   //codiigo a ejecutar
// };