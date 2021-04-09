//registro
let close3 = document.querySelector('.close');
let fondo = document.querySelector('#content');
let llamar = document.querySelector('.active');
let quedatequieto = document.querySelector('.title');
let abrir = document.querySelector('#registro');
let cuerpo = document.querySelector('body')
let adelante = document.querySelector('#form-width')

close3.addEventListener('click', () => {
    quedatequieto.style.zIndex = '10';
    fondo.style.marginTop = '-700%';
    fondo.style.transition = '1.5s' ;
   
})


llamar.addEventListener('click', () => {
    quedatequieto.style.zIndex = '-10';
    fondo.style.marginTop = '0';
    fondo.style.transition = '1.5s' ;
    
})
abrir.addEventListener('click', () => {
    quedatequieto.style.zIndex = '-10';
    fondo.style.marginTop = '0';
    fondo.style.transition = '1.5s';
    
})
//registro
//inicio
let close4 = document.querySelector('.bu-close');
let fondo2 = document.querySelector('#contenido');
let llamar2 = document.querySelector('.active2');
let adelante2 = document.querySelector('#form-all')


llamar2.addEventListener('click', () => {
   adelante2.style.zIndex = '100';
    adelante2.style.transition = '1.5s';
    adelante2.style.top = '0' ;

})
close4.addEventListener('click', () => {
    adelante2.style.zIndex = '-100';
    quedatequieto.style.zIndex = '10';
    adelante2.style.transition = '1.5s';
    adelante2.style.top = '-700%' ;
})






//inicio