import Game from "./game.js"; 
import Matriz from "./matriz.js";
const m = new Matriz;


const FiveOFive = new Game(
    [

        //m.notes[1], m.notes[0], m.notes[1],
        //m.notes[0], m.notes[1], m.notes[0],
        //m.notes[3], m.notes[1], m.notes[2], m.notes[0], m.notes[3]

        m.notes[1], m.notes[0], m.notes[1],    
        m.notes[1], m.notes[0], m.notes[1],
        m.notes[0], m.notes[1], m.notes[0],
        m.notes[1], m.notes[0], m.notes[1],
        m.notes[0], m.notes[1], m.notes[0],
        m.notes[1], m.notes[0], m.notes[1],

        m.notes[2], m.notes[1], m.notes[3],

        m.notes[3], m.notes[1], m.notes[2], m.notes[0], m.notes[3],

        m.notes[2], m.notes[3], m.notes[2], m.notes[3],

        m.notes[0], m.notes[1], m.notes[0],
        m.notes[3], m.notes[1], m.notes[2], m.notes[0], m.notes[3],
        m.notes[0], m.notes[1], m.notes[0],
        m.notes[1], m.notes[0], m.notes[1],  
        m.notes[3], m.notes[1], m.notes[2], m.notes[0], m.notes[3],
        m.notes[1], m.notes[0], m.notes[1],

        m.notes[0], m.notes[1], m.notes[2],
        m.notes[1], m.notes[0], m.notes[1],
        m.notes[1], m.notes[0], m.notes[3], m.notes[2], m.notes[1],

        m.notes[1],

        m.notes[15],m.notes[15], m.notes[5], 

        //refrão

        m.notes[3], m.notes[2], m.notes[0], m.notes[1],
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 

        
        m.notes[0], m.notes[3], m.notes[2], m.notes[1], 
        m.notes[0], m.notes[3], m.notes[2], m.notes[1], 
        m.notes[0], m.notes[3], m.notes[2], m.notes[1], 
        
        m.notes[3], m.notes[2], m.notes[0], m.notes[1],
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 

        
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 

        
        m.notes[3], m.notes[2], m.notes[0], m.notes[1],
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 

        
        m.notes[3], m.notes[2], m.notes[0], m.notes[1],
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 

        m.notes[0], m.notes[3], m.notes[2], m.notes[1], 
        m.notes[0], m.notes[3], m.notes[2], m.notes[1], 
        m.notes[0], m.notes[3], m.notes[2], m.notes[1], 

        
        
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], 
        
        m.notes[3], m.notes[2], m.notes[0], m.notes[1],
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 

        
        m.notes[3], m.notes[2], m.notes[0], m.notes[1],
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 
        m.notes[3], m.notes[2], m.notes[0], m.notes[1], 


        

        // m.notes[3], m.notes[2], m.notes[3],
        // m.notes[3], m.notes[2], m.notes[3],
        // m.notes[3], m.notes[2], m.notes[3],
        // m.notes[2], m.notes[1], m.notes[3],
        // m.notes[2], m.notes[1], m.notes[3],
        // m.notes[2], m.notes[1], m.notes[2],
        // m.notes[2], m.notes[1], m.notes[2], 
        // m.notes[3], m.notes[2], m.notes[3],     
        


    ], 
    [
        1.53,  1.78,  1.97,  5.05,  5.29,
        5.52,  8.42,  8.65,  8.83,  11.88,
        12.11, 12.34, 15.41, 15.69, 16.06,
        18.87, 19.12, 19.38, 21.72, 21.95,
        23.19, 23.40, 23.65, 23.82, 23.86,
        24.72, 25.02, 25.30, 25.81, 27.97,
        28.18, 28.37, 29.78, 29.99, 30.27,
        30.55, 30.92, 31.59, 31.90, 32.19,
        34.73, 34.99, 35.21, 36.65, 36.82,
        37.07, 37.38, 37.61, 38.53, 38.75,
        38.97, 40.09, 40.41, 40.65, 41.76,
        42.02, 42.30, 43.23, 43.51, 43.81,
        44.09, 44.38, 45.06, 45.48, 45.69,
        46.45, 46.73, 49.75, 50.03, 50.68,
        51.10, 51.61, 52.02, 52.42, 52.91,
        53.33, 53.79, 54.40, 54.84, 55.21,
        55.67, 56.25, 56.67, 56.90, 57.11,
        57.51, 57.88, 58.25, 58.83, 59.27,
        59.78, 60.08, 60.48, 60.83, 61.27,
        61.47, 61.69, 62.08, 62.45, 63.22,
        63.92, 64.24, 64.52, 64.63, 64.89,
        65.21, 65.68, 65.86, 66.24, 66.47,
        67.05, 67.51, 68.05, 68.26, 68.91,
        69.11, 69.47, 70.07, 70.27, 70.67,
        70.88, 71.06, 71.49, 71.65, 72.20,
        72.65, 73.63, 73.94, 74.18, 74.57,
        74.83, 75.06, 75.32, 75.80, 76.01,
        76.20, 76.73, 76.97, 77.38, 77.66,
        77.84, 78.27, 78.50, 78.82, 79.22,
        79.49, 79.98, 80.22, 80.45, 80.93,
        81.14, 81.33, 81.77, 82.00, 82.19,
        82.67, 82.84, 83.42, 83.61, 84.05,
        84.54, 84.77, 84.93, 85.26, 85.46,
        85.63, 86.04, 86.23, 86.93, 87.11,
        87.30, 87.86, 88.11, 88.67, 88.85,
        89.43, 89.64, 90.20, 90.41, 91.13,
        91.32, 91.85, 92.06, 92.27, 92.80,
        93.01, 93.24, 93.75, 93.96, 94.15,
        94.50, 94.82, 95.26, 95.66, 95.91,
        96.23, 96.62, 96.80, 97.03, 97.33,
        97.63, 98.01, 98.30, 98.68, 98.78,
        99.21, 99.40, 99.67, 100.02, 100.23,
        100.44, 100.88, 101.09, 101.25, 101.56,
        102.02, 102.30, 102.53, 102.79, 103.07,
        103.50, 103.88, 104.16, 104.53, 104.95,
        105.43, 105.66, 105.83, 106.08, 106.62,
        107.13, 107.34, 107.55, 107.78, 108.01,
        108.45, 109.08, 109.43, 109.68, 110.01,
        110.38, 111.08, 111.28, 111.38, 111.68,

    ], 
    
    '505_corte'
)

