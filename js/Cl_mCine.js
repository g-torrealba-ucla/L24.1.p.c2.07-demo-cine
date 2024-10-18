export default class Cl_mCine {
    constructor() {
       this.cntPersonas =
          this.cnt3raEdad =
          this.acumMontoTotal =
          this.acumMontoEstuds =
             0;
    }
 
    procesarPersona(p) {
       this.cntPersonas++;
       this.acumMontoTotal += p.precioEntrada();
       if (p.tipo === 2) this.acumMontoEstuds += p.precioEntrada();
       else if (p.tipo === 3) this.cnt3raEdad++;
    }
 
    cantidadPersonasAsistieron() {
       return this.cntPersonas;
    }
 
    porcentajePersonas3raEdad() {
       return this.cntPersonas === 0
          ? 0
          : (this.cnt3raEdad / this.cntPersonas) * 100;
    }
 
    montoTotalPagadoEstuds() {
       return this.acumMontoEstuds;
    }
 
    montoTotalRecaudado() {
       return this.acumMontoTotal;
    }
 }
