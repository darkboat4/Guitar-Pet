
const backgrounds = [
    "img/backgrounds/Cidade.jpeg",
    "img/backgrounds/cenario-espaco.jpeg",
    "img/backgrounds/cenario-emos.jpeg",
    "img/backgrounds/Matriux.jpeg",
    "img/backgrounds/fundo-1-new.png",
    "img/backgrounds/fundo-3.jpg"
];

const capivara = [
    "img/personagens/Caps1.jpg",
    "img/personagens/caps2.jpg",
    "img/personagens/caps3.jpg"
];

const hamster = [
    "img/personagens/Hams1.jpg",
    "img/personagens/hams2.jpg",
    "img/personagens/hams3.jpg"
];

const coelho = [
    "img/personagens/coe1.jpg",
    "img/personagens/Coe2.jpg",
    // "img/personagens/caps3.jpg"
];


var img_personagem = document.getElementById('personagem');
img_personagem.src = "assets/" + capivara[0];

var body = document.querySelector('body');
var main = document.querySelector('main');

var div_game = document.querySelector('.game');
var div_menu_game = document.querySelector('.menu-game')
var div_custom_page = document.querySelector('.custom-page')


body.style.backgroundImage = "url(assets/" + backgrounds[0] + ")";
main.style.backgroundImage = "url(assets/" + backgrounds[0] + ")";
div_menu_game.style.backgroundImage = "url(assets/" + backgrounds[0] + ")";


var contador = 0;

function mudar(){
    contador++;
    if (contador >= backgrounds.length){
        contador = 0;
    }

    body.style.backgroundImage = "url(assets/" + backgrounds[contador] + ")";
    main.style.backgroundImage = "url(assets/" + backgrounds[contador] + ")";
    div_menu_game.style.backgroundImage = "url(assets/" + backgrounds[contador] + ")";

    
}

var cont2 = 0;

function mudar_persona(){

    cont2++;

    if (cont2 >= capivara.length) {
        cont2 = 0;
    }

    img_personagem.src = "assets/" + capivara[Math.floor(Math.random() * 3)];
}


function comecar_jogo(){
    div_game.style = "display:none"
}

function play(){

    div_menu_game.style = "display:none"
    div_game.style = "display:flex"
}

div_custom_page.style = "display:none;"

comecar_jogo();