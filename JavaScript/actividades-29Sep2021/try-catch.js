/*//@ts-check*/   /*esta cosa detecta errores de lógica*/

/*Try permite intentar ejecutar bloques de codigo que tienen la posibilidad de tener un error */

//en caso de que efectivamente ocurra un error el script puede seguir ejecutandose pues el catch evita que se interumpa 

const gravedad=9.8;
console.log(gravedad);

try{
    gravedad=10;
    console.log(gravedad);
}
catch(e){
    console.log(e);
}
finally{
console.log(gravedad);
}