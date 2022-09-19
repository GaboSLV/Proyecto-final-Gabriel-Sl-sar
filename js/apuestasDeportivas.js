// // function iva (valor1,valor2) {
// // let sumatotal= (valor1+valor2)*1.21;
// // return sumatotal
// // }
// let pepito=parseInt(prompt("Articulo1"));
// let juan=parseInt(prompt("articulo2"));
// // let totalMasIva = iva(pepito,juan);
// // console.log (totalMasIva);
// const iva = (valor1 , valor2) => {
//    let dineroTuSabe = valor1 + valor2 * 1.21;
//    return dineroTuSabe
// }
// let dineroIva = iva(pepito,juan);
// console.log(dineroIva)
// const cuotaTomada = document.getElementById('cuotaTomada')
// class cuotasVer {
//    constructor(cuotaTomada) {
//    this.cuotaTomada = cuotaTomada;
//    this.cuotaActual = '';
// }
// agregarCuota (cuota) {
//    this.cuotaActual = cuota;
//    this.imprimirDom();
//    console.log(cuotaActual)
// }
// imprimirDom () {
//    this.cuotaTomada.textContent = this.cuotaActual
//    console.log(cuotaActual)
// }
// }


let todas 
let balance = 100000;
function Apuestas (equipo1,cuota1,idcuota1,equipo2,cuota2,idcuota2,empate,cuotaempate,idcuotaempate) {
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

// let balanceDom = document.createElement("div")
// balanceDom.innerHTML=(`
// <p>Balance: ${balance} </p>
// <p id="cuotaTomada"></p>
// `)
// document.getElementById("apuestasDeportivas").appendChild(balanceDom)
let apuestas = document.createElement("div")
apuestas.innerHTML=(`<p>Ingrese monto de apuesta </p>
<input type="number" placeholder="Ingresa el monto" name="" id="apostarDinero" class="holdersApostar">
<input type="button" value="Apostar monto" id="cantidadApostada" class="btnApostar">`)
document.getElementById("apuestasDeportivas").appendChild(apuestas)
let apuestasTodas = [
   new Apuestas ("Real Madrid", 1.5,11, "Real Betis", 2.3,12, "Empate", 3.15,13),
   new Apuestas ("Barcelona", 1.35,21, "PSG", 1.32,22, "Empate", 2.35,23),
   new Apuestas ("Leverkusen", 1.1,31, "PSG", 1.58,32, "Empate", 4.25,33)
]




function apuestasRender() {
for (const apuestas of apuestasTodas) {
   lista=document.getElementById("editApuestas");
lista.innerHTML+=(` <div class="editarApuestas">
<div class="apuestasConfig">
  <p>${apuestas.equipo1}</p>
</div>
<div class="apuestasConfig"><p>${apuestas.empate}</p></div>
<div class="apuestasConfig"><p>${apuestas.equipo2}</p></div>
<button id=${apuestas.idcuota1} class="apuestasConfig1">${apuestas.cuota1}</button>
<button id=${apuestas.idcuotaempate}  class="apuestasConfig1">${apuestas.cuotaempate}</button>
<button  id=${apuestas.idcuota2} class="apuestasConfig1">${apuestas.cuota2}</button>
</div>`)
}}
apuestasRender()

// let cuotasver = new cuotasVer(cuotaTomada)

const todasCuotas = document.querySelectorAll('.apuestasConfig1')

todasCuotas.forEach (cuota => {
   cuota.addEventListener('click', () => {
let cuotaUsada = cuota.innerHTML
console.log (cuotaUsada)
   })
})











// function operacion(num1,num2) {
//    let resultado = num1*num2
//    console.log(resultado)
// }





