import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_Beca extends Cl_Estudiante{
    constructor(nombre,acumno,cntm){
        super(nombre,acumno,cntm);

    }
    prom(){
       return  this.acumno/this.cntm;
}
beca(){
    if(this.prom()>15){
        return  "recibe una beca de 30";
    } else if(this.prom()<=15 && this.prom()>=10){
        return "recibe una beca de 20";
    } else {
        return "no es becado";
    }
}

}