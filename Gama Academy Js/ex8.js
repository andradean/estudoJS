//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function semaforo(cor) {
  if (cor === "verde") console.log("Pode passar");
  else if (cor === "amarelo") {
    console.log("Pode passa, mas com muito atenção");
  } else if (cor === "vermelho") {
    console.log("NÃO PODE PASSAR!!!");
  } else {
    console.log("sinal quebrado, atenção dobrada");
  }
}

semaforo("verde");
