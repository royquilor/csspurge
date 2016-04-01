// http://bl.ocks.org/syntagmatic/5107530

var num2 = 1180;

var canvas2 = document.getElementById("pinterest-atoms");
var width2 = canvas2.width = 80;
var height2 = canvas2.height = 80;
var ctx2 = canvas2.getContext("2d");

var particles2 = d3.range(num2).map(function(i) {
  return [Math.round(width2*Math.random()), Math.round(height2*Math.random())];
});

d3.timer(step2);

function step2() {
  ctx2.fillStyle = "rgba(255,255,255,0.3)";
  ctx2.fillRect(0,0,width2,height2);
  ctx2.fillStyle = "rgba(189,8,28,1.0)";

  particles2.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width2;
      if (p[0] > width2) p[0] = 0;
      if (p[1] < 0) p[1] = height2;
      if (p[1] > height2) p[1] = 0;
    drawPoints2(p);
  });
};

function drawPoints2(p) {
  ctx2.fillRect(p[0],p[1],1,1);
};
