const crearObjeto = (nombre, edad) => {
  return {
    nombre,
    edad,
    mostrarInfo() {
      return `${nombre} tiene ${edad} años`;
    }
  };
};

console.log(crearObjeto("Nana", 15).mostrarInfo());
