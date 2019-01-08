function SupportLines (x, y, thickness) {
  this.x = x;
  this.y = y;
  this.thickness = thickness;
};

SupportLines.prototype.draw = function(canvas) {
  const c = canvas;
  c.beginPath();
  c.moveTo(this.x, this.y + 120);
  c.lineTo(this.x, this.y - 120);
  c.moveTo(this.x - 120, this.y);
  c.lineTo(this.x + 120, this.y);
  c.lineWidth = 2;
  c.strokeStyle = "#666666";
  c.stroke();
  c.closePath();

  c.fillStyle = "#ffffff";
  c.fillRect(this.x - 10, this.y - 10, 20, 20);
};

SupportLines.prototype.update = function(canvas) {
  this.draw(canvas);
};

export default SupportLines;
