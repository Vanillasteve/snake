import { SNAKE_SPEED, update as UPDATE_SNAKE, draw as DRAW_SNAKE } from "./sss.js";

SNAKE_SPEED



let lastREnderTime = 0;


function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastREnderTime)/1000 ;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < 1/SNAKE_SPEED) return;

    console.log("currentTime");
    lastREnderTime = currentTime;
  

    update ();
    draw ();
}
window.requestAnimationFrame(main);


function update() {
    UPDATE_SNAKE();

};

function draw() {
    DRAW_SNAKE();

};