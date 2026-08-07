const buttonMenu = document.querySelector('.buttonMenu ');
const buttonWhats = document.querySelector('.buttonWhats');
const navBar = document.querySelector('.navBar');
const buttonFecharMenu = document.querySelector('.buttonFecharMenu');
const homeButton = document.querySelector('.homeButton');
const buttonLinkMenu = document.querySelectorAll('.buttonLinkMenu');

window.addEventListener("load", () => {
    const preloader = document.querySelector('.preloader');
    setInterval(()=>{
          preloader.classList.add("esconder");
          preloader.addEventListener("transitionend", () => {
            preloader.remove();
        });
    },800);

})



buttonMenu.addEventListener('click', () => {
    navBar.style.clipPath = 'circle(160% at 100% 0%)';
    navBar.style.transition = '1.2s all';
});

function fecharMenu(){
     navBar.style.clipPath = 'circle(0% at 100% 0%)';
     navBar.style.transition = '1.2s all';
};

buttonFecharMenu.addEventListener('click', fecharMenu);

buttonLinkMenu.forEach( button => {
    button.addEventListener('click', () => {
         if(window.innerWidth > 1000){
         navBar.style.clipPath = 'circle(160% at 100% 0%)';
    }else{
        fecharMenu()};
    });
});
 
const linkWhast = 'https://wa.me/5548991603808?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.';
function abrirWhatsapp(){
    window.open(linkWhast,'_blank')
};
buttonWhats.addEventListener('click', abrirWhatsapp );
homeButton.addEventListener('click',abrirWhatsapp );

const buttonVerDetalhes = document.querySelectorAll('.buttonOrcamento');
const modal = document.querySelector('.modal');
const modalFechar = document.querySelector('.modalFechar');
 
function mostrarModal(){
    modal.style.display = 'flex';
}
function fecharModal(){
    modal.style.display = 'none';
}
modal.addEventListener('click', (e) => {
    if(e.target === modal){
        fecharModal();
    };
});

modalFechar.addEventListener('click', fecharModal);

buttonVerDetalhes.forEach( button => {
    button.addEventListener('click', (e) => {
        if( e.target.dataset.id === '1'){
            mostrarModal()
            modalLimpeza()
        } 
    }); });

const modalImg = document.querySelector('.modalImg');
const modalDescricao = document.querySelector('.modalDescricao');

const imgsLimpeza = [
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.36.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.38.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.42.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.42.jpeg"
]

function modalLimpeza(){
         imgsLimpeza.forEach( imgSrc => {
          let img = document.createElement('img');
          img.src = imgSrc;

           modalImg.appendChild(img);
    });
   
}