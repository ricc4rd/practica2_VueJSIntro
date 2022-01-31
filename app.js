// definicion de las constantes

// ocultar o mostrar div que contiene la lista
const hide = document.querySelector("#hideElements");
const listDiv = document.querySelector("#list");

// ahora las constantes para agregar elementos a la lista
const addItemInput = document.querySelector("#addItem"); //input
const addItemButton = document.querySelector("button#addItemButton");

// eliminar ultimo item

const removeItemButton = document.querySelector("button#removeItemButton");

// eliminnar elemento seleccionado

const removeItem = document.querySelector("button#removeItem");

hide.addEventListener("click", () => {
    if (listDiv.style.display == "none") {
        listDiv.style.display = "block";
        hide.textContent = "<<";
    } else {
        listDiv.style.display = "none";
        hide.textContent = ">>";
    }
});

// agregar elementos a la lista

addItemButton.addEventListener("click", () => {
    let list = document.querySelector("ul");
    let li = (document = document.createElement("li"));
    li.textContent = addItemInput.value;
    list.appendChild(li); //esto para agregar elementos a la lista
    addItemInput.value = "";
});

// eliminar ultimo elemento de la lista

removeItemButton.addEventListener("click", () => {
    let list = document.querySelector("ul");
    let li = document.querySelector("li:last-child");
    list.removeChild(li);
});

// obtener index del elemto seleccionado
function findIndex(elem) {
    var i,
        len = items.length;
    for (i = 0; i < len; i++) {
        if (items[i] === elem) {
            return i;
        }
    }
    return -1;
}

var list = document.getElementById("listItems"),
    items = list.getElementsByTagName("li");
list.onclick = function (e) {
    var event = e || window.event,
        src = event.target || event.srcElement;
    var myIndex = findIndex(src);

    // alert (myIndex )
    index = myIndex;
    console.log(myIndex);

    // cambiar color del elemento seleccionado
    if (event.target.tagName === "LI") {
        list.querySelectorAll("li").forEach((el) =>
            el.classList.remove("alert", "alert-success")
        ); //se agregan clase de bootstarp para los elementos
        items[index].classList.add("alert", "alert-success");
    }
};

// eliminar elemento seleccionado

removeItem.addEventListener("click", () => {
    let showDiv = document.getElementById("list");
    let divAlert = document.createElement("div");
    let label = document.createElement("label");
    label.innerHTML = "Se elimino el elemento " + index;
    divAlert.classList.add("alert", "alert-danger"); //clase de alerta

    items[index].parentNode.removeChild(items[index]);
    divAlert.appendChild(label);
    showDiv.appendChild(divAlert);

    hideAlert();

    function hideAlert() {
        setTimeout(() => {
            divAlert.removeChild(label);
            divAlert.classList.remove("alert", "alert-danger");
        }, 1000);
    }
});
const vm = Vue.createApp({
    data() {
        return {
            students: `<strong>
                        <h2>Estudiante 1</h2>
                        <h2>Estudiante 2</h2>
                        <h2>Estudiante 3</h2>
                        <h2>Estudiante 4</h2>
                    </strong>`,
        };
    },
}).mount("#students");

//array de mascotas
const mascotas = [
    {
        nombre: "Coco",
        edad: 2,
    },
    {
        nombre: "Thor",
        edad: 7,
    },
    {
        nombre: "Max",
        edad: 12,
    },
    {
        nombre: "Leo",
        edad: 9,
    },
    {
        nombre: "Rocky",
        edad: 10,
    },
    {
        nombre: "Simba",
        edad: 8,
    },
];

let divMascotas = document.querySelector('#mascotas ul')
mascotas.forEach(element => {
    divMascotas.innerHTML += `<li>Nombre: <strong>${element.nombre}</strong>; Edad: <strong>${element.edad}</strong></li>`
});