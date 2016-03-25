var num1 = 674;

var canvas = document.getElementById("medium-atoms");
var width = canvas.width = 320;
var height = canvas.height = 100;
var ctx = canvas.getContext("2d");

var particles1 = d3.range(num1).map(function(i) {
  return [Math.round(width*Math.random()), Math.round(height*Math.random())];
});

d3.timer(step);

function step() {
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  // ctx.fillStyle = "rgba(241,223,218,1.0)";
  ctx.fillRect(0,0,width,height);
  // ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillStyle = "rgba(241,23,18,1.0)";

  particles1.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width;
      if (p[0] > width) p[0] = 0;
      if (p[1] < 0) p[1] = height;
      if (p[1] > height) p[1] = 0;
    drawPoints1(p);
  });
};

// function formula(p) {
//
// };

function drawPoints1(p) {
  ctx.fillRect(p[0],p[1],1,1);
};
