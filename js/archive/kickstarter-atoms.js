var num5 = 991;

var canvas5 = document.getElementById("kickstarter-atoms");
var width = canvas5.width = 320;
var height = canvas5.height = 100;
var ctx5 = canvas5.getContext("2d");

var particles5 = d3.range(num5).map(function(i) {
  return [Math.round(width*Math.random()), Math.round(height*Math.random())];
});

d3.timer(step);

function step() {
  ctx5.fillStyle = "rgba(255,255,255,0.3)";
  ctx5.fillRect(0,0,width,height);
  ctx5.fillStyle = "rgba(0,0,0,0.5)";

  particles5.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width;
      if (p[0] > width) p[0] = 0;
      if (p[1] < 0) p[1] = height;
      if (p[1] > height) p[1] = 0;
    drawPoints5(p);
  });
};

function drawPoints5(p) {
  ctx5.fillRect(p[0],p[1],1,1);
};
