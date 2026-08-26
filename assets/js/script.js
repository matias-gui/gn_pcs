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
    modalImg.innerHTML = '';
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
        }else if (e.target.dataset.id === '2'){
            mostrarModal()
            modalMontagem()
        }else if (e.target.dataset.id === '3'){
            mostrarModal()
            modalFormatacao()
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
           modalDescricao.innerHTML = `<h2>Serviço de Limpeza</h2>
           <p> Limpeza detalhada realizada no computador, com remoção de poeira e sujeira acumuladas no gabinete e nos componentes internos. Também foi feita a limpeza das ventoinhas, organização interna e higienização geral, deixando o equipamento mais limpo, conservado e com melhor circulação de ar.</p>
           <button class="buttonOrcamento" onclick="abrirWhatsapp()">Solicitar Orçamento</button>`;
    });
   
}

const montagemPcs = [
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.36.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.38.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.42.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.42.jpeg"
]
function modalMontagem(){
    montagemPcs.forEach( imgSrc => {
     let img = document.createElement('img');
     img.src = imgSrc; 
    
           modalImg.appendChild(img);
           modalDescricao.innerHTML = `<h2>Montagem de PC's</h2>
           <p> Realizamos a montagem personalizada de computadores de acordo com as necessidades de cada cliente. O serviço inclui a instalação dos componentes, organização dos cabos, montagem do sistema e testes de funcionamento, garantindo um equipamento bem montado, organizado e pronto para uso.</p>
           <button class="buttonOrcamento" onclick="abrirWhatsapp()">Solicitar Orçamento</button>`;
    })
    }


const formatacaoOtamizacao =[
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.36.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.38.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.42.jpeg",
    "assets/imagens/WhatsApp Image 2026-06-04 at 10.47.42.jpeg"
]

function modalFormatacao(){
    formatacaoOtamizacao.forEach( imgSrc => {
     let img = document.createElement('img');
     img.src = imgSrc; 
     
           modalImg.appendChild(img);
           modalDescricao.innerHTML = `<h2>Formatação e Otimização</h2>
           <p> Realizamos a formatação completa do computador, preparando o sistema para um novo uso. O serviço inclui instalação do sistema operacional, drivers e configurações essenciais, além da otimização do computador para proporcionar mais desempenho, estabilidade e melhor funcionamento.</p>
           <button class="buttonOrcamento" onclick="abrirWhatsapp()">Solicitar Orçamento</button>`;

    
    })}