const BlackSheep = new Game(
    [
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[4], m.notes[2], m.notes[0], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[1], m.notes[2], m.notes[0], m.notes[2],
        m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[0],
        m.notes[0], m.notes[0], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[1], m.notes[2],
        m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[0],
        m.notes[2], m.notes[0], m.notes[0], m.notes[0], m.notes[3],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[1], m.notes[0], m.notes[0], m.notes[0],
        m.notes[2], m.notes[0], m.notes[2], m.notes[0], m.notes[2],
        m.notes[0], m.notes[2], m.notes[1], m.notes[2], m.notes[3], 
        m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2],
        m.notes[3], m.notes[2], m.notes[3], m.notes[2], m.notes[1],
        m.notes[2], m.notes[1], m.notes[2], m.notes[1], m.notes[2],
        m.notes[1], m.notes[2], m.notes[1], m.notes[2], m.notes[3],
        m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2],
        m.notes[3], m.notes[2], m.notes[1], m.notes[0], m.notes[1],
        m.notes[0], m.notes[1], m.notes[0], m.notes[1], m.notes[3],
        m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2],
        m.notes[3], m.notes[2], m.notes[1], m.notes[2], m.notes[1],
        m.notes[2], m.notes[1], m.notes[2], m.notes[1], m.notes[2],
        m.notes[1], m.notes[2], m.notes[3], m.notes[2], m.notes[3],
        m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2],
        m.notes[1], m.notes[4], m.notes[4], m.notes[4], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[5], m.notes[5], m.notes[4],
        m.notes[4], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[5], m.notes[5],
        m.notes[4], m.notes[4], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[5],
        m.notes[5], m.notes[4], m.notes[4], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0],
        m.notes[4], m.notes[1], m.notes[2], m.notes[3],
    ], 
    [
        78.586,	78.356,	77.926,	77.686,	77.456,	
        77.196,	76.966,	76.706,	76.476,	76.251,	
        76.026,	75.766,	75.536,	75.291,	75.066,	
        74.836,	74.616,	74.352,	74.146,	73.862,	
        73.636,	73.406,	73.186,	72.916,	72.676,	
        72.446,	72.222,	71.956,	71.736,	71.546,	
        71.316,	71.076,	70.831,	70.562,	70.306,	
        70.056,	69.816,	69.646,	69.396,	69.156,	
        68.926,	68.686,	68.472,	68.216,	67.986,	
        67.746,	67.516,	67.256,	67.046,	66.786,	
        66.551,	66.312,	66.066,	65.826,	65.616,	
        65.356,	65.126,	64.916,	64.696,	64.416,	
        64.241,	63.996,	63.776,	63.506,	63.286,	
        63.056,	62.796,	62.566,	62.326,	62.096,	
        61.856,	61.626,	61.381,	61.136,	60.911,	
        60.666,	60.436,	60.192,	59.966,	59.722,	
        59.476,	59.256,	59.026,	58.766,	58.571,	
        58.336,	58.086,	57.826,	57.596,	57.336,	
        57.106,	56.866,	56.652,	56.446,	56.206,	
        55.956,	55.696,	55.506,	55.266,	54.996,	
        54.772,	54.526,	54.286,	54.036,	53.816,	
        53.566,	53.346,	53.076,	52.856,	52.646,	
        52.421,	52.156,	51.916,	51.701,	51.476,	
        51.212,	50.992,	50.746,	50.502,	50.272,	
        50.046,	49.806,	49.596,	49.376,	49.126,	
        48.882,	48.636,	48.376,	48.111,	47.866,	
        47.676,	47.244,	46.809,	46.319,	45.825,	
        45.339,	44.985,	44.870,	44.419,	43.950,	
        43.460,	42.990,	42.540,	42.069,	41.600,	
        41.110,	40.660,	40.170,	39.700,	39.230,	
        38.740,	38.266,	37.759,	37.290,	36.850,	
        36.379,	35.950,	35.439,	34.985,	34.500,	
        34.069,	33.559,	33.109,	32.615,	32.109,	
        31.659,	31.190,	30.695,	30.230,	29.779,	
        29.249,	28.819,	28.330,	27.905,	27.439,	
        26.930,	26.479,	26.009,	25.560,	25.069,	
        24.600,	24.130,	23.640,	23.189,	22.700,	
        22.225,	21.739,	21.319,	20.835,	20.330,	
        19.859,	19.400,	18.914,	18.430,	17.969,	
        17.540,	17.300,	17.069,	16.810,	16.559,	
        16.335,	16.050,	15.790,	15.579,	15.340,	
        14.869,	14.660,	14.435,	13.974,	13.740,	
        13.510,	13.249,	13.035,	12.780,	12.570,	
        12.309,	12.080,	11.840,	11.569,	11.095,	
        10.879,	10.644,	10.180,	9.956,	9.710,	
        9.479,	9.239,	9.029,	8.789,	8.540,	
        8.319,	8.049,	7.809,	7.339,	7.090,	
        6.869,	6.400,	6.170,	5.889,	5.660,	
        4.990,	4.759,	4.500,	4.270,	4.075,	
        3.590,	3.369,	3.135,	2.759,	2.580	
    ], 
    
    'BlackSheep'
)

