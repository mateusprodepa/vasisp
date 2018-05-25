const entrada = document.querySelector("input");
const logs = document.querySelector("#logs");

window.addEventListener("keydown", function(e) {
  if(e.keyCode !== 13 || entrada.value === "") return;
  logs.innerHTML += `<span class='log-text'>user@user ~ ${entrada.value}</span> <br>`;
  handleInput(entrada.value);
  entrada.value = null;
})

function handleInput(text) {
  switch(text.toLowerCase()) {
    case "iniciar":
      logs.innerHTML += `<span class='log-text'>admin@root ~ Iniciando bateria de testes.</span> <br>`;
      break;
    case "limpar":
      logs.innerHTML = null;
      break;
    default:
      logs.innerHTML += `<span class='log-text'>admin@aviso ~ Insira um comando válido por favor.</span> <br>`;
  }
}

function scroll(elem) {
  elem.scrollTop = elem.scrollHeight + elem.clientHeight;
}

logs.addEventListener("DOMSubtreeModified", () => scroll(logs));
