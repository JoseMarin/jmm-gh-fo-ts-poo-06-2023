"use strict";
const defSexo = 'H';
class Person {
    //2-Constructor de class
    constructor(newDNI) {
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    //3-Métodos propios de class
    saluda() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
let person1 = new Person('12345678H');
console.log(person1);
let person2 = new Person('12333378F');
console.log(person2);
let person3 = new Person('76543218Z');
console.log(person3);
