"use strict";
//Resolucion ex2
const caracteres = ['1', '2', '3', '*', '5', '?', '_', '8', '9', 'A', 'B', 'C'];
class Password {
    //2-Constructor de class
    constructor() {
        this.longitud = 8;
        this.password = this.newPass(this.longitud);
    }
    //3-Métodos de class
    newPass(newLong) {
        let pass = '';
        for (let i = 0; i < newLong; i++) {
            let pos = Math.floor(Math.random() * caracteres.length);
            pass = pass + caracteres[pos];
        }
        return pass;
    }
    getPassword() {
        return this.password;
    }
}
let pass1 = new Password();
console.log(pass1.getPassword());
