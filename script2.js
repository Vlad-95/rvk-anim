window.onload = function() {
    init();
}

const TREE_DARK_GREEN = '#5c8e5e';
const TREE_LIGHT_GREEN = '#a3bb95';
const TREE_TRUNK ='#16551a';
const LAND = '#d7cdb1';
const BLUE = '#1074b8';
const BLUE_WATER = '#69cae1';
const WHITE = '#fff';
const ROCK = '#827b74';
const ROOf = '#00a0dd';
const PIPE_GREEN = '#abddc5';
const GREEN = '#287d8b';
const PIPE_PURPLE = '#cec5ee';
const PURPLE = '#6449ae'
let stage;
stage = new createjs.Stage("canvas");
//конструктор дерева
const Tree = function(startX, startY) {
    this.startX = startX;
    this.startY = startY;
    let object = this.object = new createjs.Shape();

    object.graphics
        .beginFill(TREE_DARK_GREEN)
        .bezierCurveTo(this.startX - 25, this.startY + 33, this.startX - 25, this.startY + 59, this.startX, this.startY + 59)
        .endFill()
        .beginFill(TREE_LIGHT_GREEN)
        .bezierCurveTo(this.startX + 25, this.startY + 33, this.startX + 25, this.startY + 59, this.startX, this.startY + 59)
        .endFill()
        .beginFill(TREE_TRUNK)
        .moveTo(this.startX - 3, this.startY + 59)
        .lineTo(this.startX - 3, this.startY + 75)
        .lineTo(this.startX + 3, this.startY + 75)
        .lineTo(this.startX + 3, this.startY + 59)
        .endFill();

    function tick() {
        object.x += 5;
        stage.update();

        if (object.x > stage.canvas.width) { 
            object.x = 0; 
            console.log(object.graphics.c)
            object.graphics
                .beginFill('red')
                .bezierCurveTo(this.startX - 25, this.startY + 33, this.startX - 25, this.startY + 59, this.startX, this.startY + 59)
                .endFill()
                .beginFill('red')
                .bezierCurveTo(this.startX + 25, this.startY + 33, this.startX + 25, this.startY + 59, this.startX, this.startY + 59)
                .endFill()
                .beginFill(TREE_TRUNK)
                .moveTo(this.startX - 3, this.startY + 59)
                .lineTo(this.startX - 3, this.startY + 75)
                .lineTo(this.startX + 3, this.startY + 75)
                .lineTo(this.startX + 3, this.startY + 59)
                .endFill();
        }
    }    
    createjs.Ticker.interval = 25;
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", tick);
}


let x = 0;
let dx = 5;

const firstTree = new Tree(65, 32);

function init() {
    stage.addChild(firstTree.object);
    //Update stage will render next frame
    stage.update();
    
    // createjs.Ticker.on("tick", tick);
}

// function tick(event) {
//     circle.x += 5;
//     //Will cause the circle to wrap back
//     if (circle.x > stage.canvas.width) { 
//         circle.x = 0; 
//         circle.graphics.beginFill('black').drawCircle(0, 0, 40)
//     }
//     stage.update();
// }


