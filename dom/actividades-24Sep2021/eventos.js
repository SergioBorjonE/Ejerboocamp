const $btn=document.querySelector("#btn");
$btn.addEventListener("click", ()=>{
    console.log("obligame perro")
} )


const $inpText=document.querySelector("#text");
$inpText.addEventListener("keyup", (e)=>{
    console.log(e.target.value)
} )
