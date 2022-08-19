
const equipos= [
    {
    team: "Real Madrid", gep: "3/1/1", capitan: "Karim Benzema", estrella: "Karim Benzema",
},
{
    team: "Barcelona", gep: "2/1/2", capitan: "Gerard Piqué", estrella: "Robert Lewandowski",
},

{
    team: "Liverpool", gep: "1/2/2", capitan: "Fabinho", estrella: "Mohamed Salah",

},
{
    team: "Atletico Madrid", gep: "2/2/1", capitan: "Savic", estrella: "Griezmann",

}
];


let formulario = document.createElement("div");
formulario.innerHTML = 
`        
<h2>Ingresa el nombre del equipo que deseas buscar</h2>
<p>La cantidad de equipos cargados es de: ${+equipos.length}</p>
<input type="text" name="Nombre del equipo" id="equipo">
<input type="button" value="Enviar" id="enviarInfo">`;
document.body.appendChild(formulario);
let btnEnviar = document.getElementById("enviarInfo");
btnEnviar.addEventListener("click", buscador);
function buscador () {
let buscado = document.getElementById("equipo").value;
console.log (buscado)
let busqueda = equipos.find ((equipo)=>equipo.team== buscado);
if (busqueda!=undefined) {

    let contenido = document.createElement("div");
    contenido.innerHTML = `  
    <div class=equipoList><p>Equipo buscado: ${busqueda.team}</p>
    <p>Ganados, empatados y perdidos: ${busqueda.gep}</p>
    <p>Capitán: ${busqueda.capitan}</p>
    <p>Estrella: ${busqueda.estrella}</p>
    </div>`;
    document.body.appendChild(contenido);
    }
else {
    contenido = document.createElement("div");
    contenido.innerHTML = `  
    <div class=equipoList><p>Equipo no encontrado</p></div>
    `;
    document.body.appendChild(contenido);
   
}

}
