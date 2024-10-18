
const backgrounds = [
    "img/backgrounds/Cidade.jpeg",
    "img/backgrounds/cenario-espaco.jpeg",
    "img/backgrounds/cenario-emos.jpeg",
    "img/backgrounds/Matriux.jpeg",
    "img/backgrounds/fundo-1-new.png",
    "img/backgrounds/fundo-3.jpg"
];

const gato = [
    "img/personagens/gato-1.png",
    "img/personagens/gato-2.png",
    "img/personagens/gato-3.png"

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

const personagens = [
    gato,
    capivara,
    hamster,
    coelho
    
]

// personagens[2][3]//


var img_personagem = document.getElementById('personagem');


var body = document.querySelector('body');
var main = document.querySelector('main');

var div_game = document.querySelector('.game');
var div_menu_game = document.querySelector('.menu-game')
var div_custom_page = document.querySelector('.custom-page')

var persona_value = document.getElementsByName("personagens");
var musica_value = document.getElementsByName("musicas");
var cenario_value =  document.getElementsByName("cenarios");

var personagem_selected = 0;
var musica_selected = 0;
var cenario_selected = 0;

body.style.backgroundImage = "url(assets/" + backgrounds[0] + ")";
main.style.backgroundImage = "url(assets/" + backgrounds[0] + ")";
div_menu_game.style.backgroundImage = "url(assets/" + backgrounds[0] + ")";
div_custom_page.style.backgroundImage = "url(assets/" + backgrounds[0] + ")";

var contador = 0;

var cont2 = 0;


function custom(){
    div_menu_game.style = "display:none"
    div_custom_page.style = "display:flex"
}



function play(){

    for (var i = 0; i < persona_value.length; i++) {
        if (persona_value[i].checked) {
            personagem_selected = i; // O índice do personagem selecionado
            break;
        }
    }

    // Obtendo o valor selecionado para música
    for (var i = 0; i < musica_value.length; i++) {
        if (musica_value[i].checked) {
            musica_selected = i; // O índice da música selecionada
            break;
        }
    }

    // Obtendo o valor selecionado para cenário
    for (var i = 0; i < cenario_value.length; i++) {
        if (cenario_value[i].checked) {
            cenario_selected = i; // O índice do cenário selecionado
            break;
        }
    }

    img_personagem.src = "assets/" + personagens[personagem_selected][0];

    
    body.style.backgroundImage = "url(assets/" + backgrounds[cenario_selected] + ")";
    main.style.backgroundImage = "url(assets/" + backgrounds[cenario_selected] + ")";
    div_menu_game.style.backgroundImage = "url(assets/" + backgrounds[cenario_selected] + ")";
    div_custom_page.style.backgroundImage = "url(assets/" + backgrounds[cenario_selected] + ")";


    div_menu_game.style = "display:none"
    div_custom_page.style = "display:none"
    div_game.style = "display:flex"
}

div_custom_page.style = "display:none;"
div_game.style = "display:none"
// div_menu_game.style = "display:none"


// function mudar(){
    // contador++;
    // if (contador >= backgrounds.length){
    //     contador = 0;
    // }

    
// }


function mudar_persona(){

    cont2++;

    if (cont2 >= personagens[personagem_selected].length) {
        cont2 = 0;
    }

    img_personagem.src = "assets/" + personagens[personagem_selected][cont2];
}

