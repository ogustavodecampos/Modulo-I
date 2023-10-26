const nameTurista = prompt("Qual seu nome?")
let cities = " "
let counter = 0

let option = prompt("Você visitou alguma cidade? (Sim/Não)")

while(option === "Sim") {
    let city = prompt("Qual o nome da cidade?")
    cities += " - " + city + "\n"
    counter++
    option = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + nameTurista +
    "\nQuantidade de cidades visitadas: " + counter +
    "\nCidades visitadas:\n" + cities
  )

/*Escreva um programa em javascript que peça o nome de um turista 
e então pergunte se ele já visitou alguma cidade. Caso a resposta 
seja sim, pergunte o nome da cidade e o armazene em uma variável
e então continue perguntando se o turista visitou alguma outra cidade 
até que a resposta seja não. No fim, o programa deve exibir o nome do
turista, quantas e quais cidades ele visitou.*/