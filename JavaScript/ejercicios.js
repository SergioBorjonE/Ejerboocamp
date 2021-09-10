/*var nomb=prompt("¿Cuál es tu nombre?:");
document.write("Hola " +nomb+" saludos desde JavaScript");*/


var cant1=parseFloat(prompt("Ingrese la primer cantidad:"));
var cant2=parseFloat(prompt("Ingresa la segunda cantidad:"));

function basoper(cant1,cant2){
    let suma=cant1+cant2;
    let resta=cant1-cant2;
    let producto=cant1*cant2;
    if (cant2!==0){
        var div=cant1/cant2;
    }
    else{
        var div="Error";
    }    
    document.write("La suma de estas cantidades es: " +suma+ "<br>"); 
    document.write("La resta de estas cantidades es: " +resta+ "<br>");
    document.write("El producto de estas cantidades es: " +producto+ "<br>");
    if (div!=="Error"){
        document.write("El cociente de estas cantidades es: " +div+ "<br>");
    }
    else{
        document.write("Error, división entre cero");
    }
}

basoper(cant1,cant2);