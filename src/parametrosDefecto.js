function registrarUsuario(nombre, pais, correo, telefono = "No especificado") {
  return `Nombre: ${nombre}, País: ${pais}, Correo: ${correo}, Teléfono: ${telefono}`;
}

console.log(registrarUsuario("Milvia", "Colombia", "correo.correo.com"));
