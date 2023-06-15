export function openCourses() {
  const targetBox = document.querySelector(".fa-book").parentElement
  targetBox.id = 'courses-active'

  document.querySelectorAll('.box-information').forEach(box => {
    if (!Boolean(box.id)) {
      box.style.display = 'none'
    }
  })
  targetBox.innerHTML = `
     <li>OneBitCode: Full Stack JavaScript (40%)</li>
     <li>Udemy: JS e TypeScript do basico ao avançado (30%)</li>
  `
  targetBox.removeEventListener('click', openCourses)
  targetBox.addEventListener('click', () => closeCourses(targetBox));

  setTimeout(() => {
    document.addEventListener('click', checkedDocumentClick)
  }, 500);
}
function checkedDocumentClick() {
  const targetBox = document.querySelector(".box-information li")?.parentElement

  closeCourses(targetBox)
}

export function closeCourses(targetBox) {
  document.removeEventListener("click", checkedDocumentClick)

  targetBox.innerHTML = `
  <i class="fa-solid fa-book"></i>
  <h4>Cursos</h4>
  `
  targetBox.removeAttribute('id')

  document.querySelectorAll('.box-information').forEach(box => {
    box.style.display = 'flex'
  })

  targetBox.addEventListener('click', openCourses)
}

const swiper = new Swiper(".mySwiper", {
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


