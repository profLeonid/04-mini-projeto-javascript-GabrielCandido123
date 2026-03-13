function calcularMedia() {
  const inputs = document.querySelectorAll("input");
  const n1 = Number(inputs[0].value);
  const n2 = Number(inputs[1].value);
  const n3 = Number(inputs[2].value);
  const resultado = document.querySelector(".resultado");

  const media = (n1 + n2 + n3) / 3;

  resultado.style.color = "white";

  if (media >= 7) {
    resultado.innerHTML = `Média: ${media.toFixed(1)} <br> Situação: Aprovado`;
    resultado.style.backgroundColor = "#14532d";
  } else if (media >= 5) {
    resultado.innerHTML = `Média: ${media.toFixed(1)} <br> Situação: Recuperação`;
    resultado.style.backgroundColor = "#713f12";
  } else {
    resultado.innerHTML = `Média: ${media.toFixed(1)} <br> Situação: Reprovado`;
    resultado.style.backgroundColor = "#7f1d1d";
  }
}
