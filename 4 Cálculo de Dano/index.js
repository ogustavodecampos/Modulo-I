const atacante = prompt("Nome do personagem atacante")
const poderDeAtaque = parseFloat(prompt("Qual seu poder de ataque? Digite um valor numérico"))

const defensor = prompt("Nome personagem defensor")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida o personagem defensor possui? Digite um valor numérico"))
const poderDeDefesa = parseFloat(prompt("Qual o poder de defesa do personagem defensor? Digite um valor numérico"))
const possuiEscudo = prompt("O personagem possui escudo? (Sim/Não)")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)

/*Escreva um programa que permita inserir o nome e o poder de ataque 
de um personagem depois o nome, a quantidade de pontos de vida, o poder
de defesa de outro personagem e se ele possui um escudo, e então calcule
a quantidade de dano causado baseado nas seguintes regras:

1. Se o poder de ataque for maior do que a defesa e o defensor não possuir
um escudo o dano causado será igual a diferença entre o ataque e a defesa;

2. Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo
o dano causado será igual a metade da diferença entre o ataque e a defesa;

3. Se o poder de ataque for menor ou igual a defesa, o dano causado será 0;

Por fim, o programa deve subtrair a quantidade de dano da quantidade de
pontos de vida do personagem defensor e exibir na tela a quantidade de
dano e as informações atualizadas de ambos os personagens.*/