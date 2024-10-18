import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEstudiante extends Cl_mPersona {
  constructor(nombre, tipo, dia = 0) {
    super(nombre, tipo);
    this.dia = dia;
  }

  precioEntrada() {
    return this.entradaGral() * (this.dia === 3 ? 0.6 : 1);
  }
}
