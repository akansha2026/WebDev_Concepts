const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d");

const w = (canvas.width = window.innerWidth)
const h = (canvas.height = window.innerHeight)

function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}

class Ball{
    constructor(x, y, r, R,color){
        this.theta = 0;
        this.x = x;
        this.y = y;
        this.R = R;
        this.r = r;
        this.color = color
    }

    draw(){
        // Circle
        const cx = this.x + this.R*Math.cos(this.theta);
        const cy = this.y + this.R*Math.sin(this.theta);
        ctx.beginPath();
        ctx.arc(cx, cy, this.r, 0, 2*Math.PI)
        ctx.fillStyle = this.color
        ctx.fill();

        // Center
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, 2*Math.PI)
        ctx.fillStyle = "grey";
        ctx.fill();

        // Line
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(cx,cy);
        ctx.strokeStyle = this.color
        ctx.stroke();
    }

    update(){
        this.theta += Math.PI/20;
    }
}

function randomNumber(a, b){
    return Math.random()* (b - a) + a;
}

const balls =  []

function animation(){

    ctx.clearRect(0,0,w,h);

    for(let ball of balls) ball.draw();
    for(let ball of balls) ball.update();
    requestAnimationFrame(animation)
}

canvas.addEventListener("click",(evt)=>{
    const x = evt.clientX
    const y = evt.clientY
    const ball = new Ball(x, y, randomNumber(10,20), randomNumber(50, 100), randomColor());
    balls.push(ball);
})

requestAnimationFrame(animation);

