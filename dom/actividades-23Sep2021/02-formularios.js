const nameTitle=document.querySelector("#name");
const input=document.querySelector("#input");

var writename=()=>{
    const inputValue=input.value;
    nameTitle.textContent=inputValue;
}