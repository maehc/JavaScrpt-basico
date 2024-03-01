/**
 Utilizar la siguiente formula para calcular el IMC (indice de masa corporal) de Luis y de Carlos,
 IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de 
 Carlos es superior al de Luis
 IMC = (Peso/Altura2)
  */

 var pesoLuis = 72;
 var alturaLuis = 1.72;

 var pesoCarlos = 89;
 var alturaCarlos = 1.75;

var imcLuis, imcCarlos, comparacion;

imcLuis = pesoLuis/(alturaLuis*alturaLuis);
console.log(imcLuis);
console.log("El IMC de Luis es de: "+imcLuis+" y se encuentra en un IMC normal.");

imcCarlos = pesoCarlos/(alturaCarlos*alturaCarlos);
console.log(imcCarlos);
console.log("El IMC de Carlos es: "+imcCarlos+" y se encuentra en un IMC parcialmente normal.")

comparacion = imcCarlos > imcLuis;
console.log(comparacion);
console.log("El IMC  de Carlos es superior al de Luis: "+comparacion);
