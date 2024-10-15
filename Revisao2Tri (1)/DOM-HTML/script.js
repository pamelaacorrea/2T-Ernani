
alert("Arquivo Javascript anexado pelo Index HTML")
// OBJETIVO 
/**
 * Criar variaveis e usá-las para modificar a DOM
 */
const titulo = document.getElementById("titulo");
const paragrafo = document.getElementById("paragrafo")

// MINHAS VARIÁVEIS
const novoTitulo = "Título Modificado";
const novoParagrafo = "Parágrafo Modificado";

titulo.innerText = novoTitulo
paragrafo.innerText = novoParagrafo

// ARRAYS OU LISTA 
// ARRAYS SÃO ORGANIZADOS POR ÍNDICES (A PARTIR DO 0)
// (), [], {}
const roupa = 'Camiseta'
const roupas = ['Camiseta', 'Calça', 'Vestido', 'Blusa']
//INDICES      0         1        2        3
const preços = [50, 100, 150, 200]
const idades = [1, 25, 65, 28]
const misto = ['Manga', 33, 'Camaro', 'Brawl', false]

for (var i = 0; i <= 3; i++) {
  //lógica
  console.log(roupas[i])
}
for (var j = 0; j < 3; j++) {
  console.log(preços[j])
  //lógica imprimindo os preços
}




// ACESSAR UM ELEMENTO DO ARRAY
// console.log(roupa)
// console.log(roupas)
// console.log(roupas[3])
// roupas[20] = "Brownie"
// console.log(roupas[20])

