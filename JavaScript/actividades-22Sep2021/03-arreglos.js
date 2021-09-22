/*operaciones con arreglos**/
/*forEach*/
let lenguajes=["JavaScript", "Java", "PHP", "Python", "C#","C++",   "C","Scala", "Rust", "Ruby", "Cobol","ObjectiveC","Julia","Fortran","R"];
document.write("<ul>")
lenguajes.forEach(function(lenguaje , index ){
    document.write(`<li>${index}-${lenguaje}</li>`)   
});
document.write("</ul>")


/*map crea un nuevo arreglo despues de procesarlo*/
let numeros=Array(2,3,4,27,19,12);
let numeros2=numeros.map(function(numero){
    return numero*2;
})

document.write(numeros+"<br/>");
document.write(numeros2);


/*Includes nos dice si un valor dado pertenece al arreglo o no*/
document.write("<br/>");
document.write(lenguajes.includes("Cobol")+"<br/>");
document.write(lenguajes.includes("swift"));


/*Filter crea nuevo arreglo con los elemento que cumplen una cierta condición*/
document.write("<br/>")
let filtrados=numeros.filter(function(numero){
    if(numero>10){
        return numero;
    }
})
document.write(filtrados);