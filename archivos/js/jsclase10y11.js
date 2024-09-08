//"Realizar una funcion que, dado 4 numeros, me diga cual es el mayor." forma sin prompts FUNCIONA

function cualEsElMayor(a, b, c, d) {
    let alMayorNumero = a

    if (b > alMayorNumero) {
        alMayorNumero= b
    }
    if (c > alMayorNumero) {
        alMayorNumero= c
    }
    if (d > alMayorNumero) {
        alMayorNumero= d
    }
    return alMayorNumero
}

let mayorNumero = cualEsElMayor(1,2,3,4)

console.log("*Primer punto* El mayor numero seria " + mayorNumero + "!!")



//"Realizar una funcion que, dado 3 numeros, me diga cual es el menor." sin prompts FUNCIONA

function cualEsElMenor(a, b, c) {
    let elSupuestoMenorNumero = a

    if (b < elSupuestoMenorNumero) {
        elSupuestoMenorNumero = b
    }
    if (c < elSupuestoMenorNumero) {
        elSupuestoMenorNumero = c
    }
    return elSupuestoMenorNumero
}

let menorNumero = cualEsElMenor(1,2,3)

console.log ("*Segundo punto* El menor numero seria " + menorNumero)



//"Realizar una funcion que me diga si un numero es par o impar."

function funcionParOImpar(a) {
    if (a % 2 === 0) {
        return "es par"
    } else {
        return "es impar"
    }
}
let resultado = funcionParOImpar(101)
console.log("*Tercer punto* El numero ingresado " + resultado)

//enseñenme como poner en el console log los numeros ingresados, es decir, quiero que el console.log diga
//"entre los numeros 1, 2 y 3, el menor seria 1" en el ejemplo de la act2
//
