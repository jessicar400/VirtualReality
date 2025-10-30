let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }

  //Challenge 1: Create an array to store 20 clouds in random positions. Create a lot of clouds at random high locations and make them fly.
    let clouds = [ ];
    for(let i = 0; i < 20; i++){
        let x = rnd(-20,20);
        let y = rnd(5,15);
        let z = rnd(-20,20);
        let cloud = new Cloud(x,y,z);
        clouds.push(cloud);
    }
  let cloud = new Cloud(0,10,0);


  //Challenge 3: Create an array to store 100 snowflakes in random positions. Create a lot of snowflakes at random high locations and make them fall.
  let snowflakes = [ ];
    for(let i = 0; i < 100; i++){
        let x = rnd(-20,20);
        let y = rnd(0,20);
        let z = rnd(-20,20);
        let snowflake = new Snowflake(x,y,z);
        snowflakes.push(snowflake);
    }

  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  cloud.fly();
  //Challenge 2: Traverse your array of clouds and make each cloud fly
  for(let cloud of clouds){
        cloud.fly();
    }


  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
    for(let snowflake of snowflakes){
        snowflake.fall();
    }

  
  window.requestAnimationFrame( loop );
}


