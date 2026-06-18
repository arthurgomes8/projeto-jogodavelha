let turno=document.getElementById("status")
let JogadorAtual="X"
let casa=document.querySelectorAll(".celula")

//A variavel casa retorna uma NodeList,para adicionarmos um event listener em NodeList devemos usar o forEach()

casa.forEach(function(celula) {
    celula.addEventListener("click", marcarCasa);
});

//Agora usamos a função marcarCasa que vai receber um relatorio de qual casinha foi clicada (event)

function marcarCasa(event) {
    let casinhaClicada = event.target;
    casinhaClicada.textContent = JogadorAtual;
}