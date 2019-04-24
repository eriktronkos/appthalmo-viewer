import utils from './utils'
import SupportLines from './components/support-lines';
import MeasurementPlaceholders from "./components/placeholders";
import LeftEye from "./components/left-eye";
import RightEye from "./components/right-eye";

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init()
});

// Objects
function Object(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color
}

Object.prototype.draw = function() {
    c.beginPath();
    c.arc(mouse.x + this.x, mouse.y + this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath()
};

Object.prototype.update = function() {
    this.draw()
};

// Implementation
let objects;
function init() {
    objects = [];

    // for (let i = 0; i < 100; i++) {
    //     objects.push(new Object(i * 10, 100, 1, "black"));
    // }
    objects.push( new LeftEye(200, 200, 10));
    // objects.push( new MeasurementPlaceholders(200, 200));

  objects.push( new RightEye(700, 200, 10));
  // objects.push( new MeasurementPlaceholders(700, 200));
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = "#000";
    c.fillText("LEFT", 190, 30);
    c.fillText("RIGHT", 685, 30);
    c.fillText(`x: ${mouse.x}, y: ${mouse.y}`, mouse.x, mouse.y);


  objects.forEach(object => {
     object.update(c, mouse);
    });
}

init();
animate();
