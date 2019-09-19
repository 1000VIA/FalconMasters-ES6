const mostrarDatos = (...datos) => {
  console.log(datos);
};

const arregloDatos = ["Dayana", 15, "correo@correo.com", "Colombia"];

mostrarDatos(...arregloDatos); // de una arreglo se pasan todo los elementos como argumento, solo utilizando los tres puntos.
