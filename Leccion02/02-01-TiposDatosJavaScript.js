/*
Esto es un ejemplo de comentarios 
de varias lineas
*/

//Tipos de dato string
let nombre = "Nelson";
console.log(nombre);

//Tipo de dato numerico
let numero = 100;
console.log(numero);

//Tipo de dato Object
var persona = {
    nombre: "Nelson",
    apellido: "Ortiz",
    edad: 24,
    sexo: 'M'
}
console.log(persona);

/*
Existe una funcion que nos permite saber que tipo de dato es una variable
la funcion se llama: typeof(tu_variable)
la cual devuelve el tipo de dato
*/

let variable = 24;
console.log(typeof(variable));

//Las variables hacer dinamicas pueden cambiar su contenido
variable = "Hola mundo";
console.log(typeof(variable));

/**
 * Agregando mas tipos de datos
 */

//Tipo de datos Booleanos
let bandera = true;
console.log(bandera);

//Tipo de dato Function
function miFuncion() {
    console.log("Hola mundo");
}
console.log(typeof(miFuncion));

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof(simbolo));

//Las CLASES en JavaScript son una FUNCTION
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre,
            this.apellido = apellido;
    }
}
console.log(typeof(Persona));

//Tipo undefined
var x;
console.log(typeof x)

x = undefined;
console.log(x)

//null = ausencia de valor
var y = null;
console.log(typeof y);

//Tipo de dato en forma de arreglo
let autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof(autos));