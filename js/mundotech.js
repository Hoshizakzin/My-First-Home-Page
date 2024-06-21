var btnMenu = document.getElementById('imagemenu');
var meuMenu = document.getElementById('menu');
var btnOcultar = document.getElementById('botaoX');

btnMenu.addEventListener('click', exibir);
btnOcultar.addEventListener('click', ocultar)


function exibir() {
    meuMenu.classList.remove('ocultar');
    meuMenu.classList.add('exibir');
    btnOcultar.style.display='flex';
}

function ocultar() {
    meuMenu.classList.remove('exibir');
    meuMenu.classList.add('ocultar');
    btnOcultar.style.display='none';
}