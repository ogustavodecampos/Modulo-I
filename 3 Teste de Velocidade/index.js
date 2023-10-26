const car1 = prompt("Nome do primeiro veículo")
const speed1 = parseFloat(prompt("Velocidade do primeiro carro"))
const car2 = prompt("Nome do segundo veículo")
const speed2 = parseFloat(prompt("Velocidade do segundo carro"))

if (speed1 > speed2) {
    alert("O carro mais rápido é o " + car1 + ", com uma velocidade de: " + speed1 + "km/h")
} else if (speed1 < speed2) {
    alert("O carro mais rápido é o " + car2 + ", com uma velocidade de: " + speed2 + "km/h") 
} else {
    alert("Ambos os veículos " + car1 + " e " + car2 + " possuem a mesma velocidade, " + speed1)
}

/*Escreva um programa em javascript que permita inserir 
o nome e a velocidade de dois veículos e exiba na tela 
uma mensagem dizendo qual dos dois é mais rápido 
(ou que as velocidades são iguais se este for o caso)*/