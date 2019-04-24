import utils from "../utils";

function Stimulus(name, results, x, y) {
  this.name = name
  this.results = results;
  this.x = x;
  this.y = y;
}

var StimulusList = {
  "10-1-1": { x: -80, y: -120, w: 30, h: 30 },
  "10-1-2": { x: -40, y: -120, w: 30, h: 30 },
  "10-1-3": { x: +10, y: -120, w: 30, h: 30 },
  "10-1-4": { x: +50, y: -120, w: 30, h: 30 },

  "10-2-1": { x: -120, y: -80, w: 30, h: 30 },
  "10-2-2": { x: -80, y: -80, w: 30, h: 30 },
  "10-2-3": { x: -40, y: -80, w: 30, h: 30 },
  "10-2-4": { x: +10, y: -80, w: 30, h: 30 },
  "10-2-5": { x: +50, y: -80, w: 30, h: 30 },
  "10-2-6": { x: +90, y: -80, w: 30, h: 30 },

  "10-3-1": { x: -120, y: -40, w: 30, h: 30 },
  "10-3-2": { x: -80, y: -40, w: 30, h: 30 },
  "10-3-3": { x: +50, y: -40, w: 30, h: 30 },
  "10-3-4": { x: +90, y: -40, w: 30, h: 30 },

  "10-4-1": { x: -120, y: +10, w: 30, h: 30 },
  "10-4-2": { x: -80, y: +10, w: 30, h: 30 },
  "10-4-3": { x: +50, y: +10, w: 30, h: 30 },
  "10-4-4": { x: +90, y: +10, w: 30, h: 30 },

  "10-5-1": { x: -120, y: +50, w: 30, h: 30 },
  "10-5-2": { x: -80, y: +50, w: 30, h: 30 },
  "10-5-3": { x: -40, y: +50, w: 30, h: 30 },
  "10-5-4": { x: +10, y: +50, w: 30, h: 30 },
  "10-5-5": { x: +50, y: +50, w: 30, h: 30 },
  "10-5-6": { x: +90, y: +50, w: 30, h: 30 },

  "10-6-1": { x: -80, y: +90, w: 30, h: 30 },
  "10-6-2": { x: -40, y: +90, w: 30, h: 30 },
  "10-6-3": { x: +10, y: +90, w: 30, h: 30 },
  "10-6-4": { x: +50, y: +90, w: 30, h: 30 },

  // 5 graus
  "5-1-1": { x: -48, y: -48, w: 22, h: 22 },
  "5-1-2": { x: -24, y: -48, w: 22, h: 22 },
  "5-1-3": { x: +2, y: -48, w: 22, h: 22 },
  "5-1-4": { x: +26, y: -48, w: 22, h: 22 },


  "5-2-1": { x: -48, y: -24, w: 22, h: 22 },
  "5-2-2": { x: -24, y: -24, w: 22, h: 22 },
  "5-2-3": { x: +2, y: -24, w: 22, h: 22 },
  "5-2-4": { x: +26, y: -24, w: 22, h: 22 },


  "5-3-1": { x: -48, y: +2, w: 22, h: 22 },
  "5-3-2": { x: -24, y: +2, w: 22, h: 22 },
  "5-3-3": { x: +2, y: +2, w: 22, h: 22 },
  "5-3-4": { x: +26, y: +2, w: 22, h: 22 },


  "5-4-1": { x: -48, y: +26, w: 22, h: 22 },
  "5-4-2": { x: -24, y: +26, w: 22, h: 22 },
  "5-4-3": { x: +2, y: +26, w: 22, h: 22 },
  "5-4-4": { x: +26, y: +26, w: 22, h: 22 }

};

