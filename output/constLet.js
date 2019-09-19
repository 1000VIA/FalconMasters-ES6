"use strict";

//Característica #1

/*
 *Podemos re-declarar variables con var
 *Pero esto puede causar problemas
 */
// var nombre = "Milvia";
// var nombre = "Amparo";
// let pais = "Colombia";
// let pais = "Francia";
// console.log("Hola ", pais);
//Característica #2
//let y const tambien tiene un scope en el que no podemos acceder a las variables creadas dentro de una función
// function saludo() {
//   var nombre = "Dayana";
//   return "Hola", nombre;
// }
// // console.log(saludo());
// console.log(nombre);
//Característica #3

/*
 *let y const tienen un spcope de tipo bloque
 */
// let edad = 18;
// if (edad >= 18) {
//   let esAdulto = true;
//   console.log(esAdulto);
// }
//Característica #4

/*
 *const lo usamos cuando queremos que el valor de una variable nunca cambie
 */
// const nombre = "Dayana";
// nombre = "Milvia";
var colores = ["Rojo", "verde"];
colores.push("Azúl");
console.log(colores);