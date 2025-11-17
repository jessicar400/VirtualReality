window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  //Create a variable for the cylinder
    let cylinder = document.querySelector("#myCylinder");

  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("height",2);
  })
  //Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox
    myBox.addEventListener("mouseleave",function(){
        this.setAttribute("height",1);
    })
    myBox.addEventListener("click",function(){
        this.setAttribute("color","#"+Math.floor(Math.random()*16777215).toString(16));
    })

  //Make  the the cylinder disappear when you click on it.  Set opacity to zero
    cylinder.addEventListener("click",function(){
        this.setAttribute("opacity",0);
    })
});