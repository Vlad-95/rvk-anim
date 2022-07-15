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

let stage;

//конструктор дерева
const Tree = function(startX, startY) {
    this.startX = startX;
    this.startY = startY;
    this.object = new createjs.Shape();

    this.object.graphics
        .beginFill(TREE_DARK_GREEN)
        .bezierCurveTo(this.startX - 25, this.startY + 33, this.startX - 25, this.startY + 59, this.startX, this.startY + 59)
        .beginFill(TREE_LIGHT_GREEN)
        .bezierCurveTo(this.startX + 25, this.startY + 33, this.startX + 25, this.startY + 59, this.startX, this.startY + 59)
        .beginFill(TREE_TRUNK)
        .moveTo(this.startX - 3, this.startY + 59)
        .lineTo(this.startX - 3, this.startY + 75)
        .lineTo(this.startX + 3, this.startY + 75)
        .lineTo(this.startX + 3, this.startY + 59);
}


let x = 0;
let dx = 5;

const firstTree = new Tree(65, 32);
console.log(firstTree);

function init() {
    stage = new createjs.Stage("canvas");

    var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 100, 100);
    var shape = new createjs.Shape(graphics);

    stage.addChild(shape);

    stage.update();
    
    createjs.Ticker.on("tick", tick);
}

function tick(event) {
    
    stage.update(event); // important!!
}


