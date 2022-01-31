// definicion de las constantes 

// ocultar o mostrar div que contiene la lista 
const  hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');

// ahora las constantes para agregar elementos a la lista 
const addItemInput = document.querySelector('#addItem'); //input
const addItemButton = document.querySelector('button#addItemButton');

// eliminar ultimo item 

const removeItemButton = document.querySelector('button#removeItemButton');

// eliminnar elemento seleccionado 


const removeItem = document.querySelector('button#removeItem');


hide.addEventListener('click', () =>{
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block';
        hide.textContent = '<<';
    }else{
        listDiv.style.display = 'none';
        hide.textContent = '>>';
    }
});

// agregar elementos a la lista 

addItemButton.addEventListener('click', () =>{
    let list = document.querySelector('ul');
    let li = document = document.createElement('li');
    li.textContent = addItemInput.value;
    list.appendChild(li); //esto para agregar elementos a la lista 
    addItemInput.value="";

    
});

// eliminar ultimo elemento de la lista 

removeItemButton.addEventListener('click', ()=>{
    let list = document.querySelector('ul');
    let li = document.querySelector('ul');
    list.removeChild(li);
});


// obtener index del elemto seleccionado 
function findIndex (elem){
    var i, len = items.length;
    for(i=0; i<len; i++) {
        if(items[i]===elem){
            return i;
        }
    }
    return -1;
};

var list = document.getElementById("listItems"),
    items = list.getElementsByTagName("li");
list.onclick = function(e){
    var event = e || window.event, 
    src = event.target || event.srcElement;
    var myIndex = findIndex(src);
    
    // alert (myIndex )
    index = myIndex;
    console.log(myIndex);
    
    // cambiar color del elemento seleccionado
    if (event.target.tagName === 'LI'){
    list.querySelector('li').forEach(el =>el.classList.remove('alert', 'alert-success')); //se agregan clase de bootstarp para los elemntos 
    items[index].classList.ass('alert', 'alert-success');
}
};

// eliminar elemento seleccionado 

removeItem.addEventListener('click', () =>{
    let showDiv = document.getElementById('list');
    let divAlert = document.createElement('div');
    let label = document.createElement('label');
    label.innerHTML= 'Se elimino el elemento'+index;
    divAlert.classList.add('alert', 'alert-danger'); //clase de alerta 

    items[index].parentNode.removeChild(items[index]);
    divAlert.appendChild(label);
    showDiv.appendChild(divAlert);
    

    let identificadorTiempo;
    function temporizador (){
        identificadorTiempo = setTimeout(divAlert, 3000);
    }
    

});
