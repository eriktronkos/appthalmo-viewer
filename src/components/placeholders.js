import utils from "../utils"

function MeasurementPlaceholders (x, y) {
  this.x = x;
  this.y = y;
}

MeasurementPlaceholders.prototype.draw = function(canvas) {
  const c = canvas;

  c.fillStyle = "rgba(200,200,200, 0.3)";

  c.fillRect(this.x - 80, this.y - 120, 30, 30);
  c.fillRect(this.x - 40, this.y - 120, 30, 30);
  c.fillRect(this.x + 10, this.y - 120, 30, 30);
  c.fillRect(this.x + 50, this.y - 120, 30, 30);

  c.fillRect(this.x - 120, this.y - 80, 30, 30);
  c.fillRect(this.x - 80, this.y - 80, 30, 30);
  c.fillRect(this.x - 40, this.y - 80, 30, 30);
  c.fillRect(this.x + 10, this.y - 80, 30, 30);
  c.fillRect(this.x + 50, this.y - 80, 30, 30);
  c.fillRect(this.x + 90, this.y - 80, 30, 30);

  c.fillRect(this.x - 120, this.y - 40, 30, 30);
  c.fillRect(this.x - 80, this.y - 40, 30, 30);
  c.fillRect(this.x + 50, this.y - 40, 30, 30);
  c.fillRect(this.x + 90, this.y - 40, 30, 30);

  c.fillRect(this.x - 120, this.y + 10, 30, 30);
  c.fillRect(this.x - 80, this.y + 10, 30, 30);
  c.fillRect(this.x + 50, this.y + 10, 30, 30);
  c.fillRect(this.x + 90, this.y + 10, 30, 30);

  c.fillRect(this.x - 120, this.y + 50, 30, 30);
  c.fillRect(this.x - 80, this.y + 50, 30, 30);
  c.fillRect(this.x - 40, this.y + 50, 30, 30);
  c.fillRect(this.x + 10, this.y + 50, 30, 30);
  c.fillRect(this.x + 50, this.y + 50, 30, 30);
  c.fillRect(this.x + 90, this.y + 50, 30, 30);

  c.fillRect(this.x - 80, this.y + 90, 30, 30);
  c.fillRect(this.x - 40, this.y + 90, 30, 30);
  c.fillRect(this.x + 10, this.y + 90, 30, 30);
  c.fillRect(this.x + 50, this.y + 90, 30, 30);


  // 5 graus
  c.fillStyle = "rgba(200,200,200, 1)";
  c.fillRect(this.x - 48, this.y - 48, 22, 22);
  c.fillRect(this.x - 24, this.y - 48, 22, 22);
  c.fillRect(this.x + 2, this.y - 48, 22, 22);
  c.fillRect(this.x + 26, this.y - 48, 22, 22);


  c.fillRect(this.x - 48, this.y - 24, 22, 22);
  c.fillRect(this.x - 24, this.y - 24, 22, 22);
  c.fillRect(this.x + 2, this.y - 24, 22, 22);
  c.fillRect(this.x + 26, this.y - 24, 22, 22);


  c.fillRect(this.x - 48, this.y + 2, 22, 22);
  c.fillRect(this.x - 24, this.y + 2, 22, 22);
  c.fillRect(this.x + 2, this.y + 2, 22, 22);
  c.fillRect(this.x + 26, this.y + 2, 22, 22);


  c.fillRect(this.x - 48, this.y + 26, 22, 22);
  c.fillRect(this.x - 24, this.y + 26, 22, 22);
  c.fillRect(this.x + 2, this.y + 26, 22, 22);
  c.fillRect(this.x + 26, this.y + 26, 22, 22);


  c.fillStyle = "rgba(200,200,200, 0.6)";
  c.fillRect(this.x - 50, this.y - 50, 100, 100);

  // c.fillRect(this.x - 20, this.y - 62, 40, 40);
  // c.fillRect(this.x - 62, this.y - 62, 40, 40);
  // c.fillRect(this.x - 104, this.y - 62, 40, 40);
  // c.fillRect(this.x + 22, this.y - 62, 40, 40);
  // c.fillRect(this.x + 64, this.y - 62, 40, 40);
  //
  // c.fillRect(this.x - 20, this.y - 20, 40, 40);
  // c.fillRect(this.x - 62, this.y - 20, 40, 40);
  // c.fillRect(this.x - 104, this.y - 20, 40, 40);
  // c.fillRect(this.x + 22, this.y - 20, 40, 40);
  // c.fillRect(this.x + 64, this.y - 20, 40, 40);
  //
  // c.fillRect(this.x - 20, this.y + 22, 40, 40);
  // c.fillRect(this.x - 62, this.y + 22, 40, 40);
  // c.fillRect(this.x - 104, this.y + 22, 40, 40);
  // c.fillRect(this.x + 22, this.y + 22, 40, 40);
  // c.fillRect(this.x + 64, this.y + 22, 40, 40);
  //
  // c.fillRect(this.x - 20, this.y + 64, 40, 40);
  // c.fillRect(this.x - 62, this.y + 64, 40, 40);
  // c.fillRect(this.x + 22, this.y + 64, 40, 40);
};

MeasurementPlaceholders.prototype.update = function(canvas, mouse) {
  this.draw(canvas);
};

export default MeasurementPlaceholders;
