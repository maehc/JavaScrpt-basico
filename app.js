/* // se declara la primera variable y JS automaticamente la marca como variable de tipo String
var primerNombre = "Maricruz";
//Se muestra el codigo en consola, se declara el nombre de la variable para mostrar lo que guarda
console.log(primerNombre);
//Declaracion de variables numericas
var edad = 34;  //Enteros
var sueldo = 18000.89; //Decimales
console.log(edad); //Impresion de variable
//Declaracion de variables booleanas
var tieneTrabajo = false;
console.log(tieneTrabajo); //Impresion de dato booleano
//Declaracin de varible indefinida
var puestoDeTrabajo;
console.log(puestoDeTrabajo); //Impresion de variable
//Declaracion de de varianle con valor NULL
tieneTrabajo = null;
console.log(tieneTrabajo); //Impresion de variable NULL

var primerNombre, edad,sexo, esSoltero; // En una sola linea se pueden declarar varias variables
//Se declaran los valores o los datos que guardaran las variables
primerNombre = "Maricruz"; 
edad = 23;
sexo = "F";
esSoltero = true;
console.log("El nombre es: "+ primerNombre + " y su edad es: "+ edad + ", es de sexo: "+sexo + " ¿Es soltero?: "+ esSoltero);

var edad;
edad = 22;
console.log(edad);

edad = "veintidos";
console.log(edad);*/

var edadMaricruz, edadCristina, diferenciaEdad, sumaEdades, yearActual, yearMaricruz, yearCristina;
edadMaricruz = 23;
edadCristina = 25;
yearActual = 2024;

diferenciaEdad = edadCristina - edadMaricruz;
console.log(diferenciaEdad);

sumaEdades = edadCristina + edadMaricruz;
console.log(sumaEdades);

yearMaricruz = yearActual - edadMaricruz;
console.log("Año en el que nació Maricruz: "+yearMaricruz);

yearCristina = yearActual - edadCristina;
console.log("Año en el que nació Cristina: "+yearCristina);

//Operaciones
console.log(yearActual * 5);
console.log(yearActual / 5);

//operadores logicos

var mayorMaricruz = edadMaricruz > edadCristina;
console.log(mayorMaricruz);

var mayorMaricruz = edadMaricruz < edadCristina;
console.log(mayorMaricruz);