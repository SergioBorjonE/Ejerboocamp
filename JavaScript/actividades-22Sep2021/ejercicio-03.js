/*Mostrar todos los numero divisores de un número introducido.*/

var num=parseInt(prompt("Dame un numero"));
document.write("los divisores enteros de este numero son:");
var i=1;

while (i<=num){
    if ((num%i)==0){
        document.write(" "+i+",");
    }
    i++;
}

/*for (i;i<=num;i++){
    if ((num%i)==0){
        document.write(" "+i+",");
    }
}*/
