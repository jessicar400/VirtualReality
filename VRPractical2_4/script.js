let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  class Rocket {
  constructor(x, y, z) {
    this.rocketEl = document.createElement('a-entity');

    
    const body = document.createElement('a-cylinder');
    body.setAttribute('height', '1.5');
    body.setAttribute('radius', '0.1');
    body.setAttribute('color', '#ff0000');
    body.setAttribute('position', '0 0.75 0');

 
    const nose = document.createElement('a-cone');
    nose.setAttribute('height', '0.5');
    nose.setAttribute('radius-bottom', '0.1');
    nose.setAttribute('color', '#ffff00');
    nose.setAttribute('position', '0 1.5 0');

    
    this.rocketEl.appendChild(body);
    this.rocketEl.appendChild(nose);

   
    this.rocketEl.setAttribute('position', `${x} ${y} ${z}`);

    
    this.speed = rnd(1, 5) / 100;

   
    scene.appendChild(this.rocketEl);
  }

  launch() {
    const position = this.rocketEl.getAttribute('position');
    position.y += this.speed;
    this.rocketEl.setAttribute('position', position);
  }
}


const rocket1 = new Rocket(0, 0, -3);
const rocket2 = new Rocket(1, 0, -3);


function loop() {
  window.requestAnimationFrame(loop);
  rocket1.launch();
  rocket2.launch();
} 


  loop();
}
);
