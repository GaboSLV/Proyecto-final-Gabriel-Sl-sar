let balance = 100000;
// Armado de apuestas.
function Apuestas(
  equipo1,
  cuota1,
  idcuota1,
  equipo2,
  cuota2,
  idcuota2,
  empate,
  cuotaempate,
  idcuotaempate
) {
  this.equipo1 = equipo1;
  this.cuota1 = cuota1;
  this.idcuota1 = idcuota1;
  this.equipo2 = equipo2;
  this.cuota2 = cuota2;
  this.idcuota2 = idcuota2;
  this.empate = empate;
  this.idcuotaempate = idcuotaempate;
  this.cuotaempate = cuotaempate;
}
// Navegador de apuestas.
let apuestas = document.createElement("div");
apuestas.innerHTML = `<div class="manejadorDeApuestas"><p class="montoDeApuesta">Ingrese monto de apuesta </p>
<input type="number" placeholder="Ingresa el monto" name="" id="cantidadApuesta" class="holdersApostar">
<input type="button" value="Apostar monto" id="clickApostada" class="btnApostar"></div>`;
document.getElementById("apuestasDeportivas").appendChild(apuestas);
let apuestasTodas = [
  new Apuestas("Real Madrid", 1.5,11,"Osasuna", 3.73,12,"Empate",3.15,13),
  new Apuestas("R.C.D Mallorca", 4.35, 21, "Barcelona", 1.32, 22, "Empate", 3.35, 23),
  new Apuestas("Arsenal", 2.73, 31, "Manchester City", 1.48, 32, "Empate", 3.25, 33),
];

//Renderizado de todas las apuestas creadas.

function apuestasRender() {
  for (const apuestas of apuestasTodas) {
    let lista = document.getElementById("editApuestas");
    lista.innerHTML += ` <div class="editarApuestas">
<div class="apuestasConfig">
  <p>${apuestas.equipo1}</p>
</div>
<div class="apuestasConfig"><p>${apuestas.empate}</p></div>
<div class="apuestasConfig"><p>${apuestas.equipo2}</p></div>
<button id=${apuestas.idcuota1} class="apuestasConfig1">${apuestas.cuota1}</button>
<button id=${apuestas.idcuotaempate}  class="apuestasConfig1">${apuestas.cuotaempate}</button>
<button  id=${apuestas.idcuota2} class="apuestasConfig1">${apuestas.cuota2}</button>
</div>`;
  }
}
apuestasRender();


let cuotaUsada;
let cantApuesta;
let posibleGanancia;
const todasCuotas = document.querySelectorAll(".apuestasConfig1");
todasCuotas.forEach((cuota) => {
  //Al clickear tomo el valor de la cuota que elijo.
  cuota.addEventListener("click", () => {
    cuotaUsada = cuota.innerHTML;
    console.log(cuotaUsada);
  });
});

let balanceDom = document.getElementById("balanceDivision");
balanceDom.innerHTML = `<div class="balanceContainer"><p class="balanceParrafo">Balance: $${balance}</p></div>`;
//Me devuelve el valor del monto apostado.
const cantidadApuesta = document.getElementById("cantidadApuesta");
cantidadApuesta.addEventListener("blur", inputUsuario);
function inputUsuario() {
  cantApuesta = cantidadApuesta.value;
  console.log(cantApuesta);
}
//Toma los valores y los imprime

const clickApuesta = document.getElementById("clickApostada");
clickApuesta.addEventListener("click", apuestaRealizada);
function apuestaRealizada() {
  if (balance >= cantApuesta && cuotaUsada != undefined && cantApuesta > 0) {
    Toastify({
      text: "??Apuesta realizada!",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #01e7a6, #01e7a8)",
      },
      duration: 3000,
    }).showToast();
    balance -= cantApuesta;
    posibleGanancia = cuotaUsada * cantApuesta;
    console.log(posibleGanancia);
    console.log(balance);
    let contenido = document.createElement("div");
    contenido.innerHTML = `<div class="centerApuesta"><div class=devolucionApuesta>
<div class="grid1">
<p>??Apuesta realizada!</p>
<p>Monto apostado: $${cantApuesta}</p>
<p>Cuota ganadora: ${cuotaUsada} </p>
<p>Ganancia posible: $${posibleGanancia} </p>
</div>
<div class="grid2">
<img src="../assets/img/vibes logo2.png" alt="" class="imagenLogo">
</div>
</div></div>`;
    document.getElementById("apuestasDeportivas").appendChild(contenido);
    let total = balance;
    let balanceDom = document.getElementById("balanceDivision");
    balanceDom.innerHTML = `<div class="balanceContainer"><p class="balanceParrafo">Balance: $${total}</p></div>`;
  } 

  //Verificaci??n de si el usuario tom?? cuota o no.

  else if (cuotaUsada == undefined) {
    Swal.fire({
      icon: "error",
      text: "Por favor, elige una cuota antes de realizar la operaci??n",
      background: "rgba(0, 0, 0, 0.70)",
      color: "white",
      confirmButtonColor: "#01e7a6",
    });

    //No uso de n??meros negativos.
    
  } else if (cantApuesta <= 0) {
    Swal.fire({
      icon: "error",
      text: "Por favor ingrese un valor mayor a 0",
      background: "rgba(0, 0, 0, 0.70)",
      color: "white",
      confirmButtonColor: "#01e7a6",
    });
  } else {
    Swal.fire({
      icon: "error",
      text: "Lo lamentamos, no tienes saldo para realizar esta operaci??n",
      background: "rgba(0, 0, 0, 0.70)",
      color: "white",
      confirmButtonColor: "#01e7a6",
    });
  }
}
