/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/


  // Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object you chose to put in the maze.  Get Creative!

  class Wall {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.entity = document.createElement("a-entity");
      this.entity.setAttribute("geometry", { primitive: "box", height: 1, width: 1, depth: 1 });
      this.entity.setAttribute("material", { src: "mazewall.jpg", repeat: "1 1" });
      this.entity.setAttribute("position", { x: this.x, y: 0.5, z: -this.y });
      scene.appendChild(this.entity);
    }
  } 
    
    let maze = [
  "----------------------",
    "-                    -",
    "-  ----  ----  ----  -",
  "----------------------",
    "-       -        -   -",
  "----------------------",
    "-   ----   ----   -  -",
  "----------------------",
    "-   -         -      -",
  "----------------------",
    "-   -   ----  -  -----",
  "----------------------",
    "-       -         -  -",
  "----------------------",
    "-  ----  ----   -   -",
  "----------------------",
    "-         -         -",
  "----------------------",
    "-  ----   ----  ---- -",
  "----------------------",
    "-                    -",                           
  "----------------------",

  "----------------------",
    "-   ----   ----   -  -",
  "----------------------",
    "-   -         -      -",
  "----------------------",
    "-   -   ----  -  -----",
  "----------------------",
    "-       -         -  -",
  "----------------------",
    "-  ----  ----   -   -",
  "----------------------",
    "-         -         -",
  "----------------------",
    "-  ----   ----  ---- -",
  "----------------------",
    "-                    -",
  "----------------------",

  "----------------------",
    "-  ----  ----  ----  -",
  "----------------------",
    "-       -        -   -",
  "----------------------",
    "-   ----   ----   -  -",
  "----------------------",
    "-   -         -      -",
  "----------------------",
    "-   -   ----  -  -----",
  "----------------------",
    "-       -         -  -",
  "----------------------",
    "-  ----  ----   -   -",
  "----------------------",
    "-         -         -",
  "----------------------",
    "-  ----   ----  ---- -",
    "-                    -",
  "----------------------",

  "----------------------",
    "-                    -",
    "-  ----  ----  ----  -",
  "----------------------",
    "-       -        -   -",
  "----------------------",
    "-   ----   ----   -  -",
  "----------------------",
    "-   -         -      -",
  "----------------------",
    "-   -   ----  -  -----",
  "----------------------",
    "-       -         -  -",
  "----------------------",
    "-  ----  ----   -   -",
  "----------------------",
    "-         -         -",
  "----------------------",
];


  // Add appropriate classes to use as objects in map.  Choose characters to represent these objects and position them on the map.
  class Treasure {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.entity = document.createElement("a-entity");
      this.entity.setAttribute("geometry", { primitive: "box", height: 0.5, width: 0.5, depth: 0.5 });
      this.entity.setAttribute("material", { color: "gold" });
      this.entity.setAttribute("position", { x: this.x, y: 0.25, z: -this.y });
      scene.appendChild(this.entity);
    }
  }
  

  class Enemy {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.entity = document.createElement("a-entity");
      this.entity.setAttribute("geometry", { primitive: "sphere", radius: 0.3 });
      this.entity.setAttribute("material", { color: "red" });
      this.entity.setAttribute("position", { x: this.x, y: 0.3, z: -this.y });
      scene.appendChild(this.entity);
    }
  }


let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
    for(let r = 0; r < maze.length; r++){
    for(let c = 0; c < maze[r].length; c++){
      let char = maze[r].charAt(c);
        let entity;
        if(char === "-"){
          entity = document.createElement("a-entity");
          entity.setAttribute("geometry", {primitive: "box", height: 1, width: 1, depth: 1});
          entity.setAttribute("material", {src: "mazewall.jpg", repeat: "1 1"});
          entity.setAttribute("position", {x: c, y: 0.5, z: -r});
          scene.appendChild(entity);
        }

    
       //Make an appropriate decision based on the characters you chose to enter  in the maze.  Create an instance of the corresponding object.
    

  }
}
    let treasure1 = new Treasure(2, 2);
    let treasure2 = new Treasure(17, 10);
    let enemy1 = new Enemy(5, 5);
    let enemy2 = new Enemy(12, 8);
});
