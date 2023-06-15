import { closeCourses, openCourses } from "./about.js";
import { animationText } from "./home.js";
import { checkedDirection, selectSession, swapMenu } from "./navigation.js";
const modalCertificates = document.querySelector("#certificates")


document.querySelectorAll("aside ul li").forEach(li => li.addEventListener('click', selectSession))

let simulandoScroll = false;

window.addEventListener('wheel', function (event) {
  if (!modalCertificates.classList === 'modal-actives') {

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
  }
})

window.addEventListener("keydown", (ev) => {
  if (!modalCertificates.classList === 'modal-actives') {
    if (ev.key === 'ArrowDown') {
      checkedDirection('para baixo')
    } else {
      checkedDirection('para cima')
    }
  }
})

document.querySelectorAll(".menu-mobile ul li").forEach(icon => icon.addEventListener("click", selectSession))

document.querySelector(".swapMenu-btn").addEventListener("click", swapMenu)

animationText(document.querySelector("#session1 h4"))

document.querySelector(".fa-book").parentElement.addEventListener('click', openCourses)

document.querySelector(".fa-medal").parentElement.addEventListener("click", () => {
  modalCertificates.classList = 'modal-active'
  modalCertificates.style.display = 'block'

  setTimeout(() => {
    document.addEventListener('click', closemodalCertificates)
  }, 500);
})
function closemodalCertificates(ev) {
  if (ev.target.parentElement.parentElement.className === 'modal-active' || ev.target.parentElement.parentElement.className === 'swiper-wrapper') {

  } else {
    document.removeEventListener('click', closemodalCertificates)
    modalCertificates.style.display = 'none'
  }
}