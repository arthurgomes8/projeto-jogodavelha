let turno=document.getElementById("status")
let JogadorAtual="X"
let casa=document.querySelectorAll(".celula")

let botao_reiniciar=document.getElementById("btn-reiniciar")
botao_reiniciar.addEventListener("click",ReiniciarJogo)

//A variavel casa retorna uma NodeList,para adicionarmos um event listener em NodeList devemos usar o forEach()

casa.forEach(function(celula) {
    celula.addEventListener("click", marcarCasa)
});

//Agora usamos a função marcarCasa que vai receber um relatorio de qual casinha foi clicada (event)

function marcarCasa(event) {
    let casinhaClicada = event.target

    //Verificação de Erro,se a casa ja estiver pintada,ele ja sai da função na hora
     if (casinhaClicada.textContent !== "") {
        return
    }

    casinhaClicada.textContent = JogadorAtual

    //Alternar entre X e O para pintar as casas
    if (JogadorAtual=="X"){
        JogadorAtual="O"
    }
    else{
        JogadorAtual="X"
    }
    turno.textContent=`Vez do Jogador: ${JogadorAtual}`
}

function ReiniciarJogo(){
    casa.forEach(function(celula) {
        celula.textContent = ""
    });

    JogadorAtual="X"

    turno.textContent=`Vez do Jogador: ${JogadorAtual}`
}