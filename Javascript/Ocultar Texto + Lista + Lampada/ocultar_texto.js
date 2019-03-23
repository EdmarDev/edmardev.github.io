var dict = {
  'enlace_1':'conteudo_1',
  'enlace_2':'conteudo_2',
  'enlace_3':'conteudo_3',
};
function ocultar(e) {
  var texto = document.getElementById(dict[e.srcElement.id]);
  if (texto.style.display == 'none'){
    texto.style.display = 'block';
    e.srcElement.textContent = "Ocultar Conteúdo";
  }
  else {
    texto.style.display = 'none';
    e.srcElement.textContent = "Exibir Conteúdo";
  }
}
document.getElementById('enlace_1').addEventListener('click', ocultar);
document.getElementById('enlace_2').addEventListener('click', ocultar);
document.getElementById('enlace_3').addEventListener('click', ocultar);
