import { checkedDirection, selectSession, swapMenu } from "./navigation.js";

document.querySelectorAll("aside ul li").forEach(li => li.addEventListener('click', selectSession))

let simulandoScroll = false;

window.addEventListener('wheel', function (event) {
  // Verifica se o evento de rolagem simulado já está em execução
  if (simulandoScroll) {
    return;
  }

  // Verifica a direção do movimento da roda do mouse
  const delta = event.deltaY || event.detail || event.wheelDelta;
  const direcao = delta > 0 ? 'para baixo' : 'para cima';

  // Simula o evento de rolagem
  simulandoScroll = true;

  // Executa a ação desejada com base na direção da rolagem
  checkedDirection(direcao)

  // Reinicia o estado do evento de rolagem simulado após um intervalo de tempo
  setTimeout(function () {
    simulandoScroll = false;
  }, 500);
})

window.addEventListener("keydown", (ev) => {
  if (ev.key === 'ArrowDown') {
    checkedDirection('para baixo')
  } else {
    checkedDirection('para cima')
  }
})

document.querySelectorAll(".menu-mobile ul li").forEach(icon => icon.addEventListener("click", selectSession))

document.querySelector(".swapMenu-btn").addEventListener("click", swapMenu)