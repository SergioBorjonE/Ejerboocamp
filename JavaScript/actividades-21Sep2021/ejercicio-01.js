/*calculadora de edad: el usuario debe colocar el año de nacimiento y debemos calcular su edad*/

const year=parseInt(prompt("¿En que año naciste?"));
const anac=2021;
var edad=anac-year;
const info=`Tu edad es ${edad} años`
document.write(info)


