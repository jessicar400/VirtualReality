// Create a House class that can be used to add a house to our virtual world.
class House {
    constructor(x, z) {
        this.house = document.createElement("a-entity");
        
        let base = document.createElement("a-box");
        base.setAttribute("color", "brown");
        base.setAttribute("position", "0 0.5 0");
        base.setAttribute("width", "2");
        base.setAttribute("height", "1");
        base.setAttribute("depth", "2");
        this.house.append(base);
        
        let roof = document.createElement("a-cylinder");
        roof.setAttribute("color", "red");
        roof.setAttribute("position", "0 1.5 0");
        roof.setAttribute("radius", "1.5");
        roof.setAttribute("height", "1");
        roof.setAttribute("rotation", "0 0 90");
        this.house.append(roof);
        
        this.house.setAttribute("position", {x: x, y: 0, z: z});
        scene.append(this.house);
    }
}   