function calcularDesconto() {
  const inputs = document.querySelectorAll("input");
  const preco = Number(inputs[0].value);
  const desconto = Number(inputs[1].value);
  const resultado = document.querySelector(".resultado");

  const economia = preco * (desconto / 100);
  const precoFinal = preco - economia;

  resultado.innerHTML = `Economia: R$ ${economia.toFixed(2)} <br> Preço Final: R$ ${precoFinal.toFixed(2)}`;
  resultado.style.color = "white";

  if (desconto <= 5) {
    resultado.style.backgroundColor = "#14532d"; // Verde
  } else if (desconto <= 10) {
    resultado.style.backgroundColor = "#713f12"; // Marrom/Laranja
  } else {
    resultado.style.backgroundColor = "#7f1d1d"; // Vermelho
  }
}
