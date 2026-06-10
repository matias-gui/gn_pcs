const buttonMenu = document.querySelector('.buttonMenu ');
const buttonWhats = document.querySelector('.buttonWhats');
const navBar = document.querySelector('.navBar');
const buttonFecharMenu = document.querySelector('.buttonFecharMenu');


buttonMenu.addEventListener('click', () => {
    navBar.style.clipPath = 'circle(160% at 100% 0%)';
    navBar.style.transition = '1.2s all'
})
buttonFecharMenu.addEventListener('click', 
    () => {
        navBar.style.clipPath = 'circle(0% at 100% 0%)';
        navBar.style.transition = '1.2s all'
    }
)








buttonWhats.addEventListener('click', () => {
    window.open('https://wa.me/5548991603808?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.', '_blank')
} )