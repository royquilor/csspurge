var num3 = 600;

var canvas3 = document.getElementById("stackoverflow-atoms");
var width = canvas3.width = 320;
var height = canvas3.height = 100;
var ctx3 = canvas3.getContext("2d");

var particles3 = d3.range(num3).map(function(i) {
  return [Math.round(width*Math.random()), Math.round(height*Math.random())];
});

d3.timer(step);

function step() {
  ctx3.fillStyle = "rgba(255,255,255,0.3)";
  ctx3.fillRect(0,0,width,height);
  ctx3.fillStyle = "rgba(0,0,0,0.5)";

  particles3.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width;
      if (p[0] > width) p[0] = 0;
      if (p[1] < 0) p[1] = height;
      if (p[1] > height) p[1] = 0;
    drawPoints3(p);
  });
};

function drawPoints3(p) {
  ctx3.fillRect(p[0],p[1],1,1);
};
