import Game from "./game.js"; 
import Music from "./music.js";
import Matriz from "./matriz.js";

const m = new Matriz()

console.log(Music)
console.log(Music[2])
console.log(Music[3])

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

const game_505 = new Game(
    [],[], '505'
)

const game_black_sheep = new Game(
    [],[], 'BlackSheep'
)

const game_como_tudo_deve_ser = new Game(
    [],[], "ComoTudoDeveSer"
)

const game_crazytrain = new Game(
    [],[],'crazytrain'
)

const game_from_the_star = new Game(
    [],[], 'FromTheStart'
)

const game_hopes = new Game(  
    [
        
        m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[12], m.notes[13],
        m.notes[8], m.notes[13], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1]
    ], 
    [ 
        10.447, 10.665, 10.860, 10.996,
    11.183, 11.341, 11.500, 12.228,
    12.243, 12.936, 14.247, 15.005,
    15.698, 17.023, 17.804, 18.555,
    19.528, 19.874, 20.551, 21.259,
    22.732, 23.468, 24.109, 25.531,
    26.193, 26.871, 28.315, 29.000,
    29.817, 30.775, 31.121, 31.769,
    32.513, 34.931, 35.100, 35.461,
    35.781, 36.150, 36.340, 36.531,
    36.870, 37.211, 37.601, 37.961,
    38.301, 38.596, 38.961, 39.337,
    39.711, 40.071, 40.431, 40.600,
    40.751, 41.085, 41.406, 41.800,
    41.971, 42.140, 42.520, 42.856,
    43.210, 43.590, 43.946, 44.287,
    44.570, 44.955, 45.297, 45.656,
    46.001, 46.191, 46.376, 46.725,
    47.071, 47.411, 47.600, 47.770,
    48.111, 48.461, 48.650, 48.836,
    49.180, 49.540, 49.895, 50.246,
    50.420, 50.590, 50.946, 51.311,
    51.630, 51.830, 52.020, 52.320,
    52.680, 53.036, 53.206, 53.376,
    53.750, 54.056, 54.486, 54.826,
    55.201, 55.521, 55.880, 56.050,
    56.276, 56.600
    ],

    'hopes' //AQUI VOCE COLOCA O NOME DA MUSICA, DE ACORDO COMO ELA ESTA ESCRITA NO ARQUVIO
);

const game_serenata = new Game(
    [
        Music[3]
    ],
    [
        Music[2]
    ],

    'SerenataExistencialista'
)

const game_mary_on_cross = new Game(
    [
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)],
        m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)], m.notes[Math.floor(Math.random() * 15)]
        

    ],[
        2.373, 2.562, 2.769, 2.992,
        3.482, 3.708, 4.162, 4.382,
        5.082, 5.292, 5.573, 5.832,
        6.063, 6.282, 6.492, 6.722,
        7.132, 7.362, 7.873, 8.088,
        8.602, 8.809, 9.012, 9.242,
        9.452, 9.712, 9.953, 10.162,
        10.413, 11.032, 11.539, 11.742,
        12.423, 12.913, 13.153, 13.382,
        13.612, 13.848, 14.063, 14.512,
        14.738, 14.962, 15.228, 15.452,
        15.713, 15.958, 16.222, 16.432,
        16.673, 16.882, 17.132, 17.332,
        17.578, 17.822, 18.442, 18.932,
        19.142, 19.822, 20.362, 20.552,
        20.782, 21.009, 21.472, 21.702,
        21.932, 22.168, 22.402, 22.638,
        22.869, 23.112, 23.342, 23.563,
        23.788, 24.018, 24.238, 24.492,
        24.692, 24.938, 25.132, 25.857,
        26.332, 26.562, 27.253, 27.738,
        27.932, 28.162, 28.402, 28.612,
        28.852, 29.322, 29.532, 29.762,
        30.002, 30.208, 30.432, 30.678,
        30.908, 31.132, 31.362, 31.602,
        31.882, 32.132, 32.352, 32.582,
        33.242, 33.732, 33.952, 34.628,
        35.082, 35.592, 35.798, 36.013,
        36.268, 36.703, 36.913, 37.152,
        37.363, 37.588, 37.832, 38.062,
        38.323, 38.508, 38.743, 38.978,
        39.243, 39.493, 39.703, 39.942,
        40.597, 43.648, 44.042, 44.268,
        45.442, 45.888, 46.113, 48.678,
        50.612, 52.652, 54.722, 56.688,
        58.538, 60.572, 62.532, 62.773,
        62.982, 63.212, 63.432, 63.712,
        63.942, 64.132, 64.432, 64.862,
        65.282, 65.503, 66.142, 66.817,
        67.052, 67.613, 68.013, 68.719,
        68.932, 69.402, 69.872, 70.623,
        70.828, 71.278, 71.728, 72.372,
        72.602, 73.052, 73.562, 74.222,
        74.443, 74.898, 75.402, 76.062,
        76.312, 76.758, 77.288, 77.948,
        78.188, 78.638, 79.088, 79.752,
        79.982, 80.473, 80.902, 81.578,
        81.823, 82.288, 82.732, 83.402,
        83.672, 84.193, 84.632, 85.119,
        85.338, 85.572, 86.018, 86.252,
        86.488, 87.173, 87.412, 88.147,
        88.353, 88.992, 89.238, 89.972,
        92.920, 93.125, 93.356, 93.575,
        93.805, 94.501, 94.706, 95.176,
        95.685, 96.365, 96.576, 97.020,
        97.495, 98.171, 98.375, 98.831,
        99.335, 100.055, 100.281, 100.751,
        101.225, 101.915, 102.125, 102.575,
        103.105, 103.740, 103.965, 104.405,
        104.911, 105.565, 105.815, 106.306,
        106.791, 107.435, 107.656, 108.091,
        108.585
        
    ], 'MaryOnCroos'
)

const game_sweet_child = new Game(
    [],[], 'SweetChildOMine'
)

const game_the_adults = new Game(
    [],[], 'TheAdultsAreTalking'
)

const game_yoko = new Game(
    [],[], 'Yoko'
)

const wallpaper = document.querySelector('.wallpaper');
const wallpaper2 = document.querySelector('.wallpaper2');

const k = document.querySelector('.staaaaart');
let count = 0;

k.addEventListener('click', () => {
    musicas[musica_selected].audio.play(); ///////////////////////
    musicas[musica_selected].startGame(); ////////////////////////
    k.style.display = 'none'; 
    
    wallpaper.style.animationName = 'queda';
    wallpaper2.style.animationName = 'queda2';

})

document.addEventListener('keypress', (e)=>{
    count++;

    let el = e.keyCode;
    if((el == 32 || el == 13) && count === 1){ 
        musicas[musica_selected].audio.play(); ///////////////////////////////
        musicas[musica_selected].startGame(); ////////////////////////////
    k.style.display = 'none'; 
    }
})
const musicas = [
    game_505,
    game_black_sheep,
    game_como_tudo_deve_ser,
    game_crazytrain,
    game_from_the_star,
    game_hopes,
    game_mary_on_cross,
    game_serenata,
    game_sweet_child,
    game_the_adults,
    game_yoko
]