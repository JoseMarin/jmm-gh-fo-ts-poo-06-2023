"use strict";
//Persona class
class Persona {
    //2 - Constructor de clase
    // constructor(newNombre:string, newEdad:number, newDeporte:boolean){
    //     this.nombre = newNombre;
    //     this.edad = newEdad;
    //     this.haceDeporte = newDeporte;
    // }
    constructor() {
        this.nombre = 'newNombre';
        this.edad = 30;
        this.haceDeporte = true;
    }
    //3 - Métodos de class
    saluda() {
        console.log(`Hola, soy ${this.nombre}`);
    }
    //getter & setter
    getNombre() {
        return this.nombre;
    }
    setNombre(newNom) {
        this.nombre = newNom;
    }
    //modifica el valor de edad que es private
    setEdad(valorA) {
        this.edad = valorA;
    }
}
//creamos objetos instancias de clase
let per1 = new Persona();
console.log(per1.getNombre());
per1.saluda();
let per2 = new Persona();
per2.setEdad(86);
per2.haceDeporte = true;
console.log(per2.getNombre());
per2.saluda();
