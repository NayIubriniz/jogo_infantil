document.addEventListener('DOMContentLoaded', () => {
    
    function definirNome() {
        const nomeInput = document.getElementById('nomeInput').value;
        const saudacao = document.getElementById('saudacao');

        if(nomeInput.trim() !== ''){
            saudacao.textContent = `Oi, ${nomeInput}!`;
            
        }else{
            alert('Por favor, digite seu nome!');
        }
    }

    document.getElementById('game1').addEventListener('click', function(){
        alert('Você escolheu o jogo Completar Palvras!')
    });


    document.getElementById('game2').addEventListener('click', function(){
        alert('Você escolheu o jogo Aprendendo a contar')
    });

    document.getElementById('game3').addEventListener('click', function(){
        alert('Você escolheu o jogo da memória!')
    });

    document.getElementById('game4').addEventListener('click', function(){
        alert('Você escolheu o jogo Alfabeto!')
    })
    window.definirNome = definirNome;
});
