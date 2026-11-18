// 1. SELECIONAR os elementos
const total = document.querySelector("#total");
const botaoSomar = document.querySelector("#somar");
const botaoZerar = document.querySelector("#zerar");

// Estado do contador
let contagem = 0;

// Ao carregar, mostra 0
total.textContent = contagem;

// 2. OUVIR o clique e 3. ALTERAR a tela
botaoSomar.addEventListener("click", () => {
  contagem = contagem + 1;
  total.textContent = contagem;
});

botaoZerar.addEventListener("click", () => {
  contagem = 0;
  total.textContent = contagem;
});
