let form = document.getElementById('form');
let imagen = document.getElementById('imagen')
let nom = document.getElementById('nombre');
let marca = document.getElementById('marca');
let modelo = document.getElementById('modelo');
let talla = document.getElementById('talla');
let d = document.getElementById('textarea');
let msg = document.getElementById('msg');
let add = document.getElementById('add');
let zapatos = document.getElementById('zapatos');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formvalidation();
});

let formvalidation = () => {
    validar = validarcampos();
    if (validar === true) {
        swal({
            title: "Se requiere confirmación",
            text: "¿Deseas guardar los datos ahora?",
            icon: "warning",
            buttons: ["Regresar", "Si, Guardar"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    msg.innerHTML = "";
                    add.setAttribute("data-bs-dismiss", "modal");
                    add.click();
                    (() => {
                        add.setAttribute("data-bs-dismiss", "");
                        swal({
                            title: "Creado",
                            text: "Se creo existosamente los zapatos",
                            icon: "success",
                            buttons: "ok",
                        })
                    })();
                    acceptData();
                }
            });
    } else {
        msg.innerHTML = "El campo no puede estar vacio con tu corazón";
        swal("¡Errores Detectados!", "Detalles: " + validar, "error");
    }

};

let data = [];

let acceptData = () => {
    data.push({
        img: imagen.value,
        nom: nombre.value,
        marca: marca.value,
        modelo: modelo.value,
        talla: talla.value,
        descrip: d.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    console.log(imagen.value);
    createTasks();
};

let createTasks = () => {
    zapatos.innerHTML = "";
    data.map((x, y) => {
        return (zapatos.innerHTML += `
        <div id=${y}>
        <img src="${x.img}" alt="imagen del producto">
        <span class="fw-bold" >${x.nom}  </span>
        <span class="small text-dark">Marca: ${x.marca}</span>
        <span class="small text-dark">Modelo: ${x.modelo}</span>
        <span class="small text-dark">Talla: ${x.talla}</span>
        <p>${x.descrip}</p>
        <span class="options">
                <i onclick="editTasks(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                <i onclick="deleteTask(this); createTasks()" class="fas fa-trash-alt"></i>
        </span>
        </div>
        `);
    });

    resetForm();
};

let resetForm = () => {
    imagen.value = "";
    nombre.value = "";
    marca.value = "";
    modelo.value = "";
    talla.value = "";
    d.value = "";
};

function deleteTask(e) {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
}

let editTasks = (e) => {
    console.log(data)
    let tareaseleccionada = e.parentElement.parentElement;
    let index = tareaseleccionada.id;
    console.log(index)
    imagen.value = data[index].img;
    nombre.value = data[index].nom
    marca.value = data[index].marca
    modelo.value = data[index].modelo
    talla.value = data[index].talla;
    d.value = tareaseleccionada.children[5].innerHTML;
    deleteTask(e);
};

function validarcampos() {
    camposvacios = "";
    
    let imag = imagen.value;
    if (!imag || imag.trim() === "" || imag.length === 0) {
        camposvacios += "Pon la URL de la imagen | ";
    }

    let nombre = nom.value;
    if (!nombre || nombre.trim() === "" || nombre.length === 0) {
        camposvacios += "Pon el nombre | ";
    }

    let marc = marca.value;
    if (!marc || marc.length === 0 || marc.trim() == "") {
        camposvacios += "Pon la marca | ";
    }

    let model = modelo.value;
    if (!model || model.trim() === "" || model.length === 0) {
        camposvacios += "Pon el modelo | ";
    }

    let tall = talla.value;
    if (!tall || tall.trim() === "" || tall.length === 0) {
        camposvacios += "Pon la talla  ";
    }

    if (camposvacios == "") {
        return true;
    } else {
        return camposvacios;
    }
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
})();