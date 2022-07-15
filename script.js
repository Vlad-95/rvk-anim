const TREE_DARK_GREEN = '#5c8e5e';
const TREE_LIGHT_GREEN = '#a3bb95';
const TREE_TRUNK ='#16551a';
const LAND = '#d7cdb1';
const BLUE = '#1074b8';
const BLUE_WATER = '#69cae1';
const WHITE = '#fff';

let canvas = document.querySelector("#canvas");
let cx = canvas.getContext("2d");

function random(min, max) {
    return min + Math.random() * (max - min)
}


// конструктор дерева
// class Tree {
//     constructor (startX, startY) {
//         this.startX = startX;
//         this.startY = startY;


//     }

//     draw() {
//         //левая половина
//         cx.beginPath();
//         cx.moveTo(this.startX, this.startY);
//         cx.bezierCurveTo(this.startX - 25, this.startY + 33, this.startX - 25, this.startY + 59, this.startX, this.startY + 59);
//         cx.closePath();
//         cx.fillStyle = TREE_DARK_GREEN;
//         cx.fill();

//         //правая половина
//         cx.beginPath();
//         cx.moveTo(65, 32);
//         cx.bezierCurveTo(this.startX + 25, this.startY + 33, this.startX + 25, this.startY + 59, this.startX, this.startY + 59);
//         cx.closePath();
//         cx.fillStyle = TREE_LIGHT_GREEN;
//         cx.fill();

//         //ствол дерева
//         cx.beginPath();
//         cx.moveTo(this.startX - 3, this.startY + 59);
//         cx.lineTo(this.startX - 3, this.startY + 75);
//         cx.lineTo(this.startX + 3, this.startY + 75);
//         cx.lineTo(this.startX + 3, this.startY + 59);
//         cx.closePath();
//         cx.fillStyle = TREE_TRUNK;
//         cx.fill();
//     }
    
// }

// конструктор повехности земли
// class Land {
//     constructor (startX, startY, width) {
//         this.startX = startX;
//         this.startY = startY;
//         this.width = width;
//     }
    
//     draw () {
//         cx.beginPath();
//         cx.moveTo(this.startX, this.startY)
//         cx.lineTo(this.width, this.startY)
//         cx.lineWidth = '6';
//         cx.lineCap = 'round'
//         cx.strokeStyle = LAND;
//         cx.stroke();
//     }
    
// }

//конструктор озера
class Sea {
    constructor (startX, startY) {
        this.startX = startX;
        this.startY = startY;
    }

    //вода
    water() {
        let step = -4;

        // cx.beginPath();
        // cx.moveTo(this.startX, this.startY + 10);
        
        // for (let x = 0; x < 360; x++) {
        //     let y = 10 - Math.sin(x * Math.PI / 100) * 10
        //     cx.lineTo(this.startX + x, this. startY + y)
        // }
        // cx.lineWidth = '1'
        // cx.strokeStyle = BLUE_WATER;
        // cx.fillStyle = BLUE_WATER;
        // cx.fill();
        // cx.stroke();

        function anim () {
            requestAnimationFrame(anim);

            cx.clearRect(0, 0, canvas.width, canvas.height);
            

            cx.beginPath();
            cx.lineWidth = 2;
            cx.strokeStyle = "rgb(66,44,255)";

            var x = 0;
            var y = 0;
            var amplitude = 5;
            var frequency = 200 / (2 * Math.PI);
            cx.save();
            // cx.translate(-amplitude * Math.cos(step / frequency), 0);
            while (x < 200) {
                y = 200 / 2 + amplitude * Math.cos((x + step) / frequency);
                cx.lineTo(x, y);
                x++;
            }

            cx.stroke();
            cx.restore();


            // drawWave(10,"cos");

            step += 5; 
        }

        anim();
    }

    //border
    border() {
        //border
        cx.beginPath();
        cx.moveTo(this.startX, this.startY);
        cx.bezierCurveTo(this.startX + 25, this.startY + 100, this.startX + 125, this.startY + 100, this.startX + 150, this.startY);
        cx.lineWidth = '6'
        cx.lineCap = 'round';
        cx.strokeStyle = BLUE;
        cx.stroke();
    }

    // частицы
    particles() {
        const count = 8;
        const particles = [];

        for (let i = 0; i <= count; i++) {
            let x = Math.floor(random(this.startX + 100, this.startX + 50));
            let y = Math.floor(random(this.startY + 70, this.startX + 30));
            let dx = 5;


            // cx.beginPath();
            // cx.moveTo(x, y);            
            // cx.lineTo(x + 10, y);
            // cx.lineWidth = '4';
            // cx.lineCap = 'round';
            // cx.strokeStyle = WHITE;
            // cx.stroke();
            // cx.closePath();       
            
            function loop() {
                // requestAnimationFrame(loop);
                
                // cx.fillRect(x, 0, 10, 10)
                x += dx;
    
                cx.beginPath();
                cx.moveTo(x, y);            
                cx.lineTo(x + 10, y);
                cx.lineWidth = '4';
                cx.lineCap = 'round';
                cx.strokeStyle = WHITE;
                cx.stroke();
                cx.closePath();    
                
            }

            loop();
        }


    }

    draw() {
        this.water();
        this.particles();   
        this.border();
    }   
}

//конструктор насоса
// class Pump {
//     constructor(startX, startY) {
//         this.startX = startX;
//         this.startY = startY;
//         this.width = 138;
//         this.height = 70;
//     }

    

//     rect() {
//         cx.beginPath();
//         cx.rect(this.startX, this.startY, this.width, this.height)
//         cx.fillStyle = BLUE;
//         cx.fill();
//     }

//     toggle() {
//         const centerX = this.startX + (this.width / 2);
//         const centerY = this.startY + (this.height / 2);

//         //внешний круг
//         cx.beginPath();
//         cx.arc(centerX, centerY, 18, 0, 2 * Math.PI)
//         cx.lineWidth = '7'
//         cx.fillStyle = BLUE;
//         cx.strokeStyle = WHITE;
//         cx.stroke();
//         cx.fill();

//         //внутренний круг
//         cx.beginPath();
//         cx.arc(centerX, centerY, 6, 0, 2 * Math.PI)
//         cx.lineWidth = '7'
//         cx.fillStyle = BLUE_WATER;
//         cx.strokeStyle = WHITE;
//         cx.stroke();
//         cx.fill();

//         //ребра
//         cx.beginPath()
//     }

//     draw() {
//         this.rect();
//         this.toggle();
//     }
// }


// const firstTree = new Tree(65, 32);
// const firtLand = new Land(55, 110, 248);
// const pump_02 = new Pump(265, 43);
const sea_01 = new Sea(85, 95);

// function move() {
//     requestAnimationFrame(move)
// }


function draw() {
    // firtLand.draw();
    // firstTree.draw();
    // pump_02.draw();
    sea_01.draw();

    // requestAnimationFrame(draw)
}

draw();