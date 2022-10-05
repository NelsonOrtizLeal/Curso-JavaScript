let a = 3,
    b = 2,
    c = "3";

let z = a == c; //se revisa el valor sin importar el tipo
console.log(z);

z = a === c; // revisa los valores pero tambien los tipos
console.log(z);

// Comporador diferente 
z = a != c; // Revisa sin importar el tipo
console.log(z);

z = a !== c; /// Revisa los valores pero tambien los tipos
console.log(z);