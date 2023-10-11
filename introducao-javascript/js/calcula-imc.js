var title = document.querySelector(".title");
title.textContent = "aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");
  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    pesoValido = false;
    tdImc.textContent = "peso invalido!!";
    paciente.classList.add("paciente-invalido");
  }
  if (altura <= 0 || altura >= 100) {
    alturaValida = false;
    tdImc.textContent = "altura invalida!!";
    paciente.classList.add("paciente-invalido");
  }
  if (alturaValida == true && pesoValido == true) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
