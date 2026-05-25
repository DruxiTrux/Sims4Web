const lista = document.getElementById("lista");
const buscador = document.getElementById("buscador");

const imagen = document.getElementById("imagen");
const info = document.getElementById("info");

let packs = {};


// ======================================
// CARGAR JSON
// ======================================

fetch("packs.json")

.then(response => response.json())

.then(data => {

    packs = data;

    mostrarTodos();
});


// ======================================
// MOSTRAR TODOS
// ======================================

function mostrarTodos(){

    lista.innerHTML = "";

    for(let codigo in packs){

        crearItem(codigo, packs[codigo]);
    }
}


// ======================================
// CREAR ITEM
// ======================================

function crearItem(codigo, datos){

    const div = document.createElement("div");

    div.classList.add("item");

    div.innerText = `${codigo} - ${datos.nombre}`;

    div.onclick = () => mostrarPack(codigo);

    lista.appendChild(div);
}


// ======================================
// MOSTRAR PACK
// ======================================

function mostrarPack(codigo){

    const datos = packs[codigo];

    // QUITAR ACTIVO ANTERIOR

    document.querySelectorAll(".item")
    .forEach(item => {

        item.classList.remove("activo");
    });

    // ACTIVAR NUEVO

    event.target.classList.add("activo");

    // IMAGEN

    imagen.src = `imagenes/${codigo}/icon.png`;

    // INFO

    info.innerHTML = `
    
        <h2>${codigo} - ${datos.nombre}</h2>

        <p>Lanzamiento: ${datos.fecha}</p>

    `;
}


// ======================================
// BUSCADOR
// ======================================

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    lista.innerHTML = "";

    for(let codigo in packs){

        const nombre = packs[codigo].nombre.toLowerCase();

        if(
            codigo.toLowerCase().includes(texto)
            ||
            nombre.includes(texto)
        ){

            crearItem(codigo, packs[codigo]);
        }
    }
});