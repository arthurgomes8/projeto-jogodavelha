let turno=document.getElementById("status")
let JogadorAtual="X"
let casa=document.querySelectorAll(".celula")

const combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

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

    //Checador de Vitoria antes de trocar de turno
    if (checarVitoria() === true) {
        window.alert(`O jogador ${JogadorAtual} VENCEU!`)
        turno.textContent = `O jogador ${JogadorAtual} VENCEU!`
        // impede que o jogo mude o turno para o próximo jogador
        return
    }

    //Alternar entre X e O para pintar as casas
    if (JogadorAtual=="X"){
        JogadorAtual="O"
    }
    else{
        JogadorAtual="X"
    }
    turno.textContent=`Vez do Jogador: ${JogadorAtual}`
}


function checarVitoria(){
    for(c=0;c<combinacoesVitoria.length;c++){
        let combinacaoAtual = combinacoesVitoria[c]
        if(casa[combinacaoAtual[0]].textContent !== "" &&
        casa[combinacaoAtual[0]].textContent === casa[combinacaoAtual[1]].textContent &&
        casa[combinacaoAtual[1]].textContent === casa[combinacaoAtual[2]].textContent
        ){
            return true //Alguem ganhou
        }
    }
    return false //Ninguem ganhou
}





function ReiniciarJogo(){
    //Da mesma maneira que usamos um forEach para colocar um eventlistener,agora usamos para limpar o texto de cada casinha
    casa.forEach(function(celula) {
        celula.textContent = ""
    });
    JogadorAtual="X"
    turno.textContent=`Vez do Jogador: ${JogadorAtual}`
}