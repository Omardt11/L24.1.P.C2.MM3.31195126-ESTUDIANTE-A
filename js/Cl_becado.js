import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante{
    constructor(nombre, cantMateria, acumNota, becado){
        super(nombre, cantMateria, acumNota)
        this._becado = becado;
    }
    set becado(b){
        this._becado = b;
    }
    get becado(){
        return this._becado;
    }
    beca(){
        if (this.becado = "si"){
            if (this.promNota() > 15 )
                return 30;
            if(this.promNota() > 10)
                return 20;
            else
                return 0;
        }
        else
        return 0;
            
    }
    


}