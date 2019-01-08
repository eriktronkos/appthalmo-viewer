import utils from "../utils"

function MeasurementPlaceholders (x, y) {
  this.x = x;
  this.y = y;
}

MeasurementPlaceholders.prototype.draw = function(canvas) {
  const c = canvas;

  c.fillStyle = "rgba(200,200,200, 0.3)";

  c.fillRect(this.x - 20, this.y - 104, 40, 40);
  c.fillRect(this.x - 62, this.y - 104, 40, 40);
  c.fillRect(this.x + 22, this.y - 104, 40, 40);

  c.fillRect(this.x - 20, this.y - 62, 40, 40);
  c.fillRect(this.x - 62, this.y - 62, 40, 40);
  c.fillRect(this.x - 104, this.y - 62, 40, 40);
  c.fillRect(this.x + 22, this.y - 62, 40, 40);
  c.fillRect(this.x + 64, this.y - 62, 40, 40);

  c.fillRect(this.x - 20, this.y - 20, 40, 40);
  c.fillRect(this.x - 62, this.y - 20, 40, 40);
  c.fillRect(this.x - 104, this.y - 20, 40, 40);
  c.fillRect(this.x + 22, this.y - 20, 40, 40);
  c.fillRect(this.x + 64, this.y - 20, 40, 40);

  c.fillRect(this.x - 20, this.y + 22, 40, 40);
  c.fillRect(this.x - 62, this.y + 22, 40, 40);
  c.fillRect(this.x - 104, this.y + 22, 40, 40);
  c.fillRect(this.x + 22, this.y + 22, 40, 40);
  c.fillRect(this.x + 64, this.y + 22, 40, 40);

  c.fillRect(this.x - 20, this.y + 64, 40, 40);
  c.fillRect(this.x - 62, this.y + 64, 40, 40);
  c.fillRect(this.x + 22, this.y + 64, 40, 40);
};

MeasurementPlaceholders.prototype.update = function(canvas, mouse) {
  this.draw(canvas);
};

export default MeasurementPlaceholders;
