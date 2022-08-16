// Criar lista de peças

const listaDePecas = ['Lanterna', 'Ro', "Parabrisa"]
console.log("----------------")
console.log("Início do processamento")
console.log("----------------")

for (let index = 0; index < listaDePecas.length; index++) {
    const noMepeCa = listaDePecas[index];
        if (noMepeCa.length < 3) {console.log("Erro no nome da peça")}
        else {console.log("Nome da peça ok")}
        
}

console.log("----------------")

let pesoPeca = 99
if (pesoPeca > 100) {console.log("Peso ok, pode cadastrar a peça")}
else {console.log("Peça recusada")}

console.log("----------------")

let qtdPeca = 11
if (qtdPeca > 10) {console.log("Ultrapassou limite da caixa")}
else {console.log("Caixa ok")}

console.log("----------------")

console.log("Fim do processamento")

console.log("----------------")