const BringMeToLife = new Game(
    [
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3]
    ], 
    [
        91.779,	 91.353,	 91.208,	 90.903,	 90.748,	 90.428,	 90.298,	 89.978,	 89.848,	 89.571,	 89.422,	 89.122,	 88.987,	 88.632,	 88.477,	 88.182,	 88.032,	 87.732,	 87.577,	 87.432,	 86.328,	 86.178,	 85.878,	 85.743,	 85.388,	 85.238,	 84.938,	 84.788,	 84.417,	 84.262,	 83.977,	 83.832,	 83.512,	 83.341,	 83.002,	 82.851,	 82.532,	 82.382,	 81.898,	 81.763,	 81.329,	 81.159,	 80.855,	 80.709,	 80.389,	 80.220,	 79.959,	 79.789,	 79.438,	 79.288,	 78.928,	 78.778,	 78.478,	 78.308,	 77.988,	 77.838,	 77.518,	 77.348,	 76.842,	 76.687,	 76.257,	 76.108,	 75.823,	 75.677,	 75.373,	 75.208,	 74.958,	 74.807,	 73.946,	 73.307,	 72.666,	 72.067,	 73.841,	 73.221,	 72.546,	 71.946,	 70.998,	 70.872,	 70.572,	 70.417,	 70.077,	 69.912,	 69.592,	 69.437,	 68.861,	 68.715,	 66.921,	 66.495,	 66.365,	 64.551,	 63.642,	 63.456,	 63.172,	 63.002,	 62.663,	 62.477,	 61.933,	 60.932,	 60.798,	 60.482,	 60.312,	 59.992,	 59.822,	 59.502,	 59.367,	 58.742,	 58.592,	 56.769,	 56.374,	 56.234,	 56.084,	 54.237,	 51.861,	 49.877,	 49.262,	 47.382,	 46.722,	 44.862,	 44.292,	 41.629,	 39.787,	 39.227,	 37.232,	 36.672,	 34.631,	 34.032,	 31.817,	 31.684,	 31.387,	 31.218,	 30.968,	 30.818,	 30.558,	 30.387,	 29.140,	 28.990,	 28.670,	 28.516,	 28.180,	 28.030,	 27.705,	 27.580,	 26.767,	 26.620,	 26.296,	 26.171,	 25.867,	 25.721,	 25.441,	 25.301,	 24.080,	 23.946,	 23.650,	 23.496,	 23.160,	 23.030,	 22.690,	 22.540,	 19.056,	 18.927,	 18.606,	 18.466,	 18.136,	 17.971,	 17.626,	 17.481,	 16.634,	 16.504,	 16.164,	 16.014,	 15.694,	 15.580,	 15.159,	 14.990,	 13.970,	 13.856,	 13.520,	 13.391,	 13.030,	 12.900,	 12.526,	 12.390,	
    ], 
    
    'BringMeToLife'
)

