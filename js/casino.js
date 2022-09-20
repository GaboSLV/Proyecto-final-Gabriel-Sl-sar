let solucion;
let apuesta;
let salir;
let ganadaoPerdida;
let apuestasForm = document.createElement("div");
let balance = 50000;
localStorage.setItem("balance", +balance);
let storageView = localStorage.getItem("balance");
console.log(storageView);

//Muestra de balance en el HTML

let balanceDom = document.getElementById("casino2");
balanceDom.innerHTML = `<div class="balanceContainer"><p class="balanceParrafo">Balance: $${balance}</p></div>`;
apuestasForm.innerHTML = `
<div class="casino">
<h2>¡Lanza la moneda!</h2>
<p>En caso de ganar, ganarás el doble de lo que apostaste, si pierdes, tu dinero desaparecerá de tu balance. Comienzas con un balance de $50.000</p>
<input type="number" placeholder="Ingresa el monto" name="" id="dineroApostado" class="holdersApostar">
<input type="button" value="Apostar monto" id="montoApostado" class="btnApostar">
</div>
`;

//Porción de código encargada de la apuesta.

document.getElementById("casino").appendChild(apuestasForm);
let montoApostClick = document.getElementById("montoApostado");
montoApostClick.addEventListener("click", apuestaRealizada);
function apuestaRealizada() {
  let cantidadApostada = document.getElementById("dineroApostado").value;
  if (balance >= cantidadApostada && cantidadApostada > 0) {
    Toastify({
      text: "¡Apuesta realizada!",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #01e7a6, #01e7a8)",
      },
      duration: 3000,
    }).showToast();
    balance -= cantidadApostada;
    solucion = Math.random();
    solucion <= 0.45
      ? ((balance += cantidadApostada * 2),
        (ganadaoPerdida = document.getElementById("casino1")),
        (ganadaoPerdida.innerHTML = `
    <div class="casino">
    <p>¡Felicidades! en tu moneda salió "Cara" por lo tanto ganaste. Tu balance ahora es de: ${+balance}</p> 
    </div>`),
        document.getElementById("casino").appendChild(ganadaoPerdida))
      : ((ganadaoPerdida = document.getElementById("casino1")),
        (ganadaoPerdida.innerHTML = `
      <div class="casino">
      <p>Lo lamentamos, en tu moneda salió "Cruz", por lo tanto perdiste. Tu balance ahora es de: ${+balance}</p> 
      </div>`));
    let total = balance;
    localStorage.setItem("balance", +balance);
    let storageView = localStorage.getItem("balance");
    total = storageView;
    console.log(total);
    balanceDom = document.getElementById("casino2");
    balanceDom.innerHTML = `<div class="balanceContainer"><p class="balanceParrafo">Balance: $${total}</p></div>`;
  }

  // Validar que no pasen números negativos.

  else if (cantidadApostada <= 0) {
    Swal.fire({
      icon: "error",
      text: "Por favor utilize un valor mayor a 0.",
      background: "rgba(0, 0, 0, 0.70)",
      color: "white",
      confirmButtonColor: "#01e7a6",
    });
  } else {
    Swal.fire({
      icon: "error",
      text: "Lo lamentamos, no tienes saldo para realizar esta operación",
      background: "rgba(0, 0, 0, 0.70)",
      color: "white",
      confirmButtonColor: "#01e7a6",
    });
  }
}

//Consumo API para simular reseñas de usuarios.

function obtenerInfo() {
  const URLGET = "https://jsonplaceholder.typicode.com/posts/1/comments";
  fetch(URLGET)
    .then((result) => result.json())
    .then((info) => {
      const opinions = info;
      opinions.forEach((opinion) => {
        document.getElementById("opiniones").innerHTML += `
 <div class="centerApuesta">  <div class=opinionesedit> <p class="anadirPadding">Email: ${opinion.email}</p>
    <p>Opinión: ${opinion.body}</p>
    <div></div>`;
      });
    });
}
obtenerInfo();

//Hasta acá.
