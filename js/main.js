
let solucion;
let apuesta;
let salir;
let ganadaoPerdida 


let apuestasForm = document.createElement("div");
let balance = 50000; 
apuestasForm.innerHTML = `
<div class="casino">
<h2>¡Lanza la moneda!</h2>
<p>En caso de ganar, ganarás el doble de lo que apostaste, si pierdes, tu dinero desaparecerá de tu balance. Comienzas con un balance de $50.000</p>
<input type="number" placeholder="Ingresa el monto" name="" id="dineroApostado" class="holdersApostar">
<input type="button" value="Apostar monto" id="montoApostado" class="btnApostar">
</div>
`

document.getElementById("casino").appendChild(apuestasForm)
let montoApostClick = document.getElementById("montoApostado");
  montoApostClick.addEventListener("click", apuestaRealizada)

//Apenas doy click se ejecuta esta porción de código.
function  apuestaRealizada () {
  
  let cantidadApostada = document.getElementById("dineroApostado").value
    if (balance>=cantidadApostada && cantidadApostada>0) {
      Toastify({

        text: "¡Apuesta realizada!",
        gravity: 'top',
        position:'right',
        style: {
          background: "linear-gradient(to right, #01e7a6, #01e7a8)",
        },
        duration: 3000
        
        }).showToast();
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
  else if (cantidadApostada<=0) {
    Swal.fire({
      icon: 'error',
      text: "Por favor utilize un valor mayor a 0.",
      background: 'rgba(0, 0, 0, 0.70)',
      color: 'white',  
      confirmButtonColor: '#01e7a6',
    });
  }
 else {
  console.log(balance)
  Swal.fire({
    icon: 'error',
    text: "Lo lamentamos, no tienes saldo para realizar esta operación",
    background: 'rgba(0, 0, 0, 0.70)',
    color: 'white',  
    confirmButtonColor: '#01e7a6',
  });
}


localStorage.setItem ("balance", +balance)
let storageView = localStorage.getItem ("balance")
console.log (storageView)
}
function obtenerInfo () {
  const URLGET="https://jsonplaceholder.typicode.com/posts/1/comments"
  fetch(URLGET)
    .then(result=>result.json() )
    .then(info => {
const opinions = info
   opinions.forEach(opinion => {
    document.getElementById("opiniones").innerHTML+=`
   <div class=opinionesedit> <p>Email: ${opinion.email}</p>
    <p>Opinión: ${opinion.body}</p>
    <div>`
   }) })
}
obtenerInfo()

//Hasta acá.


