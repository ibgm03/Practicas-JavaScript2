//Escribir el código de una función a la que se pasa como parámetro un número entero
//y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla
//el resultado devuelto por la función.

let n = prompt("Ingrese numero");
var resultado = par(n);
alert("El numero es:  " + resultado);

function par(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
