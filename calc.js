function suma(a, b) {
    return a+b
}

function resta(a, b) {
    return a-b
}

function multiplicar(a, b) {
    return a*b
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("El divisor no puede ser 0")
    }
    return a/b
}

const calculadora = {
    suma:suma,
    resta:resta,
    multiplicar:multiplicar,
    dividir:dividir,
}

module.exports = calculadora 