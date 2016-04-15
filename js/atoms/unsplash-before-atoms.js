// http://bl.ocks.org/syntagmatic/5107530

var num8 = 252;

var canvas8 = document.getElementById("unsplash-before-atoms");
var width8 = canvas8.width = 720;
var height8 = canvas8.height = 600;
var ctx8 = canvas8.getContext("2d");

var particles8 = d3.range(num8).map(function(i) {
  return [Math.round(width8*Math.random()), Math.round(height8*Math.random())];
});

d3.timer(step8);

function step8() {
  ctx8.fillStyle = "rgba(255,255,255,0.3)";
  ctx8.fillRect(0,0,width8,height8);
  ctx8.fillStyle = "rgba(241,23,18,1.0)";

  particles8.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width8;
      if (p[0] > width8) p[0] = 0;
      if (p[1] < 0) p[1] = height8;
      if (p[1] > height8) p[1] = 0;
    drawPoints8(p);
  });
};

function drawPoints8(p) {
  ctx8.fillRect(p[0],p[1],1,1);
};
