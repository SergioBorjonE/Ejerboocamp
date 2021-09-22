/*Solicitar numeros al usuario hasta que el usuario introduzca un negativo mostrar suma de los numeros y promedio*/

let [suma, contador]=[0,0];
document.write("Los numeros ingresados son:");

do{
    var num=parseInt(prompt("Dame un numero"));
    if (num>=0){
        suma+=num;
        contador++;
        document.write(num+" ,");
    }
}
while(num>=0);

document.write(`<p>La suma de estas cantidades es: ${suma}</p>`);
document.write(`<p>El promedio de esas cantidades es: ${suma/contador}</p>`)