

var btmenu = document.getElementById('btmenu');
var linha1 = document.getElementById('linha1');
var linha2 = document.getElementById('linha2');
var linha3 = document.getElementById('linha3');
var menu = document.getElementById('menu');
var menuul = document.getElementById('menuul');
var menuulli1 = document.getElementById('menuulli1');
var menuulli2 = document.getElementById('menuulli2');
var menuulli3 = document.getElementById('menuulli3');
var menuulli4 = document.getElementById('menuulli4');
var menuullia1 = document.getElementById('menuullia1');
var menuullia2 = document.getElementById('menuullia2');
var menuullia3 = document.getElementById('menuullia3');
var menuullia4 = document.getElementById('menuullia4');
var partemenu = document.getElementById('partemenu');
var menuulp = document.getElementById('menuulp')

let contador;

if (window.innerWidth <= 850) {
    menuullia1.addEventListener('click', produtos)
}

else if (window.innerWidth > 850) {
    //mouseover dos produtos - início
    menuullia1.addEventListener('mouseover', produtos);
    menuullia1.addEventListener('mouseout', function(){
        contador = setTimeout(() => {
            produtos()
        }, 500);
    });

    menuulp.addEventListener('mouseover', function(){
        console.log("contador zerado");
        clearTimeout(contador)
    })

    menuulp.addEventListener('mouseout', function(){
        contador = setTimeout(() => {
            produtos()
        }, 500);
    });

    //mouseover dos produtos - fim
}


function abrirmenu() {

    menuul.classList.toggle('menuuld');
    menu.classList.toggle('menud');
    menuulli1.classList.toggle('menuullid');
    menuulli2.classList.toggle('menuullid');
    menuulli3.classList.toggle('menuullid');
    menuulli4.classList.toggle('menuullid');
    menuullia1.classList.toggle('menuulliad');
    menuullia2.classList.toggle('menuulliad');
    menuullia3.classList.toggle('menuulliad');
    menuullia4.classList.toggle('menuulliad');
    linha1.classList.toggle('linha1d');
    linha2.classList.toggle('linha2d');
    linha3.classList.toggle('linha3d');
    partemenu.classList.toggle('partemenud');

    
}

function produtos() {
    console.log('abriu o menu');
    menuulp.classList.toggle('menuulp');
    if (window.innerWidth <= 850) {
        menuul.classList.toggle('menuult')
    }
}

function voltarmenu() {
    menuul.classList.toggle('menuuld');
    menuulp.classList.toggle('menuulp');
    
    if (menuul.classList.contains('menuult')) {
        menuul.classList.remove('menuult')
        menuul.classList.toggle('menuuld')
    }
}
