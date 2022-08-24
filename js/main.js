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
   (solucion <= 0.45) ?
   ( balance += (cantidadApostada*2),
    ganadaoPerdida = document.getElementById("casino1"),
ganadaoPerdida.innerHTML = `
<div class="casino">
<p>¡Felicidades! en tu moneda salió "Cara" por lo tanto ganaste. Tu balance ahora es de: ${+balance}</p> 
</div>`,
document.getElementById("casino").appendChild(ganadaoPerdida) ) :

  (ganadaoPerdida = document.getElementById("casino1"),
  ganadaoPerdida.innerHTML = `
  <div class="casino">
  <p>Lo lamentamos, en tu moneda salió "Cruz", por lo tanto perdiste. Tu balance ahora es de: ${+balance}</p> 
  </div>`)
}
localStorage.setItem ("balance", +balance)
let storageView = localStorage.getItem ("balance")
console.log (storageView)
}
//Hasta acá.
