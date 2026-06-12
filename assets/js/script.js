const buttonMenu = document.querySelector('.buttonMenu ');
const buttonWhats = document.querySelector('.buttonWhats');
const navBar = document.querySelector('.navBar');
const buttonFecharMenu = document.querySelector('.buttonFecharMenu');
const homeButton = document.querySelector('.homeButton');
const buttonLinkMenu = document.querySelectorAll('.buttonLinkMenu');



buttonMenu.addEventListener('click', () => {
    navBar.style.clipPath = 'circle(160% at 100% 0%)';
    navBar.style.transition = '1.2s all'
})

function fecharMenu(){
     navBar.style.clipPath = 'circle(0% at 100% 0%)';
     navBar.style.transition = '1.2s all'
}
buttonFecharMenu.addEventListener('click', fecharMenu);

buttonLinkMenu.forEach( button => {
    button.addEventListener('click', fecharMenu);
});







const linkWhast = 'https://wa.me/5548991603808?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.';
function abrirWhatsapp(){
    window.open(linkWhast,'_blank')
};
buttonWhats.addEventListener('click', abrirWhatsapp );
homeButton.addEventListener('click',abrirWhatsapp );