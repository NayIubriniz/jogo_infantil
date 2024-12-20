const numbersGrid = document.querySelector('.numbers-grid')


//Gerando números aleatórios e exibe
function gerarNumeros(){
    for (let i = 1; i <= 100; i++){
        const button =  document.createElement('button');
        button.textContent = i;
        button.onclick = () => tocarSom(i);
        numbersGrid.appendChild(button);
    }
}

function tocarSom(numero){
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(numero.toString());
    utterance.lang = 'pt-BR';
    synth.speak(utterance);
}

function voltarAoMenu(){
    window.location.href = '../html/index.html';
}

//incializa o jogo com a primeira soma
gerarNumeros();