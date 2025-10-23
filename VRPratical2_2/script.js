window.addEventListener("DOMContentLoaded", function() {

  const scene = document.querySelector("a-scene"); //CSS Selector
  const pokemonball = document.querySelector("#pokemonball");
  const car = document.querySelector("#car");

  pokemonball.a = 0;
  pokemonball.da = 1;

  car.a = 0;
  car.da = -1;

  let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);

  function loop() {
    // rotate the pokemon ball
    pokemonball.a += pokemonball.da;
    pokemonball.setAttribute("rotation", { x: 0, y: pokemonball.a, z: 0 });

    // move the car
    car.a += car.da;
    car.setAttribute("position", { x: car.a, y: 0, z: -8 });

   // make the rocket fly up
    rocket.a += rocket.da;
    rocket.setAttribute("position", { x: 0, y: rocket.a, z: -8 });

    // make the dude "grow"
    dude.a += dude.da;
    dude.setAttribute("scale", { x: dude.a, y: dude.a, z: dude.a });

    // make the sun fade in
    sun.a += sun.da;
    sun.setAttribute("material", { opacity: sun.a });

    window.requestAnimationFrame(loop);
  }

  loop();
});