let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
 
  loop();
})
function loop(){
  class Mech {
    constructor(x, z) {
      this.el = mech.cloneNode(true);
      this.el.setAttribute("position", { x: x, y: 0, z: z });
      scene.appendChild(this.el);
      this.speed = 0.01 + Math.random() * 0.02;
      this.direction = Math.random() * 2 * Math.PI;
    }

    update() {
      let position = this.el.getAttribute("position");
      position.x += Math.cos(this.direction) * this.speed;
      position.z += Math.sin(this.direction) * this.speed;

      
      if (position.x > 5 || position.x < -5) {
        this.direction = Math.PI - this.direction;
      }
      if (position.z > 5 || position.z < -5) {
        this.direction = -this.direction;
      }

      this.el.setAttribute("position", position);
    }
  }
  function animate() {
    mechs.forEach(mech => mech.update());
    window.requestAnimationFrame(animate);
  }

  animate();

  mechs.forEach(mech => {
    mech.el.setAttribute("animation", {
      property: "position",
      to: `${Math.random() * 10 - 5} ${Math.random() * 5} ${Math.random() * 10 - 5}`,
      dur: 2000,
      easing: "easeInOutQuad",
      loop: true,
      dir: "alternate"
    });
  });

  window.requestAnimationFrame(loop);
}
