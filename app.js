import Ship from './Ship.js';
import Vector from './Vector.js';

//Setup
const canvas = document.getElementById('canvas0');
const ctx = canvas.getContext('2d');

//Disable mouse leaving screen
// canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozrequestPointerLock || canvas.webkitrequestPointerLock;
// canvas.onclick = function () {
//     canvas.requestPointerLock();
// };

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
canvas.width = windowWidth;
canvas.height = windowHeight;

function resizeCanvas() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  canvas.width = windowWidth;
  canvas.height = windowHeight;
  console.log("Window was resized");
}; resizeCanvas();

let mouseVect = new Vector();
let ship = new Ship(new Vector(500, 500));
ship.acceleration.set(0.1, 0.1);


function mouseMoved(e) {
  const { clientX: x, clientY: y } = e; //Object destructuring
  mouseVect.set(x, y);
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("cords").innerHTML = coor;
}

function draw() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);

  ship.draw(ctx);
}

function update() {
  ship.update();
}

function gameloop() {
  update();
  draw();
  requestAnimationFrame(gameloop);
}


window.addEventListener('resize', resizeCanvas, false);
canvas.addEventListener('mousemove', mouseMoved, false);

gameloop();

