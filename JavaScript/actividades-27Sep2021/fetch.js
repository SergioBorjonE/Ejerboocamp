/* fetch permite hacer peticiones http desde javascript*/
/*Accedemos a un recurso*/
// JSON:= JavaScript Object Notation


// Ejemplo con fake api
const pet=fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    })

console.log(pet);


