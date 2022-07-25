
// Ejercicio N°1

let num = parseInt(prompt("Ingrese un número entero"));


for (let i = 10; i <= 20; i++) {
 
  let resultado = num+i 
  
 console.log("Su numero elegido: " + num + " + " + i + " es igual a " + resultado);
  
}


// Ejercicio N°2


let suTalle = prompt("Ingrese su talle solicitado. Luego escriba ESC para salir");

while (suTalle != "ESC") {
  alert("Su talle elegido es: " + suTalle);
  

  suTalle= prompt("Ingrese su talle solicitado. Luego escriba ESC para salir");
}


// Ejercicio N°3


let suNumero = parseInt(prompt("Ingrese un número entero"));

for (let i = 1 ; i <= suNumero; i++) {
  console.log("Hola")
  
}



