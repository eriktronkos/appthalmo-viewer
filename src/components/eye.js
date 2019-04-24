import SupportLines from "./support-lines";
import Stimulus from "./stimulus";
import Data from "../data"

function Eye (x, y, thickness, eye) {
  this.x = x;
  this.y = y;
  this.thickness = thickness;
  this.eye = eye;
};

Eye.prototype.draw = function(canvas) {
  const c = canvas;
  const x = this.x
  const y = this.y
  const supLines = new SupportLines(this.x, this.y)
  supLines.draw(c)
  const stimuli = []
  Object.keys(Data[this.eye]).map((pointName) => {
    stimuli.push(new Stimulus(pointName, Data[this.eye][pointName], x, y))
  }, this)
  stimuli.forEach((stimulus) => stimulus.draw(c))
};

Eye.prototype.update = function(canvas) {
  this.draw(canvas);
};

export default Eye;
