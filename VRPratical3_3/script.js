// Decide on an “enemy”.  Feel free to use objects created in past activities.  Populate the world with your enemies.
let enemy1 = document.createElement('a-box');
enemy1.setAttribute('position', '0 1 -3');
enemy1.setAttribute('color', 'red');
enemy1.setAttribute('class', 'enemy');
document.querySelector('a-scene').appendChild(enemy1);

let enemy2 = document.createElement('a-sphere');
enemy2.setAttribute('position', '2 1 -5');
enemy2.setAttribute('color', 'blue');
enemy2.setAttribute('class', 'enemy');
document.querySelector('a-scene').appendChild(enemy2);