const ComoTudoDeveSer = new Game(
    [
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[2], m.notes[1], m.notes[8], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[1], m.notes[3], 
    ], 
    [
        100.625, 100.420, 100.199,	99.990,	99.799,	99.595,	99.234,	99.049,	98.689,	98.276,	97.859,	97.489,	97.299,	97.090,	96.879,	96.679,	96.505,	96.149,	95.904,	95.529,	95.149,	94.760,	94.549,	94.360,	94.155,	93.970,	93.759,	93.569,	93.395,	93.025,	92.649,	92.460,	92.099,	91.685,	91.275,	91.069,	90.899,	90.519,	90.330,	89.879,	89.469,	89.279,	88.895,	88.470,	88.059,	87.870,	87.660,	87.210,	86.675,	86.285,	86.099,	85.665,	85.245,	84.839,	84.630,	84.439,	83.985,	83.439,	83.064,	82.860,	82.480,	82.049,	81.619,	81.449,	81.240,	80.845,	80.299,	79.906,	79.719,	79.299,	78.885,	78.509,	78.319,	78.099,	77.735,	77.195,	76.759,	76.569,	76.139,	75.710,	75.289,	74.919,	74.689,	74.515,	74.125,	73.785,	73.409,	72.955,	72.529,	72.130,	71.939,	71.739,	71.299,	70.759,	70.359,	70.170,	69.759,	69.359,	68.950,	68.755,	68.555,	68.139,	67.630,	67.215,	67.049,	66.599,	66.235,	65.789,	65.599,	65.409,	64.979,	64.449,	64.275,	63.889,	63.465,	63.076,	62.639,	62.439,	62.249,	61.799,	61.289,	60.889,	60.705,	60.270,	59.860,	59.446,	59.260,	59.049,	58.649,	58.129,	57.766,	57.579,	57.144,	56.749,	56.315,	56.129,	55.939,	55.490,	54.979,	54.569,	54.359,	53.925,	53.479,	53.079,	52.889,	52.710,	52.220,	51.745,	51.349,	51.179,	50.770,	50.369,	49.939,	49.745,	49.559,	49.125,	48.600,	48.206,	48.020,	47.615,	47.209,	46.830,	46.639,	46.459,	46.039,	45.515,	45.115,	44.930,	44.539,	44.136,	43.760,	43.575,	43.385,	42.939,	42.450,	42.089,	41.899,	41.520,	41.130,	40.745,	40.560,	40.355,	39.960,	39.435,	39.060,	38.869,	38.419,	38.075,	37.686,	37.499,	37.286,	36.860,	36.370,	35.989,	35.799,	35.405,	34.989,	34.599,	34.410,	34.195,	33.790,	33.299,	32.919,	32.745,	32.280,	31.905,	31.510,	31.320,	31.129,	30.679,	30.155,	29.779,	29.590,	29.195,	28.779,	28.399,	28.215,	28.009,	27.576,	27.069,	26.709,	26.535,	26.090,	25.676,	25.279,	25.089,	24.900,	24.429,	23.905,	23.530,	23.355,	22.929,	22.505,	22.099,	21.889,	21.679,	21.249,	20.690,	20.289,	20.099,	19.879,	19.705,	19.259,	18.859,	18.649,	18.449,	18.010,	17.490,	17.110,	16.935,	16.680,	16.465,	16.059,	15.640,	15.449,	15.249,	14.829,	14.290,	13.909,	13.715,	13.460,	13.290,	12.875,	12.439,	12.270,	12.065,	11.630,	11.090,	10.725,	10.500,	10.300,	10.130,	9.730,	9.295,	9.090,	8.900,	8.470,	7.940,	7.530,	7.320,	7.099,	6.926,	6.459,	6.055,	5.870,	5.665,	5.209,	4.706,	4.270,	4.029,	3.480,	3.289,	2.880,	2.690,	2.495,	2.070,	1.560,	1.169,	0.976,	0.696,	0.525,0.340,
    ], 
    
    'ComoTudoDeveSer'
)

