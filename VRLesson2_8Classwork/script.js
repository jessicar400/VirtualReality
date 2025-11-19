let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -1;

  loop();
});

function loop() {
  requestAnimationFrame(loop);

  if (target.a > -90 || target.da > 0) {
    target.a += target.da;
    if (target.a <= -90) {
      target.a = -90;
      target.da = 0;
    }
    target.setAttribute("rotation", `${target.a} 0 0`);
  }
}

