/* Colocar una lista en el documento HTML,colocar un boton que diga agregar elemento. Cada vez que le den clic al boton debe agregar un elemento a la lista.*/

const texto=document.querySelector("#actividad");
const $btn=document.querySelector(".btn")

$btn.addEventListener("click", ()=>{
    var list=document.querySelector("ul");
    var item=document.createElement("li");
    item.innerHTML=`${texto.value}`
    list.appendChild(item);
})



