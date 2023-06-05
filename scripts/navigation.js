window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    document.querySelector("aside").style.display = 'none'
    document.querySelector(".menu-mobile").style.display = 'block'
  }
})
// Trocar Sessão
const toggle = document.querySelector('.toggle')
toggle.addEventListener("click", openMenu)

function openMenu() {
  const listIcons = document.querySelector('ul.actived')
  if (listIcons) {
    listIcons.classList.remove("actived")
  } else {
    document.querySelector('.menu-mobile ul').classList = 'actived'
  }
}

const modais = ["session1", "session2", "session3", "session4", "session5",];
let modalAtual = 0;

function showModal(id) {
  swapIcons(id)
  const modal = document.getElementById(id);
  modal.classList = 'open'
  document.querySelector(`#${id}-btn`).classList = 'actived'
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('open')
  document.querySelector(`#${id}-btn`).classList.remove('actived')
}

export function checkedDirection(direcao) {
  if (direcao === 'para baixo' && modalAtual < modais.length - 1) {
    modalAtual++;

    closeModal(modais[modalAtual - 1]);
    showModal(modais[modalAtual]);

  } else if (direcao === 'para cima' && modalAtual !== 0) {
    modalAtual--;

    closeModal(modais[modalAtual + 1]);
    showModal(modais[modalAtual]);

  } else if (direcao === 'para baixo' && modalAtual === modais.length - 1) {
    modalAtual = 0

    closeModal(modais[modais.length - 1]);
    showModal(modais[modalAtual]);

  } else if (direcao === 'para cima' && modalAtual === 0) {
    modalAtual = modais.length - 1

    closeModal(modais[0]);
    showModal(modais[modais.length - 1]);
  }
}

const classIcons = {
  session1: 'fa-solid fa-house',
  session2: 'fa-solid fa-user',
  session3: 'fa-solid fa-lightbulb',
  session4: 'fa-solid fa-file',
  session5: 'fa-solid fa-envelope'
}

function swapIcons(session) {

  const icons = document.querySelectorAll('.menu-mobile ul li')
  const newIcon = classIcons[session]

  const possibleIcons = []

  for (const key in classIcons) {
    if (classIcons[key] !== newIcon) {
      possibleIcons.push(classIcons[key])
    }
  }

  for (const i in possibleIcons) {
    icons[i].querySelector("i").classList = possibleIcons[i]
  }

  toggle.querySelector("i").classList = newIcon
}

export function selectSession(ev) {
  let newIcon = ''

  if (document.querySelector('ul.actived'))
    newIcon = ev.target.tagName !== 'I' ? ev.target.querySelector("i") : ev.target
  else
    newIcon = ev.target.tagName !== 'LI' ? ev.target.parentElement.querySelector("i") : ev.target.querySelector('i')


  const currentIcon = document.querySelector('.toggle i')

  let NewNumberSession = 0
  let currentNumberSession = 0

  for (const key in classIcons) if (classIcons[key] === newIcon.className) NewNumberSession = +key.replace('session', '')
  for (const key in classIcons) if (classIcons[key] === currentIcon.className) currentNumberSession = +key.replace('session', '')

  const difference = NewNumberSession - currentNumberSession

  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      checkedDirection('para baixo')
    }
  }
  if (difference < 0) {
    for (let i = 0; i !== difference; i--) {
      checkedDirection('para cima')
    }
  }
}

const icon = document.querySelector(".swapMenu-btn i#current-icon")

icon.parentElement.addEventListener("mouseover", () => {

  if (icon.className === 'fa-solid fa-desktop') {
    icon.className = 'fa-solid fa-mobile'
  } else {
    icon.className = 'fa-solid fa-desktop'
  }
})
icon.parentElement.addEventListener('mouseout', () => {
  if (icon.className === 'fa-solid fa-desktop') {
    icon.className = 'fa-solid fa-mobile'
  } else {
    icon.className = 'fa-solid fa-desktop'
  }
})

export function swapMenu() {
  const menuMobile = document.querySelector('.menu-mobile')
  const aside = document.querySelector('aside')

  const style = window.getComputedStyle(aside);

  if (style.getPropertyValue('display') === 'block') {
    icon.className = 'fa-solid fa-desktop'
    aside.style.display = 'none'
    menuMobile.style.display = 'block'
  } else {
    icon.className = 'fa-solid fa-mobile'
    menuMobile.style.display = 'none'
    aside.style.display = 'block'
  }

}





