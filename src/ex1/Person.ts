//Resolucion ex1
// Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
type sexType = 'H' | 'M';
const defSexo:sexType = 'H';

class Person {
    //1-Atributos de class
    private nombre: string;
    private edad: number;
    private DNI: string;
    private sexo: sexType;
    private peso: number;
    private altura: number;

    //2-Constructor de class
    constructor(newDNI:string){
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }

    //3-Métodos propios de class
    saluda():void{
        console.log(`Hola, soy ${this.nombre}`);
    }
}

let person1 = new Person('12345678H');
console.log(person1);
let person2 = new Person('12333378F');
console.log(person2);
let person3 = new Person('76543218Z');
console.log(person3);