var canvas = document.querySelector("#canvas")
ctx = canvas.getContext('2d'),
x = 0,
dx = 5
width = 64;
var loop = function(now){
    requestAnimationFrame(loop);
    // update x
    x += dx;
    if (x + dx >= canvas.width || x + dx < 0) {
        dx = -dx;
    }
     
    // x %= canvas.width;
    // draw to the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, 240, width, width);
};
loop();