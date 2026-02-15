// Função que calcula o saldo e define o nível
function calcularRankeadas(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    if (vitorias <= 10) {
        nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return saldoVitorias + " está no nível de " + nivel
}

// Simulando vários jogadores usando laço de repetição
let jogadores = [
    { vitorias: 5, derrotas: 3 },
    { vitorias: 25, derrotas: 10 },
    { vitorias: 90, derrotas: 20 },
    { vitorias: 120, derrotas: 30 }
]

for (let i = 0; i < jogadores.length; i++) {

    let resultado = calcularRankeadas(jogadores[i].vitorias, jogadores[i].derrotas)

    console.log("O Herói tem de saldo de " + resultado)

}