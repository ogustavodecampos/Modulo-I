const value = parseFloat(prompt("Digite o valor, em metros, que deseja converter"))
const option = parseFloat(prompt("Escolha a medida que deseja em seu resultado\n1. Milímetro(mm)\n2. Centímetro(cm)\n3. Decímetro(dm)\n4. Decâmetro(dam)\n5. Hectômetro(hm)\n6. Quilômetro(km)"))

let result = 0

switch(option) {
    case 1: result = value * 1000
        alert(value + " metros em milímetros é igual a: " + result + "mm")
        break
    case 2: result = value * 100
        alert(value + " metros em centímetros é igual a: " + result + "cm")
        break
    case 3: result = value * 10
        alert(value + " metros em decímetros é igual a: " + result + "dm")
        break
    case 4: result = value / 10
        alert(value + " metros em decâmetros é igual a: " + result + "dam")
        break
    case 5: result = value / 100
        alert(value + " metros em hectômetros é igual a: " + result + "hm")
        break
    case 6: result = value / 1000
        alert(value + " metros em quilômetros é igual a: " + result + "km")
        break
    default: 
        alert("Opção inválida!")
        break
}

/*Escreva um programa em javascript que funcione como um conversos de medidas.
 O programa deverá pedir por um valor em metros e então dar a opção de escolher 
 para qual unidade de medida esse valor deve ser convertido. As opções são:

1. milímetro (mm)
2. centímetro (cm)
3. decímetro (dm)
4. decâmetro (dam)
5. hectômetro (hm)
6. quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e
 exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário
 insira uma opção diferente das disponíveis (use o break e o default para isso)*/