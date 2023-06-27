// FUNÇÕES DO HEADER

const menuHambu = document.querySelector('.menu-hambu');
const menuNavegacao = document.querySelector('.links-header');

menuHambu.addEventListener('click', () =>{
    menuHambu.classList.toggle('ativar')
    menuNavegacao.classList.toggle('ativar2')
 })