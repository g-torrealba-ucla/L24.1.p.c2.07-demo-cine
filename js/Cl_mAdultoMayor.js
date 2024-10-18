import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAdultoMayor extends Cl_mPersona {
  precioEntrada() {
    return this.entradaGral() * 0.5;
  }
}
