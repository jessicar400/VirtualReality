class Tree{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("color","green");
    this.obj.setAttribute("radiusBottom",1);
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }
}


class Trunk{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("color","brown");
    this.obj.setAttribute("radius",0.3);
    this.obj.setAttribute("height",1);
    this.obj.setAttribute("position",{x:x,y:y-1,z:z});
    scene.append(this.obj);
  }
}
