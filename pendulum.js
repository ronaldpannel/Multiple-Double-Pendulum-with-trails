class Pendulum {
  constructor(angle1, angle2, length1, length2) {
    this.x0 = width / 2;
    this.y0 = width / 3;
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.m1 = 10;
    this.m2 = 10;
    this.length1 = length1;
    this.length2 = length2;
    this.angle1 = angle1;
    this.angle2 = angle2;
    this.angleV1 = 0;
    this.angleV2 = 0;
    this.angleA1 = 0;
    this.angleA2 = 0;
  }

  update() {
    this.x1 = this.x0 + this.length1 * sin(this.angle1);
    this.y1 = this.y0 + this.length1 * cos(this.angle1);

    this.x2 = this.x1 + this.length2 * sin(this.angle2);
    this.y2 = this.y1 + this.length2 * cos(this.angle2);

    this.angleA1 =
      (-g * (2 * this.m1 + this.m2) * sin(this.angle1) +
        -this.m2 * g * sin(this.angle1 - 2 * this.angle2) +
        -2 *
          sin(this.angle1 - this.angle2) *
          this.m2 *
          (this.angleV2 * this.angleV2 * this.length2 +
            this.angleV1 *
              this.angleV1 *
              this.length1 *
              cos(this.angle1 - this.angle2))) /
      (this.length1 *
        (2 * this.m1 +
          this.m2 -
          this.m2 * cos(2 * this.angle1 - 2 * this.angle2)));

    this.angleA2 =
      (2 *
        sin(this.angle1 - this.angle2) *
        (this.angleV1 * this.angleV1 * this.length1 * (this.m1 + this.m2) +
          g * (this.m1 + this.m2) * cos(this.angle1) +
          this.angleV2 *
            this.angleV2 *
            this.length2 *
            this.m2 *
            cos(this.angle1 - this.angle2))) /
      (this.length2 *
        (2 * this.m1 +
          this.m2 -
          this.m2 * cos(2 * this.angle1 - 2 * this.angle2)));

    this.angleV1 += this.angleA1;
    this.angleV2 += this.angleA2;

    this.angle1 += this.angleV1;
    this.angle2 += this.angleV2;

    let maxVelocity = 2;
    this.angleV1 = constrain(this.angleV1, -maxVelocity, maxVelocity);
    this.angleV2 = constrain(this.angleV2, -maxVelocity, maxVelocity);
  }
  draw() {
    stroke(255);
    line(this.x0, this.y0, this.x1, this.y1);
    line(this.x1, this.y1, this.x2, this.y2);

    fill(0, 0, 255);
    ellipse(this.x0, this.y0, 15, 15);
    fill(255, 0, 0);
    ellipse(this.x1, this.y1, this.m1, this.m1);
    ellipse(this.x2, this.y2, this.m2, this.m2);
  }
}
