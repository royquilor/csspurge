// http://bl.ocks.org/syntagmatic/5107530

var num7 = 2016;

var canvas7 = document.getElementById("purge-atoms");
var width7 = canvas7.width = 1440;
var height7 = canvas7.height = 600;
var ctx7 = canvas7.getContext("2d");

var particles7 = d3.range(num7).map(function(i) {
  return [Math.round(width7*Math.random()), Math.round(height7*Math.random())];
});

d3.timer(step7);

function step7() {
  ctx7.fillStyle = "rgba(255,255,255,0.3)";
  ctx7.fillRect(0,0,width7,height7);
  ctx7.fillStyle = "rgba(241,23,18,1.0)";

  particles7.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width7;
      if (p[0] > width7) p[0] = 0;
      if (p[1] < 0) p[1] = height7;
      if (p[1] > height7) p[1] = 0;
    drawPoints7(p);
  });
};

function drawPoints7(p) {
  ctx7.fillRect(p[0],p[1],1,1);
};
