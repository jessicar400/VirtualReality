class Dude{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.deltaY = 0.05;
    this.deltaZ = 0.02;
    //Challenge 1: Add delta variables in order to make the dude walk forward on the z axis and jump up and down on the y axis.

    this.obj = dudeTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  jump(){
    //Challenge 2: Add the accumulators to modify the y and z variables
    this.y += this.deltaY;
    this.z += this.deltaZ;

    //Challenge 3: Add the decision in order to alternate the delta on the y axis when the dude reaches less then 1 or greater than 2
    if(this.y < 1 || this.y > 2){
      this.deltaY = -this.deltaY;
    }
  }
  update(){
    this.jump();

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dudes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");
});

function loop(){
  //Challenge 6: Update all the dudes in the array.
  dudes.forEach(dude => {
    dude.update();
  });
  

  window.requestAnimationFrame( loop );
}

  