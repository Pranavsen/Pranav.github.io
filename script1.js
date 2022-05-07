
const bar= document.getElementById('bar');
const close= document.getElementById('close');
const menu= document.querySelector('.menu');

if(bar){
    bar.addEventListener('click', ()=>{
        menu.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', ()=>{
        menu.classList.remove('active')
    })
}

// scroll navbar
const header= document.querySelector('.navbar');
window.onscroll=function(){
    var top=window.scrollY;
    console.log(top);
    if(top>=20){
        header.classList.add('scrolling-active')
    }
    else{
        header.classList.remove('scrolling-active');
    }
}