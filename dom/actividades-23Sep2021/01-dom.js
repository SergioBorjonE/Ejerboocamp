/*document es el objeto que controla todos los elementos del HTML*/
/*const title=document.getElementsByTagName("h1");
title[0].innerHTML="hola mundo";*/

/*const texto=document.getElementById("text");
texto.innerHTML="Este texto fue ingresado desde JavaScript";
texto.style.background="steelblue";
texto.style.justifyContent="center";
setTimeout(5000)*/

const texto=document.querySelector("#texto");
texto.textContent="Modificando ando "

/*En resumen*/
/*Obtiene todos los elementos cuyas eliquetas de HTML tienen ese nombre (p, section, div, etc) devuelve arreglos*/
document.getElementsByTagName()
/*obtiene elementos cuya clase tiene ese nombre*/
document.getElementsByClassName()
/*obtiene elementos cuyo nombre es ej:"name="enviar""*/
document.getElementsByName()
/*obtiene elemntos cuyo id tiene ese nombre*/
document.getElementById()
/*engloba todas las opciones anteriores*/
document.querySelector()
/*creacion de elementos html*/
const div=document.createElement("div"); //creamos el elemento HTML
const body=document.querySelector("Body"); /*llamamos al nodo padre donde queremos introducir ese elemento*/
body.append(div) //lo introducimos