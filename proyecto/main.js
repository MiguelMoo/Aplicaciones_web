let zapato = document.getElementById('zapatos');
let camisas = document.getElementById('camisas');
let pantalones = document.getElementById('pantalones');

let zapatos = [];
let camisa = [];
let pantalon = [];


function MostrarZapatos() {
    zapato.innerHTML = "";
    zapatos.map((x, y) => {
        return (zapato.innerHTML += `
        <div id=${y}>
        <img src="${x.img}" alt="imagen del producto">
        <span class="fw-bold" >${x.nom}  </span>
        <span class="small text-dark">Marca: ${x.marca}</span>
        <span class="small text-dark">Modelo: ${x.modelo}</span>
        <span class="small text-dark">Talla: ${x.talla}</span>
        <p>${x.descrip}</p>
    </div>
    `);
    });
};

function MostrarCamisas() {
    camisas.innerHTML = "";
    camisa.map((x, y) => {
        return (camisas.innerHTML += `
        <div id=${y}>
        <img src="${x.img}" alt="imagen del producto">
        <span class="fw-bold" >${x.nom}  </span>
        <span class="small text-dark">Marca: ${x.marca}</span>
        <span class="small text-dark">Modelo: ${x.modelo}</span>
        <span class="small text-dark">Talla: ${x.talla}</span>
        <p>${x.descrip}</p>
    </div>
    `);
    });
};

function MostrarPantalones() {
    pantalones.innerHTML = "";
    pantalon.map((x, y) => {
        return (pantalones.innerHTML += `
        <div id=${y}>
        <img src="${x.img}" alt="imagen del producto">
        <span class="fw-bold" >${x.nom}  </span>
        <span class="small text-dark">Marca: ${x.marca}</span>
        <span class="small text-dark">Modelo: ${x.modelo}</span>
        <span class="small text-dark">Talla: ${x.talla}</span>
        <p>${x.descrip}</p>
    </div>
    `);
    });
};

function acceptData() {
    MostrarZapatos();
    MostrarCamisas();
    MostrarPantalones();
}

(() => {
    zapatos = JSON.parse(localStorage.getItem("data")) || [];
    camisa = JSON.parse(localStorage.getItem("dato")) || [];
    pantalon = JSON.parse(localStorage.getItem("datos")) || [];
    acceptData();
})();