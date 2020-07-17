import Ship from './Ship.js';
import Vector from './Vector.js';
import { checkImage } from './helpers.js';
import BlackHole from './BlackHole.js';
//constants 
const CamfollowPlayer = true;

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

let canvasVector = new Vector(canvas.width/2, canvas.height/2);
let ship = new Ship();
let hole = new BlackHole();

//create grid canvas

// ship.acceleration.set(0.1, 0.1);
// ship.velocity.set(10, 0);

function mouseMoved(e) {
  const { clientX: x, clientY: y } = e; //Object destructuring
  hole.update(x, y);
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("cords").innerHTML = coor;
}

function update() {
  const holeAttract = hole.attract(canvasVector, ship);
  console.log(holeAttract);
  ship.update(holeAttract.x, holeAttract.y);
  //ship.update();
}

function draw() {
  // ctx.save();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.translate(-ship.pos.x + canvas.width / 2, -ship.pos.y + canvas.height / 2);
  ship.draw(ctx);

  //Draw test object
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(100, 100, 20 * 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // ctx.restore();

}

function gameloop() {
  update();
  // ctx.save();
  
  draw();
  requestAnimationFrame(gameloop);
  // ctx.restore();
}


window.addEventListener('resize', resizeCanvas, false);
canvas.addEventListener('mousemove', mouseMoved, false);

const imgPromises = [];
imgPromises.push(checkImage(ship.image));
// ship.draw(ctx);
Promise.all(imgPromises)
  .then(() => {
    console.log("Loaded all Images");
    gameloop();
  });