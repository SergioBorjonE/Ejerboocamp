const $btn=document.querySelector("#btn");
const $cats=document.querySelector("#cats");

$btn.addEventListener("click", ()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json())
        .then(data=>{
            console.log(data);
            const img=document.createElement("img");
            img.src=data[0].url;
            img.width="200";
            document.body.appendChild(img);
        })
        .catch(e=>{
            console.log(e);
        });
})