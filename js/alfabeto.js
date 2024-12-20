const letrasContainer = document.getElementById('letras-container');
const letrasSelecionada = document.getElementById('letra-selecionada');
const imagemAssociada = document.getElementById('imagem-associada');

//lista de letras e imagens associadas
const alfabeto = [
    { letra: "A", imagem: "../img/abacaxi.png", nome: "Abacaxi" },
    { letra: "B", imagem: "../img/bola.png", nome: "Bola" },
    { letra: "C", imagem: "../img/carro.png", nome: "Carro" },
    { letra: "D", imagem: "../img/dado.png", nome: "Dado" },
    { letra: "E", imagem: "../img/elefante.png", nome: "Elefante" },
    { letra: "F", imagem: "../img/foca.png", nome: "Foca" },
    { letra: "G", imagem: "../img/gato.png", nome: "Gato" },
    { letra: "H", imagem: "../img/hipopoamo.png", nome: "Hipopótamo" },
    { letra: "I", imagem: "../img/ilha.png", nome: "Ilha" },
    { letra: "J", imagem: "../img/jacare.png", nome: "Jacaré" },
    { letra: "K", imagem: "../img/kiwi.png", nome: "Kiwi" },
    { letra: "L", imagem: "../img/leao.png", nome: "Leão" },
    { letra: "M", imagem: "../img/macaco.png", nome: "Macaco" },
    { letra: "N", imagem: "../img/navio.png", nome: "Navio" },
    { letra: "O", imagem: "../img/ovelha.png", nome: "Ovelha" },
    { letra: "P", imagem: "../img/pato.png", nome: "Pato" },
    { letra: "Q", imagem: "../img/queijo.png", nome: "Queijo" },
    { letra: "R", imagem: "../img/rato.png", nome: "Rato" },
    { letra: "S", imagem: "../img/sapato.png", nome: "Sapato" },
    { letra: "T", imagem: "../img/tigre.png", nome: "Tigre" },
    { letra: "U", imagem: "../img/urso.png", nome: "Urso" },
    { letra: "V", imagem: "../img/vaca.png", nome: "Vaca" },
    { letra: "W", imagem: "../img/waffle.png", nome: "Waffle" },
    { letra: "X", imagem: "../img/xicara.png", nome: "Xícara" },
    { letra: "Y", imagem: "../img/yak.png", nome: "Yak" },
    { letra: "Z", imagem: "../img/zebra.png", nome: "Zebra" }
];
function gerarLetras(){
    alfabeto.forEach(item =>{
        const botao = document.createElement('button');
        botao.textContent = item.letra;
        botao.onclick = () => mostrarLetra(item);
        letrasContainer.appendChild(botao)
    });
}

function mostrarLetra(item){
    letrasSelecionada.textContent = `${item.letra} de ${item.nome}`;
    imagemAssociada.src = item.imagem;
    falarLetra(item.letra, item.nome);
}

function falarLetra(letra, nome){
    const synth = window.speechSynthesis;
    const utterance =  new SpeechSynthesisUtterance(`${letra} de ${nome}`);
    utterance.lang = 'pt-BR';
    synth.speak(utterance);
}
function voltarAoMenu(){
    window.location.href = '/index.html';
}

gerarLetras();