
let tabuleiro
let board
let aviso
let jogador = 1
let linha = 1
let coluna = 1

function iniciar(){
    linha = 1
    coluna = 1
    tabuleiro = [];
    board = document.getElementById("board")
    aviso = document.getElementById("aviso")
    
        
        for (let i = 0; i < 3; i++){
            tabuleiro[i] = []
            for (let j = 0; j<3; j++){
                tabuleiro[i][j] = "";
            }
        }
    
    console.table(tabuleiro)
    exibir()

}
function exibir(){
    let tabela = '<table cellpadding="10" cellspacing="05" border="1">'

    for (let i = 0; i < 3; i++){
        tabela += '<tr>'
        for (let j = 0; j<3; j++){
            tabela += '<td>' + tabuleiro[i][j] + '</td>'
        }
        tabela += '</tr>'
    }
    tabela += '</table>'
  
    board.innerHTML = tabela
    
}
function jogar(){
   

    linha = document.getElementById("linha").value -1
    coluna = document.getElementById("coluna").value -1
    
    if (tabuleiro[linha][coluna] == ""){
        tabuleiro[linha][coluna] = jogador%2 +1 == 1 ? "X" : "O"
    console.table(tabuleiro)
  //  board.innerHTML = tabela
    
    console.log("Jogador: " + jogador)
    if (jogador == 1){
        jogador = 2
} else{
    jogador = 1
}
aviso.innerHTML = "Vez do jogador " + jogador
    exibir();
    checar();
   
// Limpar os campos de entrada após a jogada
document.getElementById("linha").value = "";
document.getElementById("coluna").value = "";
} else{
        alert("Posição já ocupada ou inválida")
    }
}

function checar() {
    // Função para verificar se três valores são iguais e não vazios
    function verificaTresIguais(a, b, c) {
        return a === b && b === c && a !== "";
    }

    // Verificar linhas e colunas
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            // Verificar horizontal
            if (j < tabuleiro[i].length - 2 && verificaTresIguais(tabuleiro[i][j], tabuleiro[i][j + 1], tabuleiro[i][j + 2])) {
                alert("Jogador " + jogador + " venceu");
                iniciar();
                return;
            }

            // Verificar vertical
            if (i < tabuleiro.length - 2 && verificaTresIguais(tabuleiro[i][j], tabuleiro[i + 1][j], tabuleiro[i + 2][j])) {
                alert("Jogador " + jogador + " venceu");
                iniciar();
                return;
            }

            // Verificar diagonal (cima esquerda para baixo direita)
            if (i < tabuleiro.length - 2 && j < tabuleiro[i].length - 2 && verificaTresIguais(tabuleiro[i][j], tabuleiro[i + 1][j + 1], tabuleiro[i + 2][j + 2])) {
                alert("Jogador " + jogador + " venceu");
                iniciar();
                return;
            }

            // Verificar diagonal (cima direita para baixo esquerda)
            if (i < tabuleiro.length - 2 && j > 1 && verificaTresIguais(tabuleiro[i][j], tabuleiro[i + 1][j - 1], tabuleiro[i + 2][j - 2])) {
                alert("Jogador " + jogador + " venceu");
                return;
            }
        }
    }
}

