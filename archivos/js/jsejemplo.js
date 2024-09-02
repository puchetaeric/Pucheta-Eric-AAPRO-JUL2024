//alert("hola soy el java")

//pablito recomienda que siempre se pone el ";" manuel prefiere que no.\\ 

//declaracion / asiganacion de una variable
let edad = 23.2 //numero, con decimal . en vez de ,

var nombre = "mondongo" //texto

let esMayor = true //verdadero o falso

const unaConstante = 10 //no va a variar, sera 10 por mas que intentemos cambiarla

let listaDeCosas = ["cepillo",27,true] //array{listado de cosas} 2 posiciones(total-1), 3 elementos(total)

let ropero = {//object objeto, la repesentacion en base a porpiedades de un objeto literal
    tamanioX: 3,
    tamanioY: 2,
    color: "marron",
    capacidadPrendas: 5,
    prendas: ["prenda1", "prenda2", "prenda3", "prenda4", "prenda5"],
    prendasColores: {
        prenda1: "verde",
        prenda2: "azul",
        prenda3: "amarillo",
        prenda4: "rojo",
        prenda5: "celeste",
    }
}

console.log(listaDeCosas[0])


////////////////////////////////////////////////////////////////////////////////////////////


let participantes = 20
let participantesOrganizacion = 2

let totalParticipantes= participantes + participantesOrganizacion

console.log(totalParticipantes)
/////////////////////////////////////////////////
let numero1=5
let numero2=10

function suma(numA,numB){ 
    let resultado = numA + numB//numA y numB es no saber que valor es pero se va a trabajar con dos numeros
    console.log("resultado" + resultado)
}

console.log("antes de la funcion")
suma(numero1,numero2)
console.log("despues de la funcion")