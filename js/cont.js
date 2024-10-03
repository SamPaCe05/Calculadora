const sum = document.querySelector('.sum')
const res = document.querySelector('.res')

const estado = document.querySelector('span')
let cont = 0;
sum.addEventListener('click', (e) => {
    e.preventDefault()
    estado.textContent = ++cont

})
res.addEventListener('click', (e) => {
    e.preventDefault()
    estado.textContent = --cont
})
