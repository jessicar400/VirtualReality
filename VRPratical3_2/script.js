let scene;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  // Make the snowflake "disappear" when the user clicks on it.
    class Snowflake {
        constructor(x, y, z) {
            this.snowflake = document.createElement("a-sphere");
            this.snowflake.setAttribute("color", "white");
            this.snowflake.setAttribute("radius", "0.2");
            this.snowflake.setAttribute("position", {x: x, y: y, z: z});
            this.snowflake.setAttribute("interact", "");

            this.snowflake.addEventListener("click", () => {
                this.snowflake.setAttribute("visible", "false");
            });

            scene.append(this.snowflake);
        }
    }
    // Create multiple snowflakes at different positions and places not close to each other all over the sky with interaction
    new Snowflake(2, 5, -10);
    new Snowflake(-3, 7, -15);
    new Snowflake(4, 6, -8);
    new Snowflake(-5, 4, -12);
    new Snowflake(0, 8, -20);
    new Snowflake(3, 5, -14);
    new Snowflake(-4, 6, -9);
    new Snowflake(1, 7, -11);
    new Snowflake(-2, 5, -13);
    new Snowflake(5, 8, -16);
    new Snowflake(-1, 6, -7);   
    new Snowflake(0, 5, -18);
    new Snowflake(2, 7, -9);
    new Snowflake(-3, 8, -14);
    new Snowflake(4, 5, -10);
    new Snowflake(2, 5, -3);
    new Snowflake(-3, 6, -4);
    new Snowflake(1, 7, -5);
    new Snowflake(-2, 8, -6);
    new Snowflake(0, 9, -7);
     new Snowflake(1, 4, -3);
    new Snowflake(-2, 5, -4);
    new Snowflake(0, 6, -2);
    new Snowflake(3, 7, -5);
    new Snowflake(-1, 8, -1);
     new Snowflake(1, 4, -3);
    new Snowflake(-2, 5, -4);
    new Snowflake(0, 6, -2);
    new Snowflake(3, 7, -5);
    new Snowflake(-1, 8, -1);
    new Snowflake(2, 9, -6);
    new Snowflake(-3, 10, -3);
    new Snowflake(4, 11, -4);
    new Snowflake(0, 12, -2);
    new Snowflake(-4, 13, -5);
    new Snowflake(1, 14, -1);
    new Snowflake(3, 15, -6);   
    new Snowflake(-2, 16, -3);
    new Snowflake(2, 17, -4);
    new Snowflake(0, 18, -2);
    new Snowflake(-1, 19, -5);
    new Snowflake(4, 20, -1);
    new Snowflake(-3, 21, -6);
    new Snowflake(1, 22, -3);
    new Snowflake(2, 23, -4);
    new Snowflake(0, 24, -2);   
    new Snowflake(-4, 25, -5);
    new Snowflake(3, 26, -1);
    new Snowflake(-2, 27, -6);
    new Snowflake(4, 28, -3);
    new Snowflake(1, 29, -4);
    new Snowflake(-1, 30, -2);
    new Snowflake(2, 31, -5);
    new Snowflake(-3, 32, -1);
    new Snowflake(0, 33, -6);
    new Snowflake(3, 34, -3);
    new Snowflake(-4, 35, -4);
    new Snowflake(1, 36, -2);
    new Snowflake(2, 37, -5);
    new Snowflake(-1, 38, -1);
    new Snowflake(4, 39, -6);
    new Snowflake(-2, 40, -3);
    new Snowflake(0, 41, -4);
    new Snowflake(3, 42, -2);
    new Snowflake(-3, 43, -5);
    new Snowflake(1, 44, -1);
    new Snowflake(2, 45, -6);
    new Snowflake(0, 46, -3);
    new Snowflake(-4, 47, -4);
    new Snowflake(3, 48, -2);
    new Snowflake(-1, 49, -5);
    new Snowflake(4, 50, -1);
    new Snowflake(-2, 51, -6);
    new Snowflake(1, 52, -3);
    new Snowflake(0, 53, -4);
    new Snowflake(2, 54, -2);
    new Snowflake(-3, 55, -5);
    new Snowflake(4, 56, -1);
    new Snowflake(-1, 57, -6);
    new Snowflake(3, 58, -3);
    new Snowflake(0, 59, -4);
    new Snowflake(-4, 60, -2);
    new Snowflake(2, 61, -5);
    new Snowflake(-2, 62, -1);
    new Snowflake(1, 63, -6);
    new Snowflake(3, 64, -3);
    new Snowflake(-1, 65, -4);
    new Snowflake(0, 66, -2);
    new Snowflake(4, 67, -5);
    new Snowflake(-3, 68, -1);
    new Snowflake(2, 69, -6);
    new Snowflake(-4, 70, -3);
    new Snowflake(1, 71, -4);
    new Snowflake(0, 72, -2);
    new Snowflake(-2, 73, -5);
    new Snowflake(3, 74, -1);
    new Snowflake(-1, 75, -6);
    new Snowflake(4, 76, -3);
    new Snowflake(2, 77, -4);
    new Snowflake(0, 78, -2);
    new Snowflake(-3, 79, -5);
    new Snowflake(1, 80, -1);
    new Snowflake(-4, 81, -6);
    new Snowflake(3, 82, -3);
    new Snowflake(0, 83, -4);
    new Snowflake(2, 84, -2);
    new Snowflake(-1, 85, -5);
    new Snowflake(4, 86, -1);
    new Snowflake(-2, 87, -6);
    new Snowflake(1, 88, -3);
    new Snowflake(0, 89, -4);
    new Snowflake(3, 90, -2);
});

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

    class GroundSnow {
        constructor() {
            this.groundSnow = document.createElement("a-plane");
            this.groundSnow.setAttribute("color", "white");
            this.groundSnow.setAttribute("width", "50");
            this.groundSnow.setAttribute("height", "50");
            this.groundSnow.setAttribute("rotation", "-90 0 0");
            this.groundSnow.setAttribute("position", "0 0 -5");

            scene.append(this.groundSnow);
        }
    }

    new GroundSnow();
});