import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Beca from "./Cl_Beca.js";


let estu = new Cl_Estudiante();
let bec1 = new Cl_Beca("Mary",132,8);

 
let salida=document.getElementById("Salida");
salida.innerHTML = `


<br> Nombre del Estudiante ${bec1.nombre}
<br> Acumulado de Notas ${bec1.acumno}
<br>Cantidad de Materias ${bec1.cntm}
<br>Nota Promedio ${bec1.prom()}
<br>${bec1.nombre} ${bec1.beca()}
`;








