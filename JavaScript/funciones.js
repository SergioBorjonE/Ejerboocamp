/*function promedio(w,x,y,z){
    return (w+x+y+z)/4;
}
document.write(promedio(10,9,8,7));*/

/*function suma(num1,num2){
    var resultado=num1+num2;
    console.log(resultado)
}

suma(2,5);*/

/*function dinero(mon1, mon2, mon3){
    const listaDinero=[mon1, mon2, mon3];
    listaDinero.sort();
    return listaDinero[2];
}

document.write(dinero(890,760,540))*/


function dineritos(){
    let vec=[];
    r=prompt("Cuantas cantidades vas a agregar:");
    for (i=0;i<=r-1;i++){
        vec[i]=prompt("Ingresa la cantidad: "+(i+1));
    }
    vec.sort(function(a,b){return b-a});
    return document.write("La cantidad más grande es: "+vec[0]);
}

dineritos();