const CrazyTrain = new Game(
    [
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[2], m.notes[1], m.notes[8], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[1],
    ], 
    [
        4.365, 5.909, 6.129, 6.810, 7.039, 7.714, 7.935, 9.514, 9.729, 10.369, 10.629, 11.285, 11.534, 13.099, 13.309, 13.979, 14.209, 14.869, 15.089, 16.659, 16.844, 17.485, 17.690, 18.429, 18.629, 18.860, 19.099, 19.349, 19.569, 19.794, 20.009, 20.249, 20.439, 20.649, 20.849, 21.094, 21.309, 21.509, 21.719, 21.965, 22.415, 22.635, 22.864, 23.089, 23.299, 23.549, 23.765, 23.979, 24.169, 24.409, 24.639, 24.859, 25.085, 25.299, 25.539, 25.985, 26.179, 26.425, 26.644, 26.875, 27.079, 27.309, 27.519, 27.739, 27.969, 28.209, 28.415, 28.649, 28.849, 29.095, 29.489, 29.719, 29.950, 30.189, 30.419, 30.639, 30.850, 31.715, 32.539, 32.749, 32.979, 33.579, 34.290, 34.989, 35.609, 35.819, 36.329, 36.529, 37.184, 37.865, 38.529, 39.149, 39.339, 39.579, 39.809, 40.085, 40.705, 41.345, 41.989, 42.709, 43.140, 43.349, 43.555, 44.159, 44.834, 45.509, 46.185, 46.619, 46.829, 47.039, 47.679, 48.385, 49.009, 49.614, 49.789, 50.065, 50.275, 50.515, 51.160, 51.819, 52.439, 53.079, 53.289, 53.525, 53.719, 53.949, 54.569, 55.339, 55.979, 56.639, 57.090, 57.315, 57.539, 58.104, 58.799, 59.459, 60.159, 60.379, 60.609, 60.798, 61.039, 61.659, 62.319, 63.034, 63.655, 63.885, 64.105, 64.319, 64.559, 65.165, 65.805, 66.459, 66.965, 67.159, 67.609, 67.799, 68.044, 68.664, 69.154, 70.169, 71.060, 71.274, 71.489, 72.169, 72.639, 73.779, 73.949, 74.379, 74.569, 75.224, 75.679, 76.114, 76.753, 76.959, 77.169, 77.699, 78.049, 78.279, 78.409, 78.555, 78.639, 78.789, 78.894, 79.009, 79.193, 79.408, 79.559, 79.689, 79.855, 80.009, 80.109, 80.274, 80.383, 80.519, 80.669, 80.799, 80.949, 81.078, 81.219, 81.384, 81.555, 82.249, 82.869, 83.059, 84.584, 84.998
    ], 
    
    'CrazyTrain'
)

const FromTheStart = new Game(
    [

    ], 
    [

    ], 
    
    'FromTheStart'
)


