/*Funciones de flecha introducidas en  ECMAScript 6  */
/*con normalidad una funcion de declara*/

function suma(num1,num2){
    return num1+num2;
}

/*la funcion flecha*/

const suma1=(num1,num2) => {
    return num1+num2
}

document.write(suma1(5,3))