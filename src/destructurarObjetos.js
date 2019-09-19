const usuario = {
  nombre: "Milvia",
  correo: "correo.correo.com",
  edad: 30,
  pais: "Colombia",
  profesion: "front-end Javascript"
};

const { nombre, correo, profesion = "No especificado" } = usuario; //estamos diciendo que es lo que queremos exttaer de usuario

const mostrarInfo = ({ nombre, profesion = "Estudiante" }) =>
  console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario);