const HopesAndDreams = new Game(  
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
        m.notes[1],
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

const MaryOnACroos = new Game(
    [
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[2], m.notes[1], m.notes[8], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        
    ], 
    [
        108.585,108.091,107.656,107.435,106.791,106.306,105.815,105.565,104.911,104.405,103.965,103.740,103.105,102.575,102.125,101.915,101.225,100.751,100.281,100.055,99.335,98.831,98.375,98.171,97.495,97.020,96.576,96.365,95.685,95.176,94.706,94.501,93.805,93.575,93.356,93.125,92.920,89.972,89.238,88.992,88.353,88.147,87.412,87.173,86.488,86.252,86.018,85.572,85.338,85.119,84.632,84.193,83.672,83.402,82.732,82.288,81.823,81.578,80.902,80.473,79.982,79.752,79.088,78.638,78.188,77.948,77.288,76.758,76.312,76.062,75.402,74.898,74.443,74.222,73.562,73.052,72.602,72.372,71.728,71.278,70.828,70.623,69.872,69.402,68.932,68.719,68.013,67.613,67.052,66.817,66.142,65.503,65.282,64.862,64.432,64.132,63.942,63.712,63.432,63.212,62.982,62.773,62.532,60.572,58.538,56.688,54.722,52.652,50.612,48.678,46.113,45.888,45.442,44.268,44.042,43.648,40.597,39.942,39.703,39.493,39.243,38.978,38.743,38.508,38.323,38.062,37.832,37.588,37.363,37.152,36.913,36.703,36.268,36.013,35.798,35.592,35.082,34.628,33.952,33.732,33.242,32.582,32.352,32.132,31.882,31.602,31.362,31.132,30.908,30.678,30.432,30.208,30.002,29.762,29.532,29.322,28.852,28.612,28.402,28.162,27.932,27.738,27.253,26.562,26.332,25.857,25.132,24.938,24.692,24.492,24.238,24.018,23.788,23.563,23.342,23.112,22.869,22.638,22.402,22.168,21.932,21.702,21.472,21.009,20.782,20.552,20.362,19.822,19.142,18.932,18.442,17.822,17.578,17.332,17.132,16.882,16.673,16.432,16.222,15.958,15.713,15.452,15.228,14.962,14.738,14.512,14.063,13.848,13.612,13.382,13.153,12.913,12.423,11.742,11.539,11.032,10.413,10.162,9.953,9.712,9.452,9.242,9.012,8.809,8.602,8.088,7.873,7.362,7.132,6.722,6.492,6.282,6.063,5.832,5.573,5.292,5.082,4.382,4.162,3.708,3.482,2.992,2.769,2.562,2.373
    ], 
    
    'MaryOnCroos'
)

const MasterOfPuppets = new Game(
    [

    ], 
    [

    ], 
    
    'MasterOfPuppets'
)

const SerenataExistencialista = new Game(
    [
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[2], m.notes[1], m.notes[8], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[3],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3],
    ],
    [
        84.545,84.825,94.320,94.170,93.740,93.210,92.630,92.360,92.180,91.690,91.050,90.480,90.219,89.970,89.840,89.406,88.840,88.260,87.960,87.746,87.600,87.239,86.655,86.100,85.830,85.590,85.440,85.076,84.515,83.990,83.720,83.480,83.330,82.900,82.350,81.800,81.540,81.325,81.160,80.710,80.185,79.660,79.380,79.126,78.980,78.585,78.020,77.720,77.476,77.210,76.970,76.800,76.400,75.890,75.350,75.066,74.820,74.650,74.240,74.090,73.710,71.546,71.240,71.000,70.600,70.165,69.796,69.400,68.850,68.040,67.306,66.820,65.936,65.070,64.540,63.680,62.906,62.360,61.810,61.550,61.305,60.800,60.515,60.360,60.120,59.950,59.690,59.435,59.140,58.596,58.350,58.200,57.970,57.840,57.575,57.315,57.090,56.470,56.200,56.050,55.790,55.355,54.845,54.319,53.995,53.739,53.510,53.340,53.156,52.680,52.160,51.890,51.610,51.330,51.160,50.966,50.540,50.006,49.480,49.195,48.980,48.856,48.405,47.850,47.315,47.000,46.770,46.615,46.210,45.660,45.100,44.820,44.590,44.440,44.026,43.495,42.950,42.650,42.390,42.270,41.856,41.296,40.790,40.540,40.300,40.145,39.695,39.165,38.620,38.340,38.080,37.960,37.530,36.929,36.040,35.910,35.180,34.580,34.196,33.800,33.240,32.675,32.410,32.145,31.919,31.770,31.600,30.846,30.230,29.850,29.455,28.910,28.380,28.080,27.860,27.630,27.480,27.250,26.705,25.920,25.495,25.125,24.595,24.020,23.785,23.530,23.390,23.240,22.920,22.210,21.640,21.225,20.820,20.250,19.706,19.435,19.155,18.985,18.780,18.595,18.050,17.280,16.880,15.940,15.376,15.110,14.830,14.620,14.470,14.280,14.000,13.460,12.946,12.550,12.155,11.650,11.070,10.870,10.720,10.550,10.380,10.226,10.061,9.946,9.696,9.360,8.590,8.206,7.801,7.310,6.671,6.500,6.350,6.221,6.071,5.921,5.786,5.631,5.350,4.806,4.296,3.880,3.471,2.976,2.400,1.891,1.716,1.570,1.400,1.270,1.100,0.971,0.831,0.680,0.530,0.400,0.250,
    ],

    'SerenataExistencialista'
)

const SweetChildOMine = new Game(
    [

    ], 
    [

    ], 
    
    'SweetChildOMine'
)

