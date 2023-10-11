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
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var gordura = form.gordura.value;
  var altura = form.altura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  gorduraTd.textContent = gordura;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(alturaTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
});
