export function animationText(htmlElement, time = 200) {
    const arrText = htmlElement.innerText.split('')

    htmlElement.innerText = ''

    arrText.forEach((letter, index) => {
        setTimeout(() => {
            htmlElement.textContent += letter
        }, index * time);
    });
}