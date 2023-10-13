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
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "peso invalido!!";
    paciente.classList.add("paciente-invalido");
  }
  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "altura invalida!!";
    paciente.classList.add("paciente-invalido");
  }
  if (alturaValida == true && pesoValido == true) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
