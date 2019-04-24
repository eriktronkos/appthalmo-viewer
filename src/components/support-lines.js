function SupportLines (x, y, thickness) {
  this.x = x;
  this.y = y;
  this.thickness = thickness;
};

SupportLines.prototype.draw = function(canvas) {
  const c = canvas;
  c.beginPath();
  c.moveTo(this.x, this.y + 130);
  c.lineTo(this.x, this.y - 130);
  c.moveTo(this.x - 130, this.y);
  c.lineTo(this.x + 130, this.y);
  c.lineWidth = 2;
  c.strokeStyle = "#666666";
  c.stroke();
  c.closePath();

  c.fillStyle = "#000";
  c.fillText("10", this.x - 6, this.y + 140);
  c.fillText("10", this.x - 6, this.y - 135);
  c.fillText("10", this.x + 135, this.y + 3);
  c.fillText("10", this.x - 145, this.y + 3);

  c.fillStyle = "#ffffff";
  c.fillRect(this.x - 5, this.y - 5, 10, 10);
};

SupportLines.prototype.update = function(canvas) {
  this.draw(canvas);
};

export default SupportLines;
