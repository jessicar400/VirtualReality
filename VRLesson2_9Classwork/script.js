let maze = [
  "----------------------",
    "-                    -",
    "-  ----  ----  ----  -",

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
  "----------------------",
    "-                    -",                           
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
];
class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","brown");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("width",1);
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("depth",1);
    this.obj.setAttribute("src","#wallTexture");
    scene.append(this.obj);

  }
}
class Rock{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("color","gray");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("radius",0.3);
    scene.append(this.obj);
  }
}
for(let i=0;i<maze.length;i++){
  for(let j=0;j<maze[i].length;j++){
    if(maze[i][j]=="-"){
      let block = new Block(j,1,-i);
    }
    if(maze[i][j]==" "){
      if(Math.random()<0.1){
        let rock = new Rock(j,0.3,-i);
      }
    }
  }
}

