const $contenedor = document.querySelector("#info");

function agregador() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(i => {
                let card = document.createElement("div")
                card.className="col-xs-12 col-sm-4 col-md-3 "
                card.innerHTML=
                    `<div class="card">
                        <img src="${i.url}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${i.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`;
                $contenedor.appendChild(card);
            });
        })
        .catch(e=>{
            console.log(e);
        });
};
agregador();



/*const url='https://jsonplaceholder.typicode.com/albums/1/photos';
const $info = document.querySelector('#info');

fetch(url).then(response => response.json()).then(datos =>{
        //La información viene en un arreglo de 50 elementos
        for(var i=0;i<datos.length;i++){
            let nuevoElemento=document.createElement('div');
            nuevoElemento.className='col-3';
            let mensaje=
            `<div class="card" style="width: 100%;">
                <img src="${datos[i].url}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${datos[i].title}</h5>
                </div>
             </div>`;
            nuevoElemento.innerHTML=mensaje;
            $info.appendChild(nuevoElemento);
        } 
}).catch(err => console.log(err));*/