const Judas = new Game(
    [
        m.notes[14], m.notes[5], m.notes[1], m.notes[5], m.notes[4], m.notes[2], m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1], m.notes[4], m.notes[4], m.notes[2], m.notes[1], m.notes[4], m.notes[2], m.notes[2], m.notes[0], m.notes[1], m.notes[8], m.notes[7], m.notes[2], m.notes[2], m.notes[7], m.notes[3], m.notes[1], m.notes[0], m.notes[0], m.notes[0], m.notes[3], m.notes[1], m.notes[4], m.notes[2], m.notes[2], m.notes[1], m.notes[0], m.notes[0], m.notes[0], m.notes[1], m.notes[0], m.notes[0], m.notes[0], m.notes[1], m.notes[0], m.notes[0], m.notes[0], m.notes[1], m.notes[0], m.notes[0], m.notes[0], m.notes[1], m.notes[6], m.notes[2], m.notes[6], m.notes[0], m.notes[1], m.notes[2], m.notes[3], m.notes[0], m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[1], m.notes[1], m.notes[1], m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[5], m.notes[1], m.notes[0], m.notes[2], m.notes[2], m.notes[4], m.notes[1], m.notes[2], m.notes[0], m.notes[1], m.notes[2], m.notes[0], m.notes[2], m.notes[1], m.notes[0], m.notes[2], m.notes[0], m.notes[0], m.notes[3], m.notes[5], m.notes[2], m.notes[1], m.notes[4], m.notes[2], m.notes[2], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[4], m.notes[2], m.notes[2], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[4], m.notes[2], m.notes[2], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[4], m.notes[2], m.notes[2], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[4], m.notes[3], m.notes[3], m.notes[1], m.notes[1], m.notes[1], m.notes[1], m.notes[2], m.notes[2], m.notes[1], m.notes[1], m.notes[4], m.notes[3], m.notes[3], m.notes[1], m.notes[1], m.notes[1], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[0], m.notes[0], m.notes[1], m.notes[1], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[0], m.notes[0], m.notes[0], m.notes[1], m.notes[3], m.notes[4], m.notes[1], m.notes[3], m.notes[2], m.notes[3], m.notes[1], m.notes[14],m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[6], m.notes[3], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[6], m.notes[6], m.notes[3], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[6], m.notes[1], m.notes[2], m.notes[0], m.notes[1], m.notes[1], m.notes[1], m.notes[0], m.notes[3], m.notes[0], m.notes[3], m.notes[0], m.notes[3], m.notes[5], m.notes[1], m.notes[4], m.notes[1], m.notes[4], m.notes[1], m.notes[4], m.notes[0], m.notes[3], m.notes[0], m.notes[3], m.notes[0], m.notes[3], m.notes[5], m.notes[1], m.notes[4], m.notes[1], m.notes[4], m.notes[1], m.notes[4], m.notes[3], m.notes[0], m.notes[3], m.notes[0], m.notes[3], m.notes[5], m.notes[1], m.notes[4], m.notes[1], m.notes[4], m.notes[1], m.notes[4], m.notes[3], m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2], m.notes[3], m.notes[2], m.notes[1], m.notes[0], m.notes[1], m.notes[0], m.notes[1], m.notes[0], m.notes[1], m.notes[0], m.notes[3], m.notes[3], m.notes[3], m.notes[2], m.notes[1], m.notes[0], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[4], m.notes[2], m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[4], m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[4], m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[0], m.notes[2], m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[0], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[3], m.notes[2], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[2], m.notes[2], m.notes[2], m.notes[1], m.notes[1], m.notes[1], m.notes[5], m.notes[14],m.notes[5], m.notes[14],
    ], 
    [
         121.261, 121.106, 120.937, 120.767, 120.596, 120.262, 119.772, 119.336, 117.074, 116.625, 116.170, 115.681, 115.225, 114.775, 114.325, 113.875, 113.424, 112.934, 112.460, 112.040, 110.144, 108.321, 106.515, 104.615, 104.418, 104.253, 104.137, 103.993, 103.858, 103.372, 103.222, 103.108, 102.973, 102.879, 102.652, 102.409, 102.183, 101.978, 101.788, 101.433, 101.302, 101.188, 101.068, 100.847, 100.602, 100.378, 100.147, 99.922, 99.452, 99.303, 99.188, 98.913, 98.678, 98.398, 98.213, 98.038, 97.662, 97.512, 97.383, 96.968, 96.838, 96.708, 96.368, 96.145, 96.008, 95.879, 95.744, 95.618, 95.504, 95.294, 95.088, 94.788, 94.618, 94.428, 94.088, 93.978, 93.864, 93.718, 93.489, 93.264, 93.058, 92.849, 92.588, 92.268, 92.138, 92.018, 91.904, 91.608, 91.329, 91.098, 90.908, 90.738, 90.384, 90.234, 90.098, 89.767, 89.657, 89.538, 89.407, 89.108, 88.993, 88.868, 88.507, 88.378, 88.248, 87.943, 87.718, 87.508, 87.288, 87.038, 86.697, 86.588, 86.478, 86.358, 86.138, 85.888, 85.623, 85.397, 85.157, 84.807, 84.656, 84.507, 84.024, 83.588, 83.154, 82.689, 82.239, 81.789, 81.319, 80.859, 80.404, 79.919, 79.448, 78.999, 78.569, 78.099, 77.659, 77.175, 76.718, 76.264, 75.799, 75.364, 74.894, 74.429, 73.959, 73.519, 73.068, 72.599, 72.149, 71.678, 71.229, 70.774, 70.299, 69.829, 69.369, 68.940, 68.509, 68.089, 67.569, 67.124, 66.639, 66.169, 65.739, 65.289, 64.839, 64.399, 63.949, 63.459, 63.004, 62.555, 62.069, 61.619, 61.164, 60.679, 60.239, 59.786, 59.279, 58.865, 58.399, 57.949, 57.509, 57.019, 56.569, 56.119, 55.629, 55.195, 53.778, 53.338, 52.875, 52.459, 51.969, 51.500, 51.050, 50.615, 50.160, 49.709, 49.239, 48.770, 48.300, 47.829, 47.379, 46.946, 46.475, 46.040, 45.589, 45.120, 44.666, 44.220, 43.744, 43.310, 42.835, 42.364, 41.859, 41.429, 40.960, 40.771, 40.556, 40.290, 40.080, 39.967, 39.820, 39.686, 39.420, 39.221, 39.101, 38.971, 38.816, 38.651, 38.236, 37.731, 37.296, 36.885, 36.580, 36.430, 36.260, 35.960, 35.530, 35.040, 34.570, 34.120, 33.650, 33.210, 32.834, 32.650, 32.520, 32.270, 31.840, 31.365, 30.920, 30.445, 29.994, 29.540, 29.190, 29.035, 28.900, 28.750, 28.565, 28.170, 27.735, 27.270, 26.829, 26.325, 25.926, 25.586, 25.407, 25.286, 25.177, 25.027, 24.932, 24.647, 24.512, 24.402, 24.142, 24.042, 23.896, 23.685, 23.480, 23.311, 23.070, 22.651, 22.181, 21.786, 21.616, 21.451, 21.220, 20.771, 20.300, 19.958, 19.812, 19.622, 19.452, 19.042, 18.621, 18.195, 18.045, 17.895, 17.781, 17.635, 17.391, 17.235, 17.105, 16.971, 16.845, 16.695, 16.581, 16.356, 16.126, 15.776, 15.305, 14.942, 14.771, 14.525, 14.326, 13.961, 13.512, 13.090, 12.925, 12.700, 12.515, 12.156, 11.665, 11.235, 5.940, 4.135, 2.286, 0.591,
    ], 
    'Judas'
)

