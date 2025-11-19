let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i=0; i<10; i++){
    let newDude = dudeTemplate.content.cloneNode(true);
    let x = rnd(-10,10);
    let z = rnd(-10,10);
    newDude.querySelector(".dude").setAttribute("position", `${x} 0 ${z}`);
    scene.appendChild(newDude);
  }
  
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  let dudes = document.querySelectorAll(".dude");
  dudes.forEach(dude => {
    let pos = dude.getAttribute("position");
    let y = Math.abs(Math.sin(Date.now() * 0.005 + pos.x + pos.z)) * 2;
    dude.setAttribute("position", `${pos.x} ${y} ${pos.z}`);
  });
  
  window.requestAnimationFrame( loop );
}