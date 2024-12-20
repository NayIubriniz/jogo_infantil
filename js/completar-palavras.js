// Função para embaralhar o array de palavras
function embaralharPalavras(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca as posições
    }
}

// Função para falar o texto em voz alta
function falarTexto(texto) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR"; // Configura o idioma para português do Brasil
    speechSynthesis.speak(fala);
}

// Lista de palavras com suas dicas
const palavras = [
    { palavra: "gato", dica: "É um animal de estimação que mia." },
    { palavra: "cachorro", dica: "É um animal de estimação que late." },
    { palavra: "peixe", dica: "Vive na água e não tem pernas." },
    { palavra: "pato", dica: "Animal que nada e faz 'quá-quá'." }
];

// Variáveis globais
let indiceAtual = 0; // Índice da palavra atual
let palavraAdivinhada = ""; // Representação da palavra atual com espaços em branco (_)
let tentativasRestantes = 5; // Quantidade de tentativas disponíveis

// Função para carregar a palavra atual
function carregarPalavra() {
    const palavraAtual = palavras[indiceAtual];
    palavraAdivinhada = "_ ".repeat(palavraAtual.palavra.length).trim(); // Exemplo: "_ _ _"
    tentativasRestantes = 5; // Reinicia as tentativas para a palavra atual

    elementoPalavra.textContent = palavraAdivinhada;
    elementoMensagem.textContent = "Boa sorte!";
    elementoDica.textContent = "";
    entradaLetra.disabled = false;
    entradaLetra.value = "";

    falarTexto("Complete a palavra.");
}

// Função para verificar a letra digitada
function verificarLetra() {
    const letraDigitada = entradaLetra.value.toLowerCase();
    entradaLetra.value = ""; // Limpa o campo de entrada
    falarTexto(`Letra: ${letraDigitada}`);

    // Valida se a entrada contém apenas uma letra
    if (letraDigitada.length !== 1) {
        elementoMensagem.textContent = "Por favor, insira apenas uma letra.";
        falarTexto("Por favor, insira apenas uma letra.");
        return;
    }

    const palavraAtual = palavras[indiceAtual].palavra;
    if (palavraAtual.includes(letraDigitada)) {
        // Atualiza a palavra adivinhada para mostrar a letra correta
        let novaPalavraAdivinhada = "";
        for (let i = 0; i < palavraAtual.length; i++) {
            if (palavraAtual[i] === letraDigitada) {
                novaPalavraAdivinhada += letraDigitada + " ";
            } else {
                novaPalavraAdivinhada += palavraAdivinhada[i * 2] + " ";
            }
        }
        palavraAdivinhada = novaPalavraAdivinhada.trim();
        elementoPalavra.textContent = palavraAdivinhada;

        // Verifica se a palavra foi completada
        if (!palavraAdivinhada.includes("_")) {
            elementoMensagem.textContent = "Parabéns! Você completou a palavra!";
            falarTexto("Parabéns! Você completou a palavra!");
            indiceAtual++;
            if (indiceAtual < palavras.length) {
                setTimeout(() => carregarPalavra(), 2000);
            } else {
                elementoMensagem.textContent = "Parabéns! Você completou todas as palavras!";
                falarTexto("Parabéns! Você completou todas as palavras!");
                entradaLetra.disabled = true;
            }
        }
    } else {
        // Se a letra estiver errada, diminui o número de tentativas
        tentativasRestantes--;
        const mensagemErro = `Letra errada, tente mais uma vez. Você ainda tem ${tentativasRestantes} tentativas.`;
        elementoMensagem.textContent = mensagemErro;
        falarTexto(mensagemErro);

        // Verifica se as tentativas acabaram
        if (tentativasRestantes === 0) {
            const mensagemFim = `Fim de jogo! A palavra era: ${palavraAtual}`;
            elementoMensagem.textContent = mensagemFim;
            falarTexto(mensagemFim);
            entradaLetra.disabled = true;
        }
    }
}

// Função para exibir a dica
function mostrarDica() {
    const dicaAtual = palavras[indiceAtual].dica;
    elementoDica.textContent = `Dica: ${dicaAtual}`;
    falarTexto(`Dica: ${dicaAtual}`);
}

// Função para voltar ao menu principal
function voltarAoMenu() {
    elementoMensagem.textContent = "Você voltou ao menu!";
    falarTexto("Você voltou ao menu.");
    window.location.href = '../html/index.html';
}

// Embaralhar as palavras ao iniciar o jogo
embaralharPalavras(palavras);
carregarPalavra();
