/* Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? */

let valorBicicleta = 300 / 0.6;
let valorVenda = valorBicicleta * 0.25;
let lucro = valorBicicleta + valorVenda;

console.log(
  `Para obter um lucro de 25% sobre a bicicleta o valor da venda deve ser: ${lucro} R$`
);
