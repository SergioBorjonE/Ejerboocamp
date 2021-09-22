/*repite condiciones mientras una concidion es verdadera

var i=parseInt(prompt("ingresa un numero"));

while (isNaN(i)){
    var i=parseInt(prompt("ingresa un numero"));
}*/

var num=parseInt(prompt("adivina el numero:"))
var intentos=1

do{
    var num=parseInt(prompt("adivina el numero:"));
    document.write(intentos)
    intentos++;
}
while (num!==23 && intentos<3);