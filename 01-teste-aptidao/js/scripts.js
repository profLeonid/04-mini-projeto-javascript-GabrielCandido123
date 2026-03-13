const inputValorTeste = document.getElementById("valorTeste");
const botaoAvaliar = document.querySelector("button");
const divResultado = document.querySelector(".resultado");

botaoAvaliar.addEventListener("click", () => {
  // Permite uso de vírgula ou ponto
  const valor = inputValorTeste.value.replace(",", ".");
  const tempo = parseFloat(valor);

  // Validação de entrada vazia ou inválida
  if (isNaN(tempo) || valor.trim() === "") {
    divResultado.textContent = "Por favor, insira um tempo válido.";
    divResultado.style.backgroundColor = "transparent";
    divResultado.style.color = "inherit";
    return;
  }

  if (tempo < 14.0) {
    divResultado.textContent = "Apto";
    divResultado.style.backgroundColor = "#14532d"; // Fundo verde escuro
    divResultado.style.color = "white"; // Texto branco para contraste
  } else {
    divResultado.textContent = "Não Apto";
    divResultado.style.backgroundColor = "#7f1d1d"; // Fundo vermelho escuro
    divResultado.style.color = "white"; // Texto branco para contraste
  }
});
