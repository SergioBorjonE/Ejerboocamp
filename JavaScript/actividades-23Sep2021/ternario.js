/*el operador ternario es un abreviacion de un if*/

/*un if normal*/
const edad=20;

if (edad>=18){
    console.log("Eres mayor de edad");
}
else{
    console.log("eres menor de edad");
}

/*con operador ternario*/

const mensaje= edad>=18 ? "Eres mayor de edad":"Eres menor de edad"
document.write(mensaje);