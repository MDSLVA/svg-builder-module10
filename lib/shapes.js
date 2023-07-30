class Circle {
    constructor({ cx, cy, r, fill }) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
      this.fill = fill;
    }
  }
  
  class Triangle {
    constructor({ cx, cy, r, fill }) {
      this.points = `${cx},${cy - r} ${cx - r},${cy + r} ${cx + r},${cy + r}`;
      this.fill = fill;
    }
  }
  
  class Square {
    constructor({ cx, cy, r, fill }) {
      this.x = cx - r;
      this.y = cy - r;
      this.width = r * 2;
      this.height = r * 2;
      this.fill = fill;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };