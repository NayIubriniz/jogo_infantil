import '../js/alfabeto.js';
import '../js/aprendendo-a-contar.js';
import '../js/completar-palavras.js';
import '../js/jogo-memoria.js';

document.addEventListener('DOMContentLoaded', () => {

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
