//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.
const calculeIMC = (peso, altura) => {
  let imc = peso / (altura * altura);
  console.log(parseFloat(imc.toFixed(2)));
};
calculeIMC(83, 1.83);

const imcIdeal = (imc) => {
  if (imc < 18.5) {
    console.log("magreza");
  }
  if (imc > 18.5 && imc < 24.9) {
    console.log("peso normal");
  }
  if (imc >= 25 && imc <= 29.9) {
    console.log("sobrepeso");
  }
  if (imc >= 30 && imc <= 39.9) {
    console.log("obesidade");
  }
  if (imc > 40) console.log("obesidade GRAVE");
};
imcIdeal(24.78);
