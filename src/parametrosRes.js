//Forma tradicional
// const mostrarDatos = (nombre, edad, correo, pais) => {
//   console.log(nombre, edad, correo, pais);
// };

// mostrarDatos("Milvia", 30, "correo@correo.com", "Colombia");

//Forma ECMASCRIPT 6 (ES6)

const mostrarDatos = (...datos) => {
  //los tres puntos me agrega los datos como un arreglo
  console.log(datos);
};

mostrarDatos("Milvia", 30, "correo@correo.com", "Colombia");
