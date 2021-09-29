const $btn = document.querySelector("#btn");
const $dogpic = document.querySelector("#dogpic");

$btn.addEventListener("click", () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var img = document.createElement("img");
            img.src = data.message;
            img.width = "200";
            $dogpic.appendChild(img);
        })
        .catch(e => {
            console.log(e);
        });
});