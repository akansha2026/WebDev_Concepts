const canvas = document.getElementById("canvas")

// context that helps us to draw things on canvas
const ctx = canvas.getContext("2d");

// Width and Height of canvas
const w = (canvas.width = window.innerWidth)
const h = (canvas.height = window.innerHeight)


// ctx.fillStyle = "blue";
// ctx.strokeStyle = "blue";  

// function drawRectangle(x, y){
//     ctx.strokeRect(x, y, 50, 50)
// }

// function drawCircle(x, y){
//     ctx.beginPath()
//     ctx.arc(x, y, 50, 0, 2*Math.PI, true)
//     ctx.stroke();
// }

// function drawLine(x, y){
//     ctx.beginPath()
//     ctx.moveTo(x, y);
//     ctx.lineTo(x + 50, y + 50)
//     ctx.stroke();
// }

// function drawTriangle(x, y, side){
//     const x1 = x;
//     const y1 = y - (side/2)*Math.cos(Math.PI/6);
//     const x2 = x + side/2;
//     const y2 = y + (side/2)*Math.tan(Math.PI/6);
//     const x3 = x - side/2;
//     const y3 = y + (side/2)*Math.tan(Math.PI/6);
//     ctx.beginPath();
//     ctx.moveTo(x1,y1);
//     ctx.lineTo(x2,y2);
//     ctx.lineTo(x3,y3);
//     ctx.lineTo(x1,y1);
//     ctx.stroke();
// }

// function drawHexagon(x, y, side){
//     const x1 = x + side;
//     const y1 = y;
//     const x2 = x + side/2;
//     const y2 = y + (side/2)*Math.tan(Math.PI/3);
//     const x3 = x - side/2;
//     const y3 = y + (side/2)*Math.tan(Math.PI/3);
//     const x4 = x - side;
//     const y4 = y;
//     const x5 = x - side/2;
//     const y5 = y - (side/2)*Math.tan(Math.PI/3);
//     const x6 = x + side/2;
//     const y6 = y - (side/2)*Math.tan(Math.PI/3);
//     ctx.beginPath();
//     ctx.moveTo(x1,y1);
//     ctx.lineTo(x2,y2);
//     ctx.lineTo(x3,y3);
//     ctx.lineTo(x4,y4);
//     ctx.lineTo(x5,y5);
//     ctx.lineTo(x6,y6);
//     ctx.lineTo(x1,y1);
//     ctx.stroke();
// }


// canvas.addEventListener("mousemove", (evt) => {
//     // Clear all the things present on the canvas
//     ctx.fillStyle = "rgba(256, 256, 256, 0.1)"
//     ctx.fillRect(0, 0, w, h);

//     // ctx.fillStyle = "white";
//     ctx.clearRect(0, 0, w, h)

//     const x = evt.clientX
//     const y = evt.clientY

//     // drawRectangle(x, y)
//     // drawCircle(x, y)
//     // drawRectangle(x - 50, y - 50)
//     // drawLine(x, y)
//     // drawTriangle(x,y,200);
//     // drawHexagon(x, y, 300);
//     // for(let side = 10; side <= 300; side += 10){
//     //     drawHexagon(x, y, side)
//     // }
// })
class Ball {
    constructor(x, y, vx, vy, radius, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius
        this.vx = vx
        this.vy = vy
    }

    // Methods
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

        // stroke or fill
        ctx.fillStyle = this.color

        // fill the ball
        ctx.fill()
    }

    update(){
        this.x += this.vx
        this.y += this.vy

        if(this.x > w - this.radius || this.x < 0) this.vx = -this.vx
        if(this.y > h - this.radius || this.y < 0) this.vy = -this.vy

        this.radius -= 0.5;
    }
}

let balls = [];

function animation(){
    // clear canvas
    ctx.clearRect(0, 0, w, h);

    const n = balls.length;
    for(let i=0; i<n; i++){
        for(let j = i+1; j<n; j++){
            if(dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y) <= 200){
                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.lineWidth = 5
                ctx.stroke();
            }
        }
    }

    const newBalls = [];
    for(let i=0; i<n; i++){
        if(balls[i].radius > 0) newBalls.push(balls[i]);
    }

    balls = newBalls;

    // draw the ball
    for(let ball of balls) ball.draw();

    // update the position
    for(let ball of balls) ball.update();

    // recursion
    requestAnimationFrame(animation)
}

// Animation
requestAnimationFrame(animation)

function randomNumber(a, b){
    return Math.random()* (b - a) + a;
}

function randomColor(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    return `rgb(${r}, ${g}, ${b})`;
}

function dist(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2))
}

canvas.addEventListener("click", (evt) => {
    const x = evt.clientX
    const y = evt.clientY

    const ball = new Ball(x, y, randomNumber(-20, 20), randomNumber(-20, 20), randomNumber(50, 100), randomColor())
    balls.push(ball)
})