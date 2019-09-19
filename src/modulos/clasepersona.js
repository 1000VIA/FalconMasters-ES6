class Persona {
  constructor(nombe, edad) {
    this.nombe = nombe;
    this.edad = edad;
  }

  mostrarInfo() {
    console.log(`${this.nombe} tiene ${this.edad} años`);
  }
}

export default Persona;
