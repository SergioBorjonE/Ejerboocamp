//ejemplo pokemones
//@ts-check

class Pokemon{
    #name=" ";
    #type=" ";
    #evolutions=[];

    constructor(name, type, evolutions){
        this.#name=name;
        this.#type=type;
        this.#evolutions=evolutions;
    }

    set name(name){
        this.#name=name;
    }

    set type(type){
        this.#type=type;
    }

    set evolutions(evolutions){
        this.#evolutions=evolutions;
    }

    get name(){
        return this.#name;
    }

    get type(){
        return this.#type;
    }

    get evolutions(){
        return this.#evolutions;
    }

    attack() {
        return `${this.name}, esta atacando`;
    }

    envolve(evolution=0){
        //validar que la evolucion exista si existe se ejecuta la primera parte en caso contrario lo que sigue a || que en este caso es vacio
        const ENVOLVE=this.evolutions[evolution] || " ";
        let message="no puedo evolucionar"

        if (ENVOLVE){
            message=`${this.name} esta evolucionando a ${ENVOLVE}`
            this.name=ENVOLVE
        }
        return message
    }
}


class TypeFire extends Pokemon {
    constructor(name, evolutions){
        super(name, "fire", evolutions);
    }
     
    message(){
        return `Hola soy ${this.name} y soy de tipo fuego`
    }
}

const charmander= new TypeFire("charmander",["charmeleon","charizar"])

console.log(charmander.message())

charmander.name="CHARMANDER"

console.log(charmander.message())


const Charmander=new Pokemon("Charmander", "fire",["Charmeleon", "Charizar"]);

const  Squirtle= new Pokemon("Squirtle", "water", ["Wartortle","Blastoise"]);



console.log(Squirtle.attack())
console.log(Squirtle.envolve(1))
console.log(Squirtle.attack())






//Ejemplo 2.0 carros

/*class Carro{

    marca=" ";
    motor=" ";
    potencia=" ";
    modelo=" ";
    maxvel=" ";

    constructor(marca, motor, potencia, modelo, maxvel){
        this.marca=marca;
        this.motor=motor;
        this.potencia=potencia;
        this.modelo=modelo;
        this.maxvel=maxvel;
    }

    info() {
        return `El auto es de la marca ${this.marca}, tiene un motor ${this.motor} con una increible potencia de ${this.potencia}HP es del año ${this.modelo} y alcanza una velocidad maxima de ${this.maxvel}km/h`
    }
}

var carro1=new Carro("mercedes", "electrico",250, 2020, 350)
document.write(carro1.info())*/