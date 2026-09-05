const imagem = document.querySelector('.apresentacao__imagem');

if (imagem) {
  imagem.addEventListener('click', () => {
    imagem.classList.toggle('deslocada');
  });
}
