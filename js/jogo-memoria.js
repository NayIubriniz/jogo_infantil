const tabuleiroMemoria = document.getElementById('tabuleiroMemoria');

const cartas = [
    '../img/Ankylossauro.png', '../img/Diplodocus.png', '../img/Hadrosaur.png', '../img/Spinossauro.png', '../img/Stegosauros.png', '../img/Tiranossauro.png',
    '../img/Ankylossauro.png', '../img/Diplodocus.png', '../img/Hadrosaur.png', '../img/Spinossauro.png', '../img/Stegosauros.png', '../img/Tiranossauro.png'
];

let cartasViradas = [];
let bloqueioTabuleiro =  false;
let paresEncontrados = 0;

//embaralha as cartas
function embaralharCartas(){
    cartas.sort(() => Math.random() - 0.5);

}

//Cria as cartas no trabalho
function criarTabuleiro(){
    tabuleiroMemoria.innerHTML = '';
    embaralharCartas();

    cartas.forEach((figura, index)=>{
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.index = index;

        carta.innerHTML = `
            <div class="frente"></div>
            <div class="verso"><img class="img-dino" src="${figura}" alt="Figura"></div>
        `
        carta.addEventListener('click', virarCarta);
        tabuleiroMemoria.appendChild(carta)
    });
}

//Lógica ao virar a carta
function virarCarta(){
    if (bloqueioTabuleiro) return;

    const cartaSelecionada = this;

    if (cartaSelecionada.classList.contains('virada')) return;

    cartaSelecionada.classList.add('virada')
    cartasViradas.push(cartaSelecionada);

    if (cartasViradas.length === 2){
        verificarPar();
    }
}

//verifica se as cartas virada são par
function verificarPar(){
    const [primeiraCarta, segundaCarta] = cartasViradas;
    const figura1 = primeiraCarta.querySelector('.verso img').src;
    const figura2 = segundaCarta.querySelector('.verso img').src;

    if(figura1 === figura2){
        paresEncontrados++;
        cartasViradas = [];

        if (paresEncontrados === cartas.length / 2){
            setTimeout(()=>{
                alert('Parabéns! Você encontrou todos os pares!');
                reiniciarJogo();
            }, 500);
        }
    }else{
        bloqueioTabuleiro = true;
        setTimeout(() =>{
            primeiraCarta.classList.remove('virada');
            segundaCarta.classList.remove('virada')
            cartasViradas = [];
            bloqueioTabuleiro = false;
        }, 1000);
    }
}

//reinicia o jogo
function reiniciarJogo(){
    cartasViradas = [];
    paresEncontrados = 0;
    bloqueioTabuleiro = false;
    criarTabuleiro();
}

//voltar ao menu

function voltarAoMenu(){
    window.location.href = '/index.html';
}

criarTabuleiro();