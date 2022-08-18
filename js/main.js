let balance;
let monto;
let solucion;
let apuesta;
let salir;
//Funcionamiento de apuesta.
function moneda () {
  monto = parseInt(prompt("Ingresa la cantidad que deseas apostar"));
  if (monto>balance) {
    alert("Lo lamentamos, no tienes saldo para realizar esta operación")
  }
  else {
  balance -= monto;
  alert("Tu balance actual es: " + balance);
  solucion = Math.random();
  console.log(solucion);
  if (solucion <= 0.5) {
balance += (monto*1.9);
    alert("¡Felicidades! Ganaste, tu balance ahora es: " + balance);
  } else {
    alert("Lo lamentamos perdiste, tu balance actual es: " + balance);
  }
  salir = prompt(
    'Usa "n" para salir "b" para consultar tu balance o cualquier otra tecla para seguir apostando.'
  );
  if (salir=="b") {
    alert("Tu balance actual es: " +balance);
  }
  if (balance <=0) {
    alert ("Lo lamentamos, no tienes balance para realizar esta operación. Recarga tu balance.")
  }
}}






//Bucle de apuesta
balance = 50000;
alert("Dispones de $50.000 de balance")
do {
 moneda ();
} while (salir != "n");
