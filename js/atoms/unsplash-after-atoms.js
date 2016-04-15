// http://bl.ocks.org/syntagmatic/5107530

var num9 = 61;

var canvas9 = document.getElementById("unsplash-after-atoms");
var width9 = canvas9.width = 720;
var height9 = canvas9.height = 600;
var ctx9 = canvas9.getContext("2d");

var particles9 = d3.range(num9).map(function(i) {
  return [Math.round(width9*Math.random()), Math.round(height9*Math.random())];
});

d3.timer(step9);

function step9() {
  ctx9.fillStyle = "rgba(255,255,255,0.3)";
  ctx9.fillRect(0,0,width9,height9);
  ctx9.fillStyle = "rgba(0,153,247,1.0)";

  particles9.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width9;
      if (p[0] > width9) p[0] = 0;
      if (p[1] < 0) p[1] = height9;
      if (p[1] > height9) p[1] = 0;
    drawPoints9(p);
  });
};

function drawPoints9(p) {
  ctx9.fillRect(p[0],p[1],1,1);
};
