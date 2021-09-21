/*pedir al usuario 2 numeros y mostrar todos los numeros impares que hay entre esos dos numeros*/

var pet1=parseInt(prompt("dame un numero"));
var pet2=parseInt(prompt("dame otro numero"));

/*basicamente se hace lo mismo despues de la comprobacion de paridad 
entonces la haces funcion y ahorramos algunas lineas*/
function contador(num1,num2){
    document.write(num1+"<br/>");
    while (num1<num2){
        num1+=2;
        if (num1<=num2){
            document.write(num1+"<br/>");
        } 
    }
}
/*la manera en que yo lo programe es muy sencible a que el numero menor sea el primero
en tomarse en cuenta, entonces debemos asegurarnos que asi sera esto se lograra via 
este condicional en el caso de que el primer numero sea mas pequeño que el segundo
 renombramos "normal" y en caso contrario los nombramos cruzados */
if (pet1<=pet2){
    var num1=pet1;
    var num2=pet2;
}
else{
    var num1=pet2;
    var num2=pet1;
}

if (num1%2==0){
    num1+=1;
    contador(num1,num2);
}
else{
    contador(num1,num2);
}