import { mensajeAlerta, saludo } from "./modulos/mensajeAlerta";
import Persona from "./modulos/clasepersona";

// mensajeAlerta("Hola Mundo este es mi primer mensaje con Webpack");
// saludo();

const milvia = new Persona("Milvia Alvarez", 30);
milvia.mostrarInfo();
