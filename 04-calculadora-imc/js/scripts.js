function calcularIMC() {
  const inputs = document.querySelectorAll("input");
  const nome = inputs[0].value;
  const altura = Number(inputs[1].value);
  const peso = Number(inputs[2].value);
  const resultado = document.querySelector(".resultado");

  if (!nome || !altura || !peso) return; // simple guard for empty values

  const imc = peso / (altura * altura);
  let classificacao = "";
  let cor = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    cor = "#1e3a5f";
  } else if (imc < 25.0) {
    classificacao = "Peso normal";
    cor = "#14532d";
  } else if (imc < 30.0) {
    classificacao = "Sobrepeso";
    cor = "#713f12";
  } else if (imc < 35.0) {
    classificacao = "Obesidade grau I";
    cor = "#7f1d1d";
  } else if (imc < 40.0) {
    classificacao = "Obesidade grau II";
    cor = "#6b0f0f";
  } else {
    classificacao = "Obesidade grau III";
    cor = "#450a0a";
  }

  resultado.innerHTML = `${nome}, seu IMC é: ${imc.toFixed(1)} <br> Classificação: ${classificacao}`;
  resultado.style.backgroundColor = cor;
  resultado.style.color = "white";
}
