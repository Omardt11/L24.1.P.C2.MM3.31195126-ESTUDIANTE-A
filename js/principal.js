import Cl_becado from "./Cl_becado.js"

let becado1 = new Cl_becado("Mary", 8, 132, "si");
let becado2 = new Cl_becado("Alirio", 35, 315, "si");

let salida =document.getElementById("salida");

salida.innerHTML = "Nombre del estudiante: "+becado1.nombre;
salida.innerHTML += "<br>Acumulado de notas: "+becado1.acumNota;
salida.innerHTML += "<br>Cantidad de materias: "+becado1.cantMateria;
salida.innerHTML += "<br>Nota promedio: "+becado1.promNota();
if (becado1.beca > 0 ){
    salida.innerHTML += "<br>"+becado1.nombre+" no le corresponde beca";
}
else
    salida.innerHTML += "<br>"+becado1.nombre+" recibe una beca de $"+becado1.beca();

salida.innerHTML += "<br><br>Nombre del estudiante: "+becado2.nombre;
salida.innerHTML += "<br>Acumulado de notas: "+becado2.acumNota;
salida.innerHTML += "<br>Cantidad de materias: "+becado2.cantMateria;
salida.innerHTML += "<br>Nota promedio: "+becado2.promNota();

if(becado2.beca() == 0 )
    salida.innerHTML += "<br>"+becado2.nombre+" no le corresponde beca";

else
    salida.innerHTML += "<br>"+becado2.nombre+" recibe una beca de $"+becado2.beca();
