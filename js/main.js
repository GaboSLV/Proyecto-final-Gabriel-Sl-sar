
// //Funcionamiento de apuesta.
// function moneda () {
//   monto = parseInt(prompt("Ingresa la cantidad que deseas apostar"));
//   if (monto>balance) {
//     alert("Lo lamentamos, no tienes saldo para realizar esta operación")
//   }
//   else {
//   balance -= monto;
//   alert("Tu balance actual es: " + balance);
//   solucion = Math.random();
//   console.log(solucion);
//   if (solucion <= 0.5) {
// balance += (monto*1.9);
//     alert("¡Felicidades! Ganaste, tu balance ahora es: " + balance);
//   } else {
//     alert("Lo lamentamos perdiste, tu balance actual es: " + balance);
//   }
//   salir = prompt(
//     'Usa "n" para salir "b" para consultar tu balance o cualquier otra tecla para seguir apostando.'
//   );
//   if (salir=="b") {
//     alert("Tu balance actual es: " +balance);
//   }
//   if (balance <=0) {
//     alert ("Lo lamentamos, no tienes balance para realizar esta operación. Recarga tu balance.")
//   }
// }}






// //Bucle de apuesta
// balance = 50000;
// alert("Dispones de $50.000 de balance")
// do {
//  moneda ();
// } while (salir != "n");
let balance;
let solucion;
let apuesta;
let salir;
let ganadaoPerdida 


let apuestasForm = document.createElement("div");
balance = 50000; 
apuestasForm.innerHTML = `
<div class="casino">
<h2>¡Lanza la moneda!</h2>
<p>En caso de ganar, ganarás el 90% extra de lo que apostaste, si pierdes, tu dinero desaparecerá de tu balance. Comienzas con un balance de $50.000</p>
<input type="number" name="" id="dineroApostado">
<input type="button" value="Apostar monto" id="montoApostado">
</div>
`

document.getElementById("casino").appendChild(apuestasForm)
let montoApostClick = document.getElementById("montoApostado");
  montoApostClick.addEventListener("click", apuestaRealizada)

//Apenas doy click se ejecuta esta porción de código.
function  apuestaRealizada () {
  
  let cantidadApostada = document.getElementById("dineroApostado").value
    if (cantidadApostada>balance) {
      console.log(balance)
    alert("Lo lamentamos, no tienes saldo para realizar esta operación" )
  }
 else {
  balance -= cantidadApostada;
  solucion = Math.random();
  if (solucion <= 0.5) {
    balance += (cantidadApostada*1.9);
    ganadaoPerdida = document.createElement("div");
ganadaoPerdida.innerHTML = `
<div class="casino">
<p>¡Felicidades! en tu moneda salió "Cara" por lo tanto ganaste. Tu balance ahora es de: ${+balance}</p> 
</div>`
document.getElementById("casino").appendChild(ganadaoPerdida)
   }
else {
  ganadaoPerdida = document.createElement("div");
  ganadaoPerdida.innerHTML = `
  <div class="casino">
  <p>Lo lamentamos, en tu moneda salió "Cruz", por lo tanto perdiste. Tu balance ahora es de: ${+balance}</p> 
  </div>`
  
document.getElementById("casino").appendChild(ganadaoPerdida)}
}
localStorage.setItem ("balance", +balance)
let storageView = localStorage.getItem ("balance")
console.log (storageView)
}
//Hasta acá.
