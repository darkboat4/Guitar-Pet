import Songs from "./music.js"; // IMPORTO O ARRAY QUE CONTEM TODAS AS MUSICAS JA PRONTAS COM O NOME DE SONGS

const backgrounds = [
    "img/backgrounds/Cidade.jpeg",
    "img/backgrounds/cenario-espaco.jpeg",
    "img/backgrounds/cenario-emos.jpeg",
    "img/backgrounds/Matriux.jpeg",
    "img/backgrounds/fundo-1-new.png",
    "img/backgrounds/elden-ring-cenario.png"
];

const gato = [
    "img/personagens/gato-1.png",
    "img/personagens/gato-2.png",
    "img/personagens/gato-3.png",
    "img/personagens/gato-4.png"

];

const capivara = [
    "img/personagens/Caps1.png",
    "img/personagens/caps2.png",
    "img/personagens/caps3.png",
    "img/personagens/Caps-4.png"
];

const hamster = [
    "img/personagens/Hams1.png",
    "img/personagens/hams2.png",
    "img/personagens/hams3.png",
    "img/personagens/Hams-4.png"
];

const coelho = [
    "img/personagens/coe1.png",
    "img/personagens/Coe2.png",
    "img/personagens/coe3.png",
    "img/personagens/Cu-4.png"
];

const arrCharact = [
    gato,
    capivara,
    hamster, 
    coelho
]


const arVal = []; // ESSE ARRAY VAI GUARDAR A POSIÇAO DE CADA COISA ESCOLHIDA

let img_personagem = document.querySelector('#personagem'); //ESSE é o personagem que fica no jogo, se 'movimentando'.
let persona_value = document.getElementsByName('personagens');
let musica_value = document.getElementsByName('musicas');
let cenario_value =  document.getElementsByName('cenarios');

let charChose = '';
let songChose = '';

 //ESTAS SAO TODAS AS TAGS HTML QUE PRECISAM SER SUMIR PARA APARECER O JOGO.

organizePags()


document.addEventListener('click', (e) => {
    let el = e.target;

    if(el.classList.contains('custom')){ //SE o botao apertado tiver a class CUSTOM 
        document.querySelector('.menu-game').style = "display:none"   //ESTAS SAO TODAS AS TAGS HTML QUE PRECISAM SER SUMIR PARA APARECER O JOGO.
        document.querySelector('.custom-page').style = "display:flex"
        document.querySelector('.play-button').style = "display:flex"
    }

    if(el.classList.contains('staaaaart')){ // BOTAO QUE COMEÇA O JOGO EM SI.
        for(let i in persona_value){ // COLOCO DENTRO DE UM ARRAY O PERSONAGEM Q FOI SELECIONADO
            if(persona_value[i].checked){
                arVal.push(i);
                charChose = arrCharact[i];
                img_personagem.setAttribute('src', `assets/${arrCharact[i][0]}`);
                break;
            }
        }
    
        for(let i in musica_value){ //FAÇO O MESMO COM A MUSICA
            if(musica_value[i].checked){
                arVal.push(i);
                break;
            }
        }

        for(let i in cenario_value){  //COM O CENARIO TB KKKKKKKKK
            if(cenario_value[i].checked){
                arVal.push(i);

                // COLOCO NO BODY O BACKGROUND ESCOLHIDO, DE ACORDO COM A POSIÇAO OD QUE FOI ESCOLHIDO
                document.querySelector('body').style.backgroundImage = `url('./assets/${backgrounds[i]}')`;
                break;
            }
        }

        songChose = Songs[arVal[1]];

        songChose.audio.play(); //COM O ARRAY DE TODAS MUSICAS JA IMPORTADO, DE ACORDO COM A POSIÇAO DO QUE A PESSOA ESCOLHEU (QUE ESTA GUARDADO EM OUTRO ARRAY) É TOCADA A MUSICA, QUE TAMBÉM JA  FOI ADICIONADO DENTRO DO HTML
        songChose.startGame(); // A FUNÇAO 'STARTGAME' DO ARQUIVO  'GAME.JS' É EXECUTADO.
       
        analyzeSheets();
        closeSelection();
        addCharac();      

    }
    
    if(el.classList.contains('restart')){ //SE o botao apertado tiver a class CLOSE 
        window.location.reload();
    }
    
    if(el.classList.contains('scoreboard')){ //SE o botao apertado tiver a class CLOSE 
        window.location.reload();
    }

    if(el.classList.contains('open')){ //SE o botao apertado tiver a class OPEN 
        document.querySelector('.menu-game').style = "display:none"
        document.querySelector('.tutorial').style = "display:flex"  
    }

    if(el.classList.contains('close')){ //SE o botao apertado tiver a class CLOSE 
        document.querySelector('.menu-game').style = "display:flex"
        document.querySelector('.tutorial').style = "display:none"   
    }
})


document.addEventListener('keypress', (e) =>{
    let key = e.key;

    if(
        key == 'a' || key == 'A' ||
        key == 's' || key == 'S' ||
        key == 'j' || key == 'J' ||
        key == 'k' || key == 'K' 
    ){

        if( songChose.failedSuccess == true ){ // to buscando na class do proprio game a variavel 'this.failedSuccess'
            img_personagem.setAttribute('src', `assets/${charChose[random()]}`);
            songChose.failedSuccess = '';
        }
    }
})


function analyzeSheets(){
    setInterval(()=>{
        if( songChose.failedSuccess === false ){
            img_personagem.setAttribute('src', `assets/${charChose[3]}`);
        }
    
    }, 0.1)
}

function random() {
    return Math.floor(Math.random() * 3);
  }

function addCharac() {
    img_personagem.setAttribute('src', `assets/${charChose[0]}`);
}

function closeSelection(){        //ESTAS SAO TODAS AS TAGS HTML QUE PRECISAM SER SUMIR PARA APARECER O JOGO.
    document.querySelector('.menu-game').style = "display:none" 
    document.querySelector('.custom-page').style = "display:none"
    document.querySelector('.game').style = "display:flex"
    document.querySelector('.play-button').style = "display:none"
    document.querySelector('.wallpaper').style.animationName = 'queda';
    document.querySelector('.wallpaper2').style.animationName = 'queda2'; 
}

function organizePags(){ //ISSO ADICIONA UM DISPLAY NONE EM CADA PAGINA QUE NAO É NECESSARIA SER MOSTRADA NO INICIO, COMO POR EXEMPLO A DO JOGO
    document.querySelector('.custom-page').style = "display:none"
    document.querySelector('.game').style = "display:none"
    document.querySelector('.play-button').style = "display:none"
    document.querySelector('.tutorial').style = "display:none"
}


 
var musica_tocando = document.getElementById("song");

musica_tocando.addEventListener('ended', () =>{
    document.querySelector('#scoreboard').style = 'display:flex';
    document.querySelector('#pontos').innerHTML = songChose.points;
})