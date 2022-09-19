let cuotaNueva;
let todas;
let balance = 100000;
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

let apuestas = document.createElement("div");
apuestas.innerHTML = `<p>Ingrese monto de apuesta </p>
<input type="number" placeholder="Ingresa el monto" name="" id="cantidadApuesta" class="holdersApostar">
<input type="button" value="Apostar monto" id="clickApostada" class="btnApostar">`;
document.getElementById("apuestasDeportivas").appendChild(apuestas);
let apuestasTodas = [
  new Apuestas(
    "Real Madrid",
    1.5,
    11,
    "Real Betis",
    2.3,
    12,
    "Empate",
    3.15,
    13
  ),
  new Apuestas("Barcelona", 1.35, 21, "PSG", 1.32, 22, "Empate", 2.35, 23),
  new Apuestas("Leverkusen", 1.1, 31, "PSG", 1.58, 32, "Empate", 4.25, 33),
];

function apuestasRender() {
  for (const apuestas of apuestasTodas) {
    lista = document.getElementById("editApuestas");
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

let cuotaUsada
let cantApuesta
const todasCuotas = document.querySelectorAll(".apuestasConfig1");
todasCuotas.forEach((cuota) => {
  //Al clickear tomo el valor de la cuota que elijo.
  cuota.addEventListener("click", () => {
    cuotaUsada = cuota.innerHTML;
    console.log(cuotaUsada);

  });
  
});
//Me devuelve el valor del monto apostado.
const cantidadApuesta = document.getElementById("cantidadApuesta");
cantidadApuesta.addEventListener("blur", inputUsuario);
function inputUsuario() {
  cantApuesta = cantidadApuesta.value;
}
//No retorna los valores
const clickApuesta = document.getElementById("clickApostada");
clickApuesta.addEventListener("click", apuestaRealizada);
function apuestaRealizada(cantApuesta, cuotaUsada) {
  console.log(cantApuesta);
  console.log(cuotaUsada);
}

