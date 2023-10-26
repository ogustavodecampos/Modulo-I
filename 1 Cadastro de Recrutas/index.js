let firstName = prompt("Nome")
let lastName = prompt("Sobrenome")
let fieldOfStudy = prompt("Campo de estudo")
let birthYear = prompt("Ano de nascimento")

alert(
    "Recruta: " + firstName + " " + lastName + 
    "\nCampo de estudo: " + fieldOfStudy + 
    "\nIdade: " + (2023 - birthYear)
    )

/*Escreva um programa em javascript que permita salvar informações de um recruta. 
As informações a serem salvas são:
1. o primeiro nome
2. o sobrenome
3. o campo de estudo
4. o ano de nascimento
Depois o programa deve exibir o nome completo do recruta
seu campo de estudo e sua idade (apenas baseada no ano de nascimento).*/