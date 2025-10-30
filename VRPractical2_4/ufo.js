let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

    class UFO {
    constructor(x, y, z) {
      this.ufoEl = document.createElement('a-entity');  
        const body = document.createElement('a-sphere');
        body.setAttribute('radius', '0.5');
        body.setAttribute('color', '#00ff00');
        body.setAttribute('position', '0 0 0');
  
        const dome = document.createElement('a-hemisphere');
        dome.setAttribute('radius', '0.3');
        dome.setAttribute('color', '#0000ff');
        dome.setAttribute('position', '0 0.3 0');
  
        this.ufoEl.appendChild(body);
        this.ufoEl.appendChild(dome);
  
        this.ufoEl.setAttribute('position', `${x} ${y} ${z}`);
  
        this.speed = rnd(1, 5) / 100;
  
        scene.appendChild(this.ufoEl);
    }
  
    invade() {
      const position = this.ufoEl.getAttribute('position');
      if (position.y > 0) {
        position.y -= this.speed;
        if (position.y < 0) position.y = 0; // Stop at ground level
        this.ufoEl.setAttribute('position', position);
      }
    }
  }
  
  const ufos = [];
  for (let i = 0; i < 5; i++) {
    const x = rnd(-5, 5);
    const y = rnd(5, 10); // Start high
    const z = rnd(-5, 5);
    ufos.push(new UFO(x, y, z));
  }
  
  function loop() {
    window.requestAnimationFrame(loop);
    ufos.forEach(ufo => ufo.invade());
  } 

  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}