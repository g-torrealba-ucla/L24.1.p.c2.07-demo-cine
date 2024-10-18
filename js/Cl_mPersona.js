export default class Cl_mPersona {
    constructor(nombre = "", tipo) {
       this.nombre = nombre;
       this.tipo = tipo;
    }
 
    precioEntrada() {
       return this.entradaGral();
    }
 
    entradaGral() {
       return 2;
    }
 }
 