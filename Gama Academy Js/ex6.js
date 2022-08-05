//Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?
let valorNotebook = 3000;
let valorDesconto = valorNotebook * 0.25;
let valorVenda = valorNotebook - valorDesconto;

console.log(`O valor da sua venda com desconto será ${valorVenda}`);
