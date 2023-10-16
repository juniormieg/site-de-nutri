var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoForm(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeError(erros);

    return;
  }
  if (!validaPaciente(paciente)) {
    alert("!!!!!!!!!!!!!!!!!!!!");
    return;
  }
  adicionaPacienteNaTabela(paciente);
  form.reset();
  var mensagensDeErro = document.querySelector("#mensagems-erro");
  mensagensDeErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeError(erros) {
  var ul = document.querySelector("#mensagems-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    altura: form.altura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if (!validaPeso(paciente.peso)) {
    erros.push("peso é invalido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("altura é invalido");
  }
  if (paciente.nome.length == 0) {
    erros.push("o nome não pode ser em branco");
  }
  if (paciente.gordura.length == 0) {
    erros.push("a gordura não pode ser em branco");
  }
  if (paciente.peso.length == 0) {
    erros.push("peso não pode ser em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("altura não pode ser em branco");
  }

  return erros;
}
