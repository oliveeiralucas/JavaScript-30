// adiciona um ouvinte de evento ao documento
document.addEventListener('keydown', function(event) {
    // verifica se a tecla pressionada foi a tecla "Enter" (código 13)
    if (event.keyCode === 65) {
      var som = document.getElementById('tecla-a');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 83) {
      var som = document.getElementById('tecla-s');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 68) {
      var som = document.getElementById('tecla-d');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 70) {
      var som = document.getElementById('tecla-f');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 71) {
      var som = document.getElementById('tecla-g');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 72) {
      var som = document.getElementById('tecla-h');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 74) {
      var som = document.getElementById('tecla-j');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 75) {
      var som = document.getElementById('tecla-k');
      som.play();
      som.currentTime = 0;
    } 

    //Teclado 2 Q-U

     if (event.keyCode === 81) {
      var som = document.getElementById('tecla-q');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 87) {
      var som = document.getElementById('tecla-w');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 69) {
      var som = document.getElementById('tecla-e');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 82) {
      var som = document.getElementById('tecla-r');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 84) {
      var som = document.getElementById('tecla-t');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 89) {
      var som = document.getElementById('tecla-y');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 85) {
      var som = document.getElementById('tecla-u');
      som.play();
      som.currentTime = 0;
    }

    //Teclado 3 Z-B
   if (event.keyCode === 90) {
      var som = document.getElementById('tecla-z');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 88) {
      var som = document.getElementById('tecla-x');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 67) {
      var som = document.getElementById('tecla-c');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 86) {
      var som = document.getElementById('tecla-v');
      som.play();
      som.currentTime = 0;
    }
    if (event.keyCode === 66) {
      var som = document.getElementById('tecla-b');
      som.play();
      som.currentTime = 0;
    }
  });
  
  var botoesSom = document.querySelectorAll('.botao-som');
  botoesSom.forEach(function(botao) {
    botao.addEventListener('click', function() {
      var som = document.getElementById(botao.getAttribute('data-som'));
      som.play();
      som.currentTime = 0;
    });
  });