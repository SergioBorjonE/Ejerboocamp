/*Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.*/

var n1=parseInt(prompt("Ingresa un numero:"));
var n2=parseInt(prompt("Ingresa otro numero:"))

if (n1>n2){
    document.write(`La suma de los dos numeros es: ${n1+n2}`+"<br/>");
    document.write(`La resta de los dos numeros es: ${n1-n2}`+"<br/>");
}
else if ((n1<n2) && (n2!=0)){
    document.write(`El producto de los dos numeros es: ${n1*n2}`+"<br/>");
    document.write(`El cociente de los dos numeros es: ${n1/n2}`+"<br/>");
}
else{
    document.write(`El producto de los dos numeros es: ${n1*n2}`+"<br/>");
    document.write("Esta operación no se puede efectuar");
}