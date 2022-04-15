import P5 from 'p5';

export default class Particle {
  s: P5;

  lifespan: number;

  position: P5.Vector;

  size: number;

  color: string;

  constructor(s: P5, color: string) {
    this.s = s;
    this.lifespan = this.createNewLifespan();
    this.position = this.createNewPosition();
    this.size = this.createNewSize();
    this.color = color;
  }

  get isDead() {
    return this.lifespan <= 0;
  }

  createNewPosition() {
    return this.s.createVector(
      this.s.random(0, this.s.width),
      this.s.random(0, this.s.height),
    );
  }

  createNewLifespan() {
    return this.s.random(100, 700);
  }

  createNewSize() {
    return this.s.random(2, 7);
  }

  run(color: string) {
    this.lifespan -= 2;
    this.color = color;
    this.display();

    if (this.isDead) this.revive();
  }

  display() {
    this.s.fill(this.color);
    this.s.ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  revive() {
    this.lifespan = this.createNewLifespan();
    this.position = this.createNewPosition();
    this.size = this.createNewSize();
  }
}
