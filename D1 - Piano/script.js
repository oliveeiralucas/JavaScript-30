// adiciona um ouvinte de evento ao documento
document.addEventListener('keydown', function(event) {
    // verifica se a tecla pressionada foi a tecla "Enter" (código 13)
    if (event.keyCode === 13) {
      // realiza a ação desejada
      alert('Você pressionou a tecla Enter!');
    }
  });
  