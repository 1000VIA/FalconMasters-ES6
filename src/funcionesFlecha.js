const nombres = ["Carlos", "Pily", "Nana E", "Mati", "Kmy"];

const numero_caracteres = nombres.map(
  nombre => `${nombre} tiene ${nombre.length} letras`
);

// const numero_caracteres = nombres.map(function() {
//   return `${nombre} tiene ${nombre.length} letras`;
// });

console.log(numero_caracteres);

// const numero_caracteres = nombres.map(function(nombre) {
//   console.log(`${nombre} tiene ${nombre.length} letras`);
// });

// parametro => {
//   //codiigo a ejecutar
// };
