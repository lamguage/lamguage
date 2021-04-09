//redireccion
//let registro = document.querySelector('#registro')
//registro.addEventListener('click', () => {
    //window.location.assign('')
//})
//Scroll efects 
let containerMenu = document.querySelector('.menu')
let btnmenu = document.querySelector('.btnmenu')
let menu = document.querySelector('.list-container')
let activador = true;


 //nav menu
btnmenu.addEventListener('click', () => {
    document.querySelector('.btnmenu i').classList.toggle('fa-times');
    if(activador){
        menu.style.left= '0';
        menu.style.transition = '1s';

        activador= false;
    }else{
        activador = false;
        menu.style.left = '-100%';
        menu.style.transition = '1s';
        activador = true;
    }
})
