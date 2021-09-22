/*Switch case control de flujo similar a a un if, if else, else*/

/*const edad=parseInt(prompt("ingresa tu edad"));
let mensaje=""

switch (edad){
    case 18:
        mensaje="Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje="Ya eres un adulto";
        break;
    case 70:
        mensaje="Ya eres de la tercera edad";
        break;
    default:
        mensaje="ah perro eres inmortal";
        break;
}

document.write(`<p>${mensaje}</p>`)*/

 
/*Ejemplo 2*/

const nombre=prompt("¿cual es tu nombre?");
let mensaje="";

switch (nombre){
    case "carlos":
        mensaje="Eres administrador";
        break;
    case "juan":
        mensaje="Eres user";
        break;
    default:
        mensaje="Contacte a su administrador";
        break;
}

document.write(`<p>${mensaje}</p>`);