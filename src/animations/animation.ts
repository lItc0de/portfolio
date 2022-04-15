/* eslint-disable no-param-reassign */
import P5 from 'p5';

import { getColors } from './colorHelper';
import Particle from './Particle';

export { setColorVars } from './colorHelper';

const createAnimation = (s: P5) => {
  const particles = Array.from(Array(100).keys()).map(() => new Particle(s, '#000'));

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
    s.frameRate(30);
    s.noStroke();
  };

  s.draw = () => {
    const colors = getColors();
    s.background(colors.background);
    particles.forEach((particle) => particle.run(colors.primary));
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  };
};

export default createAnimation;
