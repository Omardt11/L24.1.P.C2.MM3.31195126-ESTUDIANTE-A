export default class Cl_estudiante{
    constructor(nombre, cantMateria, acumNota){
        this.nombre = nombre;
        this.cantMateria = cantMateria;
        this.acumNota = acumNota;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set acumNota(an){
        this._acumNota = +an
    }
    get acumNota(){
    return this._acumNota
    }
    set cantMateria(cm){
        this._cantMateria = +cm;
    }
    get cantMateria(){
        return this._cantMateria;
    }
    promNota(){
        return this.acumNota/ this.cantMateria;
    }
} 
