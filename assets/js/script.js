const buttonMenu = document.querySelector('.buttonMenu ');
const buttonWhats = document.querySelector('.buttonWhats');
const navBar = document.querySelector('.navBar');
const buttonFecharMenu = document.querySelector('.buttonFecharMenu');
const homeButton = document.querySelector('.homeButton');
const buttonLinkMenu = document.querySelectorAll('.buttonLinkMenu');

buttonMenu.addEventListener('click', () => {
    navBar.style.clipPath = 'circle(160% at 100% 0%)';
    navBar.style.transition = '1.2s all';
    carrosselServicosPrestados.style.opacity = '0';
    carrosselServicosPrestados.style.transition = '1.2s all';
})

function fecharMenu(){
     navBar.style.clipPath = 'circle(0% at 100% 0%)';
     navBar.style.transition = '1.2s all';
     carrosselServicosPrestados.style.opacity = '1';
     carrosselServicosPrestados.style.transition = '1.2s all';
    
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
 


const carrosselServicosPrestados = document.querySelector('.carrosselServicosPrestados');
const servicosPrestadosItemImagem = document.querySelectorAll('.servicosPrestadosItemImagem');
const buttonProximo = document.querySelector('#proximo');
const buttonAnterior = document.querySelector('#anterior');
let index = 0;

function carrossel(){
    carrosselServicosPrestados.style.transform = `translateX(-${index * 100}%)`
}

function proximo(){
    index++;
    if(index >= servicosPrestadosItemImagem.length ){
        index = 0;
    }
    carrossel();
}
function anterior(){
    index--;
    if(index < 0){
        index = servicosPrestadosItemImagem.length -1;
    }
    carrossel()
}

buttonProximo.addEventListener('click', proximo);
buttonAnterior.addEventListener('click', anterior)
setInterval(proximo, 4000)
