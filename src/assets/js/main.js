const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', (e) => {

    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }

})
