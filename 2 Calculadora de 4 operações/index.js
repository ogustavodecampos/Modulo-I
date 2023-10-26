let x = prompt("Primeiro valor")
let y = prompt("Segundo valor")

const firstValue = parseFloat(x)
const secondValue = parseFloat(y)

const addition = firstValue + secondValue
const subtraction = firstValue - secondValue
const multiplication = firstValue * secondValue
const division = firstValue / secondValue

alert(
    "Adição: " + addition +
    "\nSubtração: " + subtraction + 
    "\nMultiplicação: " + multiplication + 
    "\nDivisão: " + division
    )

/*Escreve um programa em javascript que permita inserir dois valores 
numéricos e então calcule o resultado das quatro operações 
básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela.*/