let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    nomes[i] = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
    idades[i] = parseInt(prompt(`Digite a idade de ${nomes[i]}: `));
}

console.log("\nPessoas menores de idade:");

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]} | Idade: ${idades[i]}`);
    }
}