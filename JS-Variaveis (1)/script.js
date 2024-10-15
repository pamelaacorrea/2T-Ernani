/**
 * DECLARAÇÃO DE VARIAVEIS JAVASCRIPT:
 * identificador: nome da variável
  valor: valor inicial da variável,
  */
const nome = "Pamela";    // escopo global - mutável
const sobrenome = "Correa"; // escopo em bloco - mutável
const idade = 16;        // escopo em bloco - imitável
//REATRIBUINDO VALRES
// pet = "teddy";
// nome = "Pamela";
//PI = 32.5 vaiar erro (Porque é constante)
//CONCATENAR OU JUNTAR VALORES 
const dadosPessoais = nome + " " + sobrenome + " " + idade
const ano = 2024
const anoNascimento = 2007
const idadeAtual = ano - anoNascimento
// AVALIANDO EXPRESÕES
const num = 24
const ehPar = num % 2 == 0 // PAR
const ehImpar = num % 2 == 1 // IMPAR

// IF = SE - ELSE - SENÃOimparOu
if (ehPar) {
  console.log("O número é par")
}

console.log(ehPar)
console.log(ehImpar)







console.log(idadeAtual + " anos")














/** CRIE UMA VARIÁVEL PARA CADA SITUAÇÃO */
// passatempo;
// cidade;
// precoDolar;
// animalEstimacao;
// estaSolteiro = false ou true
// todosOsDados (concatear)

const passaTempo = "dormir"
const cidade = "Curitiba"
const precoDolar = "5,15"
const animalEstimacao = "cachorro"
const estaSolteiro = "true"
const todosOsDado = passaTempo + " " + cidade + " " + precoDolar + " " + animalEstimacao + " " + estaSolteiro
console.log(passaTempo + " " + cidade + " " + precoDolar + " " + animalEstimacao + " " + estaSolteiro)



