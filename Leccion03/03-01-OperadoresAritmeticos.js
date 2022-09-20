let a = 3,
    b = 2;
let z = a + b;
console.log("El resultado de la suma es " + z);

z = a - b;
console.log("El resultado de la resta es " + z);

z = a * b;
console.log("El resultado de la multiplicacion es " + z);

z = a / b;
console.log("El resultado de la division es " + z);

z = a % b;
console.log("El resultado de la operacion modulo " + z);

z = a ** b;
console.log("El resultado de operador exponente es " + z);

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a; //suma 1 unidad y despues Asigna
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++; //Asigna y despues suma 1 unidad
console.log(b);
console.log(z);

//Decremento
//Pre-decremento
z = --a; //Resta 1 unidad y despues Asigna
console.log(a);
console.log(z);

//Post-decremento
z = b--; //Asigna y despues resta 1 unidad
console.log(b);
console.log(z);