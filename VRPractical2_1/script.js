let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
   createCloud(5,10,-10);
   createCloud(-10,12,-15);
   createCloud(15,8,-5);
   createCloud(-5,11,-8);

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})
    createHouse(10,-15);
    createHouse(-15,-10);
    createHouse(0,-20);
    createHouse(5,-5);
    createHouse(-10,-18);


/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud    "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene

      
*/

function createCloud(x, y, z){
    let cloud = document.createElement("a-entity");
    let sphere1 = document.createElement("a-sphere");
    sphere1.setAttribute("color","white");
    sphere1.setAttribute("position","0 0 0");
    sphere1.setAttribute("radius","1.5");
    cloud.append( sphere1 );
}



/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, z){
    let house = document.createElement("a-entity");
    let base = document.createElement("a-box");
    base.setAttribute("color","brown");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("width","2");
    base.setAttribute("height","1");
    base.setAttribute("depth","2");
    house.append( base );

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color","red");
    roof.setAttribute("position","0 1.5 0");
    roof.setAttribute("radius","1.5");
    roof.setAttribute("height","1");
    roof.setAttribute("segments-radial","3");
    roof.setAttribute("rotation","0 0 0");
    house.append( roof );

    house.setAttribute("position", x + " 0 " + z);
    scene.append( house );
}