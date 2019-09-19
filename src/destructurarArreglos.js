const persona = ["Milvia", 30, "Colombia"];

const [nombre, , pais, profesion = "No especificado"] = persona;

// const nombre = persona[0];
// const edad = persona[1];

const mostarInfo = ([
  nombre,
  ,
  pais,
  profesion = "No especificado"
] = persona) => console.log(nombre, profesion);

mostarInfo(persona);
