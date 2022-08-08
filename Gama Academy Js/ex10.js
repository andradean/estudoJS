//Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.

const temAula = (dia) => {
  if (dia === "segunda" || dia === "quinta" || dia === "sabado") {
    console.log("Hoje tem aula, por favor não perca");
  } else {
    console.log("hoje não tem aula aovivo, pratique");
  }
};

temAula("quinta");
