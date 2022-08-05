let pets = [
  {
    nome: "lua",
    tipo: "gato",
    raca: "srd",
    idade: 1,
    genero: "m",
    vacinado: true,
    servicos: ["banho"],
  },
  {
    nome: "telles",
    tipo: "gato",
    raca: "persa",
    idade: 4,
    genero: "f",
    vacinado: true,
    servicos: ["banho", "tosa"],
  },
  {
    nome: "fernando",
    tipo: "cachorro",
    raca: "poodle",
    idade: 7,
    genero: "f",
    vacinado: false,
    servicos: ["banho", "vacina"],
  },
  {
    nome: "neguin",
    tipo: "cachorro",
    raca: "srd",
    idade: 4,
    genero: "m",
    vacinado: true,
    servicos: ["banho", "tosa"],
  },
];

const listarpets = () => {
  for (let i = 0; i < pets.length; i++) {
    console.log(`
    Nome: ${pets[i].nome}
    Tipo: ${pets[i].tipo}
    Raça: ${pets[i].raca}
    Idade: ${pets[i].idade} 
    genero: ${pets[i].genero == "f" ? "femea" : "macho"}
    vacinado: ${pets[i].vacinado ? "sim" : "não"}
 
  
  
  
  `);
  }
};

listarpets();
