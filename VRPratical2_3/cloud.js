// Create a Cloud class that can be used to add a cloud to your virtual world.
class Cloud {
    constructor(x,y,z) {
        this.cloud = document.createElement("a-entity");
        
        let sphere1 = document.createElement("a-sphere");
        sphere1.setAttribute("color", "white");
        sphere1.setAttribute("position", "0 0 0");
        sphere1.setAttribute("radius", "1.5");
        this.cloud.append(sphere1);
        
        let sphere2 = document.createElement("a-sphere");
        sphere2.setAttribute("color", "white");
        sphere2.setAttribute("position", "1 0.5 0");
        sphere2.setAttribute("radius", "1.2");
        this.cloud.append(sphere2);
        
        let sphere3 = document.createElement("a-sphere");
        sphere3.setAttribute("color", "white");
        sphere3.setAttribute("position", "-1 0.5 0");
        sphere3.setAttribute("radius", "1.2");
        this.cloud.append(sphere3);
        
        this.cloud.setAttribute("position", {x: x, y: y, z: z});
        scene.append(this.cloud);
    }
}