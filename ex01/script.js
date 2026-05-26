const Name =  [];

for (let i = 0; i < 7; i++) {
    Name[i] = prompt(`Digite o ${i + 1}° nome: `);
}

console.log("\nNomes na ordem inversa:");

for (let i = 7-1; i >= 0; i--) {
    console.log (Name[i]);
}