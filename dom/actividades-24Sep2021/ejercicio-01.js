var edad=document.querySelector("#input");

const pasdat=()=>{
    const inputEdad=parseInt(edad.value);
    var msj=(inputEdad>=18)?"Eres mayor de edad":"Eres menor de edad";
    var b=document.querySelector("body");
    var p=document.createElement("p");
    var text=document.createTextNode(msj);
    p.appendChild(text)
    b.appendChild(p)
}