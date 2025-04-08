const btn = document.querySelector('#generate');
const box = document.querySelector('.box');

btn.addEventListener('click', () => {
    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)
    box.style.backgroundColor  = `rgb(${R}, ${G}, ${B})`
    box.style.boxShadow = `0 0 10px rgb(${R}, ${G}, ${B})`
    box.style.border = `2px solid rgb(${R}, ${G}, ${B})`
})