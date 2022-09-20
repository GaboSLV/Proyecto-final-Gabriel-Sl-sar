
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

},
{
    team: "PSG", gep: "3/1/1", capitan: "Marquinhos", estrella: "Kylian Mbappe",

},
{
    team: "Bayern Munich", gep: "4/1/0", capitan: "Manuel Neuer", estrella: "Sadio Mané",

},
{
    team: "Juventus", gep: "3/1/1", capitan: "Giorgio Chiellini", estrella: "Dusan Vlahovic",

},
];

let buscadorSite = document.createElement("div");
buscadorSite.innerHTML = 
`   <div class=navegador>
<h2>Ingresa el nombre del equipo que deseas buscar</h2>
<p>En este apartado podrás encontrar información sobre los equipos a los que deseas apostar, sus últimos cinco partidos, su capitán y su jugador estrella.</p>
<p>La cantidad de equipos cargados es de: ${+equipos.length}</p>
<input type="text" class="holderStyle" name="Nombre del equipo" id="equipo">
<input type="button" class="btnStyle" value="Enviar" id="enviarInfo"></div>`;
document.getElementById("buscadorDiv").appendChild(buscadorSite);
let btnEnviar = document.getElementById("enviarInfo");
btnEnviar.addEventListener("click", buscador);
function buscador () {
let buscado = document.getElementById("equipo").value.toUpperCase();
console.log (buscado)
let busqueda = equipos.find ((equipo)=>equipo.team.toUpperCase()== buscado);
if (busqueda!=undefined) {

    let contenido = document.createElement("div");
    contenido.innerHTML = `  
    <div class=equipoList><p>Equipo buscado: ${busqueda.team}</p>
    <p>Ganados, empatados y perdidos: ${busqueda.gep}</p>
    <p>Capitán: ${busqueda.capitan}</p>
    <p>Estrella: ${busqueda.estrella}</p>
    </div>`;
    document.getElementById("buscadorDiv").appendChild(contenido);
    }
else {
    contenido = document.createElement("div");
    contenido.innerHTML = `  
    <div class=equipoList><p>Equipo no encontrado</p></div>
    `;
    document.getElementById("buscadorDiv").appendChild(contenido);
   
}
}