const Yoko = new Game(
    [
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[1], m.notes[2], m.notes[1],
        m.notes[8], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[3],
        m.notes[2], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[2], m.notes[3], m.notes[1],
        m.notes[2], m.notes[3], m.notes[1], m.notes[2], m.notes[3],
        m.notes[1], m.notes[2], m.notes[3], m.notes[1], m.notes[2],
        m.notes[3], m.notes[1], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2], m.notes[1], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[1], m.notes[3], m.notes[2], m.notes[1],
        m.notes[3], m.notes[2], m.notes[1], m.notes[3], m.notes[2],
        m.notes[1], m.notes[3], m.notes[2]
    ], 
    [
        85.321, 83.401, 81.611, 79.767, 77.921, 76.121, 74.271, 70.680, 68.860, 67.220, 66.930, 66.289, 65.916, 63.300, 62.880, 62.680, 59.649, 59.415, 58.949, 58.550, 56.035, 52.374, 51.889, 51.685, 49.116, 48.676, 48.436, 47.965, 47.496, 45.058, 44.582, 44.362, 43.658, 43.228, 43.002, 42.762, 42.548, 41.858, 41.368, 41.142, 40.932, 40.712, 40.032, 39.542, 39.312, 39.092, 38.882, 38.218, 37.732, 37.492, 37.242, 37.022, 36.337, 35.892, 35.622, 35.402, 35.172, 34.512, 34.038, 33.797, 33.572, 33.368, 32.672, 32.182, 31.968, 31.752, 31.542, 30.862, 30.368, 30.128, 29.902, 29.682, 28.998, 28.508, 28.282, 28.062, 27.848, 27.152, 26.682, 26.462, 26.232, 26.022, 25.332, 24.882, 24.632, 24.442, 24.007, 23.522, 23.052, 22.788, 22.582, 22.372, 21.698, 21.242, 20.982, 20.788, 20.512, 20.282, 19.812, 19.288, 19.042, 18.818, 18.592, 18.008, 17.568, 17.332, 17.078, 16.858, 16.632, 15.672, 16.122, 12.886, 13.096, 11.246, 12.676, 10.836, 11.026, 9.256, 9.476, 8.596, 9.046, 7.676, 8.126, 5.776, 7.166, 5.356, 5.566, 3.776, 3.986, 2.136, 3.586, 1.746, 1.952
    ], 
    
    'Yoko'
)

export default [FiveOFive, BlackSheep, BringMeToLife, ComoTudoDeveSer, CrazyTrain, FromTheStart, HopesAndDreams, MaryOnACroos, MasterOfPuppets, SerenataExistencialista, SweetChildOMine, Judas, Yoko]  // EXPORTO UM ARRAY QUE CONTEM TODAS AS MUSICAS JA PRONTAS