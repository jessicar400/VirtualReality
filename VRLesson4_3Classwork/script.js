let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  //Challenge 2: Create 200 Balls at random locations and watch them fall or push them off the end
  for (let i=0; i<200; i++) {
    let ball = document.createElement("a-sphere");
    ball.setAttribute("position",`${rnd(-10,10)} ${rnd(5,20)} ${rnd(-10,10)}`);
    ball.setAttribute("radius","0.1");
    ball.setAttribute("color","red");
    ball.setAttribute("dynamic-body","");
    scene.appendChild(ball);
  } 


  
})