Stimulus.prototype.draw = function(canvas) {
  const c = canvas;

  const stimulus = StimulusList[this.name]
  if (!stimulus){
    console.log("this.point not found", this.results)
    return
  }

  console.log("this.point", this.results)
  const opacity = this.results.reduce((acc, cur) => {
    console.log("asdfasdf",cur.Contrast, cur.failed)
    return acc + cur.Contrast * (cur.failed ? 5 : 1)
  }, 0)

  c.fillStyle = `rgba(0,0,0, ${opacity}`;
  console.log("a", opacity)
  console.log("fillstyle", c.fillStyle)

  c.fillRect(this.x + stimulus.x, this.y + stimulus.y, stimulus.w, stimulus.h);
  //
  // c.fillRect(this.x - 80, this.y - 120, 30, 30);
  // c.fillRect(this.x - 40, this.y - 120, 30, 30);
  // c.fillRect(this.x + 10, this.y - 120, 30, 30);
  // c.fillRect(this.x + 50, this.y - 120, 30, 30);
  //
  // c.fillRect(this.x - 120, this.y - 80, 30, 30);
  // c.fillRect(this.x - 80, this.y - 80, 30, 30);
  // c.fillRect(this.x - 40, this.y - 80, 30, 30);
  // c.fillRect(this.x + 10, this.y - 80, 30, 30);
  // c.fillRect(this.x + 50, this.y - 80, 30, 30);
  // c.fillRect(this.x + 90, this.y - 80, 30, 30);
  //
  // c.fillRect(this.x - 120, this.y - 40, 30, 30);
  // c.fillRect(this.x - 80, this.y - 40, 30, 30);
  // c.fillRect(this.x + 50, this.y - 40, 30, 30);
  // c.fillRect(this.x + 90, this.y - 40, 30, 30);
  //
  // c.fillRect(this.x - 120, this.y + 10, 30, 30);
  // c.fillRect(this.x - 80, this.y + 10, 30, 30);
  // c.fillRect(this.x + 50, this.y + 10, 30, 30);
  // c.fillRect(this.x + 90, this.y + 10, 30, 30);
  //
  // c.fillRect(this.x - 120, this.y + 50, 30, 30);
  // c.fillRect(this.x - 80, this.y + 50, 30, 30);
  // c.fillRect(this.x - 40, this.y + 50, 30, 30);
  // c.fillRect(this.x + 10, this.y + 50, 30, 30);
  // c.fillRect(this.x + 50, this.y + 50, 30, 30);
  // c.fillRect(this.x + 90, this.y + 50, 30, 30);
  //
  // c.fillRect(this.x - 80, this.y + 90, 30, 30);
  // c.fillRect(this.x - 40, this.y + 90, 30, 30);
  // c.fillRect(this.x + 10, this.y + 90, 30, 30);
  // c.fillRect(this.x + 50, this.y + 90, 30, 30);
  //
  //
  // // 5 graus
  // c.fillStyle = "rgba(200,200,200, 1)";
  // c.fillRect(this.x - 48, this.y - 48, 22, 22);
  // c.fillRect(this.x - 24, this.y - 48, 22, 22);
  // c.fillRect(this.x + 2, this.y - 48, 22, 22);
  // c.fillRect(this.x + 26, this.y - 48, 22, 22);
  //
  //
  // c.fillRect(this.x - 48, this.y - 24, 22, 22);
  // c.fillRect(this.x - 24, this.y - 24, 22, 22);
  // c.fillRect(this.x + 2, this.y - 24, 22, 22);
  // c.fillRect(this.x + 26, this.y - 24, 22, 22);
  //
  //
  // c.fillRect(this.x - 48, this.y + 2, 22, 22);
  // c.fillRect(this.x - 24, this.y + 2, 22, 22);
  // c.fillRect(this.x + 2, this.y + 2, 22, 22);
  // c.fillRect(this.x + 26, this.y + 2, 22, 22);
  //
  //
  // c.fillRect(this.x - 48, this.y + 26, 22, 22);
  // c.fillRect(this.x - 24, this.y + 26, 22, 22);
  // c.fillRect(this.x + 2, this.y + 26, 22, 22);
  // c.fillRect(this.x + 26, this.y + 26, 22, 22);


  // c.fillStyle = "rgba(200,200,200, 0.6)";
  // c.fillRect(this.x - 50, this.y - 50, 100, 100);
};

Stimulus.prototype.update = function(canvas, mouse) {
  this.draw(canvas);
};

export default Stimulus;
