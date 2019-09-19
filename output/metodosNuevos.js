"use strict";

//Métodos para cadenas de texto
var texto = "Hola, soy Milvia estudiando ES6";
console.log(texto, "Empieza con h: ", texto.toLocaleLowerCase().startsWith("h"));
console.log(texto, "Termina con 6: ", texto.toLocaleLowerCase().endsWith("6"));
console.log(texto, "E incluye la palabra Milvia: ", texto.includes("Milvia")); //Métodos de Arrays

var amigos = ["Andrea", "Victor", "Sarita", "pily"]; //Métodos includes(): permite revisasr si hay algun elemento dentro del arreglo

console.log(amigos.includes("Andrea")); //Métodos find(): devuelve el primer elemento de un arreglo que cumpla una condición.

console.log(amigos.find(function (amigo) {
  return amigo.length === 6;
})); //Métodos findIndex: devuelve la posisión del elemento en el arreglo. cuando sale -1 es porque no encuentra el elemento

console.log(amigos.findIndex(function (amigo) {
  return amigo === "Sarita";
}));