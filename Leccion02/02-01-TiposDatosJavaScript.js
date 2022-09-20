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