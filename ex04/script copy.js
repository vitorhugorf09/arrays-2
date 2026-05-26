let vetor1 = [];
let vetor2 = [];
let intersecao = [];
let existe;

console.log("Digite os valores do Vetor 1:");

for (let i = 0; i < 5; i++) {
    vetor1[i] = parseInt(prompt(`Valor ${i + 1}: `));
}

console.log("\nDigite os valores do Vetor 2:");

for (let i = 0; i < 5; i++) {
    vetor2[i] = parseInt(prompt(`Valor ${i + 1}: `));
}

// Verifica elementos em comum
for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 5; j++) {

        if (vetor1[i] == vetor2[j]) {

            existe = false;

            // Evita repetição
            for (let k = 0; k < intersecao.length; k++) {
                if (intersecao[k] == vetor1[i]) {
                    existe = true;
                }
            }

            if (existe == false) {
                intersecao[intersecao.length] = vetor1[i];
            }
        }
    }
}

console.log("\nElementos em comum:");

for (let i = 0; i < intersecao.length; i++) {
    console.log(intersecao[i]);
}