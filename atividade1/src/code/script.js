function inserir(num) {
  document.querySelector(".tela").innerHTML += num;
}

function apagar() {
  document.querySelector(".tela").innerHTML = "";
}

function apagaUm() {
  let tela = document.querySelector(".tela").innerHTML;
  document.querySelector(".tela").innerHTML = tela.substring(
    0,
    tela.length - 1
  );
}

function calcular() {
  let tela = document.querySelector(".tela").innerHTML;
  if (tela) {
    document.querySelector(".tela").innerHTML = eval(tela);
  } else {
    document.querySelector(".tela").innerHTML = "Sem comando...";
  }
}
