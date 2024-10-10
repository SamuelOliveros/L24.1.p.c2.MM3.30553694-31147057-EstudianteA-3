export default class Cl_Estudiante{
    constructor(nombre,acumno,cntm){
        this.nombre=nombre;
        this.acumno=acumno;
        this.cntm=cntm;
    }
    prom(){
        return this.acumno/this.cntm;
    }
}