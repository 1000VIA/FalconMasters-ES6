class Usuario {
  constructor(nombre, edad, correo) {
    (this.nombre = nombre), (this.edad = edad), (this.correo = correo);
  }
  mostrarSaludo(mensaje) {
    return mensaje;
  }

  mostarInfo() {
    return `
    <b>Nombre:</b> ${this.nombre} <br />
    <b>Edad:</b>: ${this.edad} <br />
    <b>Correo:</b> ${this.correo} <br />
    <hr />
    `;
  }
}

class Estudiante extends Usuario {
  constructor(nombre, edad, correo, carrera) {
    super(nombre, edad, correo, carrera);
    this.carrera = carrera;
  }

  mostarInfo() {
    return `
    <b>Nombre:</b> ${this.nombre} <br />
    <b>Edad:</b>: ${this.edad} <br />
    <b>Correo:</b> ${this.correo} <br />
     <b>Carrera:</b> ${this.carrera} <br />
    <hr />
    `;
  }
}

const milvia = new Usuario("Milvia ", 30, "correo@correo.com"); // Se hace una instanciá
document.write(milvia.mostarInfo());

const pily = new Estudiante(
  "Lucidia Estela ",
  27,
  "ejemplo@correo.com",
  "Developer JS"
);
document.write(pily.mostarInfo());
