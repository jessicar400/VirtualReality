let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  class Tree {
    constructor(x,y,z) {
        this.tree = document.createElement("a-entity");
        
        let trunk = document.createElement("a-cylinder");
        trunk.setAttribute("color", "saddlebrown");
        trunk.setAttribute("height", "3");
        trunk.setAttribute("radius", "0.3");
        trunk.setAttribute("position", "0 1.5 0");
        this.tree.append(trunk);
        
        let foliage = document.createElement("a-sphere");
        foliage.setAttribute("color", "green");
        foliage.setAttribute("radius", "1.5");
        foliage.setAttribute("position", "0 3 0");
        this.tree.append(foliage);
        
        this.tree.setAttribute("position", {x: x, y: y, z: z});
        scene.append(this.tree);
    }
}

class House {
    constructor(x,z) {
        this.house = document.createElement("a-entity");
        
        let base = document.createElement("a-box");
        base.setAttribute("color", "beige");
        base.setAttribute("depth", "4");
        base.setAttribute("height", "2.5");
        base.setAttribute("width", "4");
        base.setAttribute("position", "0 1.25 0");
        this.house.append(base);
        
        let roof = document.createElement("a-cone");
        roof.setAttribute("color", "brown");
        roof.setAttribute("height", "2");
        roof.setAttribute("radius-bottom", "3");
        roof.setAttribute("position", "0 3 0");
        this.house.append(roof);
        
        this.house.setAttribute("position", {x: x, y: 0, z: z});
        scene.append(this.house);
    }
}

class Cloud {
    constructor(x,y,z) {
        this.cloud = document.createElement("a-entity");
        
        for(let i = 0; i < 5; i++) {
            let puff = document.createElement("a-sphere");
            puff.setAttribute("color", "white");
            puff.setAttribute("radius", "1");
            puff.setAttribute("position", {x: rnd(-2,2), y: rnd(-1,1), z: rnd(-1,1)});
            this.cloud.append(puff);
        }
        
        this.cloud.setAttribute("position", {x: x, y: y, z: z});
        scene.append(this.cloud);
    }
}

  for(let i = 0; i < 100; i++){
    let x = rnd(-90,50);
    let z = rnd(-50,40);
    let tree = new Tree(x, 0 , z);
    let cloud = new Cloud(rnd(-20,20), rnd(5,15), rnd(-20,20));
    let house = new House(rnd(-40,20), rnd(-20,40));
  }

})

