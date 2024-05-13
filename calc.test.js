const calc = require("./calc")
const suma = calc.suma
test("Añadir 2 y 3", () =>{
    expect(suma(2, 3)).toBe(5)
})

test("Restar 5 y 4", () =>{
    expect(calc.resta(5,4)).toBe(1)
})

test("Multiplicar 11 y 2", () =>{
    expect(calc.multiplicar(11, 2)).toBe(22)
})

test("Dividir 2 y 4", () =>{
    expect(calc.dividir(2, 4)).toBe(.5)
})

test("Dividir por 0", ()=>{
    expect(() => calc.dividir(2, 0)).toThrow(Error)
})