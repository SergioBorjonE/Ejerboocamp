/*pedir un numero al usuario decirle al usuario si es par o impar*/

var num=parseInt(prompt('hey dame un numero'))

if ((num%2)!==0) {
    document.write("impar")
}
else{
    document.write("par")
}