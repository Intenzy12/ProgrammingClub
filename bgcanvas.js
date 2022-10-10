const canvas = document.querySelector('#bgcanv')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', event => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

function particle(x, y, vx, vy, color, r) {
    this.pos = {
        x: x,
        y: y
    }
    this.vel  = {
        x: vx,
        y: vy
    }
    this.color = color
    this.r = r

    this.update = () => {
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
        if(this.pos.y > window.innerHeight)
        {
            this.pos.y = 0
            this.pos.x = Math.random() * window.innerWidth
        }
        this.draw()
    }

    this.draw = () => {
        c.beginPath()
        c.fillStyle = this.color
        c.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2, true)
        c.fill()
    }
}

var colors = 
[
    "rgb(0, 100, 100)",
    "rgb(20, 120, 120)",
    "rgb(13, 200, 216)",
    "rgb(58, 237, 219)"
]

var particles = []
for( let i = 0; i < window.innerWidth/5; ++i)
{
    let ci = colors[Math.floor(Math.random() * colors.length)]
    let y = Math.random() * (-window.innerHeight);
    let x = Math.random() * window.innerWidth;
    let vx = 0
    let vy = Math.random() * 1 + 2
    let r = Math.random() * 2 + 1

    particles.push(new particle(x, y, vx, vy, ci, r))
}

function animate() {
    c.fillStyle = "rgb(8, 8, 8, 0.1)"
    c.fillRect(0, 0, window.innerWidth, window.innerHeight)
    requestAnimationFrame(animate)

    for(let i = 0; i < particles.length; ++i)
    {
        particles[i].update()
    }
}

animate()