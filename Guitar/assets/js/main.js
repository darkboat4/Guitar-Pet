import Game from "/assets/js/game.js"; 
import Matriz from "/assets/js/matriz.js";


/*
    [1, 0, 0, 0],    [0]
    [0, 1, 0, 0],    [1]
    [0, 0, 1, 0],    [2]
    [0, 0, 0, 1],    [3]

    [1, 1, 0, 0],    [4]
    [0, 1, 1, 0],    [5]
    [0, 0, 1, 1],    [6]
    [1, 1, 0, 1],    [7]

    [1, 0, 1, 1],    [8]
    [1, 1, 1, 0],    [9]
    [0, 1, 1, 1],    [10]
    [1, 1, 1, 1],    [11]
    [1, 0, 1, 0],    [12]
    [0, 1, 0, 1],    [13]
    [1, 0, 0, 1],    [14]
    [0, 0, 0, 0],    [15]
*/

const m = new Matriz;
m.getIndexOfTime(120) //o parâmetro é a quantidade de tempo, eles vao direto para o ARRAY;

const game = new Game(  
    [
        m.notes[9],m.notes[10],m.notes[4],m.notes[12], m.notes[11], m.notes[14], 
        m.notes[13], m.notes[6], m.notes[12], m.notes[5], m.notes[7], m.notes[11], //introdução da musica

        m.notes[14],m.notes[14],m.notes[12],m.notes[10],m.notes[9],
        m.notes[8],m.notes[4],m.notes[4],m.notes[4],m.notes[12],
        m.notes[13],m.notes[9],m.notes[9],m.notes[9],m.notes[9],
        m.notes[9],m.notes[9],m.notes[9],m.notes[9],m.notes[9],
        m.notes[9],m.notes[9],

    ], 
    [ 
         4.1, 7.50, 10.6, 13.9, 17.7, 21.1, 24.6, 28.03, 31.3, 34.9, 38.3, 41.5,  //introduçao da musica

      44.9, 48.3, 52.0, 55.2, 58.8,
      62.2, 65.7, 69.1, 70.8, 72.41, 
      74.2, 75.8, 77.7, 79.3, 81.0, 
      82.6, 84.4, 85.4, 86.0, 86.7, 
      88.0, 89.8, 91.4, 92.2, 93.4, 
      95.0, 96.1



    ]
);


const start = () => game.startGame();
const k = document.querySelector('.staaaaart')

const wallpaper = document.querySelector('.wallpaper');
const wallpaper2 = document.querySelector('.wallpaper2');


k.addEventListener('click', () => {
    game.audio.play(); 
    start();
    k.style.display = 'none'; 
    wallpaper.style.animationName = 'queda';
    wallpaper2.style.animationName = 'queda2';  
})

document.addEventListener('keypress', (e)=>{
    let el = e.keyCode;
    if(el == 32 || el == 13){ 
        game.audio.play(); 
        start();
    k.style.display = 'none'; 
    
    wallpaper.style.animationName = 'queda';
    wallpaper2.style.animationName = 'queda2'; 
    }
})

//MUSICAS SUGESTOES
/*
    505,
    CRAZY TRAIN,
    BRING ME TO LIFE,
*/
