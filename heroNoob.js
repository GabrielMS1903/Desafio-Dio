//Obs: Projeto da Dio. É ressaltado que tomei liberdade para criar um resumido mundo para o nosso heroi do projeto, que aqui ele será reconhecido como um caçador. Espero que aceitem as mudanças, mas caso contrário, por gentileza me informem qualquer questão e estarei feliz em receber feedbacks e alteraçôes. Grato.


//Lvl
let whiteLvl = "Ferro "
let brownLvl = "Bronze. "
let grayLvl = "Prata. "
let yellowLvl = "Ouro. "
let emeraldLvl = "Platina. "
let orangeLvl = "Ascendente. "
let redLvl = "Imortal. "
let purpleLvl = "Radiante. "

//Xp
let xpW = "1.001 xp! "
let xpB = "1.001 a 2.000 xp! "
let xpG = "2.001 a 5.000 xp! "
let xpY = "6.001 a 7.000 xp! "
let xpE = "7.001 a 8.000 xp! "
let xpO = "8.001 a 9.000 xp! "
let xpR = " 9.001 a 10.000 xp! "
let xpP = "10.001 xp! " 

//mensagens
let you = "You catch "
let = are = "You´re in the level: "
// magic circle é um desafio nesse mundo ambiente que sempre quando voce enfrenta muitas lutas contra criaturas que o player deve caçar em  8 dias, voce celebra a um Deus, o Gudan. E ele te dá a sua liberdade que ele retirou quando te colocou nesse mundo." 
let end = "End of one more magic circle! It's time to celebrate for the Gudan."
let miles = "Hunter Miles@Dio it endered in the level: " 
let and = "And finally back to your home"
let dia = "Day "
let primeiro = 1
let segundo = 2
let terceiro = 3
let quarto = 4
let quinto = 5
let sexto = 6
let setimo = 7
let oitavo = 8

console.log (dia + primeiro)
if (whiteLvl > xpW) { console.log (you + xpW + are + whiteLvl)}
console.log (dia + segundo)
if (brownLvl > xpB) { console.log (you + xpB + are + brownLvl)}
console.log (dia + terceiro)
if (grayLvl > xpG) { console.log (you + xpG + are + grayLvl)}
console.log (dia + quarto)
if (yellowLvl > xpY) { console.log (you + xpY + are + yellowLvl)}
console.log (dia + quinto)
if (emeraldLvl > xpE) { console.log (you + xpE + are + emeraldLvl)}
console.log ( dia + sexto)
if (orangeLvl > xpO ) { console.log (you + xpO + are + orangeLvl)}
console.log (dia + setimo)
if (redLvl > xpR) { console.log (you + xpR + are + redLvl)}
console.log (dia + oitavo )
if (purpleLvl > xpP) { console.log (you + xpP + are + purpleLvl)}
console.log ( end)

// aqui o while repetirá 8 vezes a mensagem, pois no final dos 8 dias enfrentados voce ganha um fragmento da sua alma que foi retirado de voce pelo o Deus Gudan.
let i = 0

while( i < 8 ) {
console.log ("You won a soul fragment")
i++
}




console.log ( (miles + purpleLvl) + and )
