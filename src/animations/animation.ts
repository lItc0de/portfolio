/* eslint-disable no-param-reassign */
import P5 from 'p5';

const rad = 60; // Width of the shape
let xpos: number;
let ypos: number; // Starting position of shape

const xspeed = 2.8; // Speed of the shape
const yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

const createAnimation = (s: P5) => {
  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
    s.frameRate(30);
    s.ellipseMode(s.RADIUS);
    // Set the starting position of the shape
    xpos = s.width / 2;
    ypos = s.height / 2;
  };

  s.draw = () => {
    // Update the position of the shape
    xpos += xspeed * xdirection;
    ypos += yspeed * ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos > s.width - rad || xpos < rad) {
      xdirection *= -1;
    }
    if (ypos > s.height - rad || ypos < rad) {
      ydirection *= -1;
    }

    // Draw the shape
    s.ellipse(xpos, ypos, rad, rad);
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  };
};

export default createAnimation;
