var num5 = 991;

var canvas5 = document.getElementById("kickstarter-atoms");
var width5 = canvas5.width = 80;
var height5 = canvas5.height = 80;
var ctx5 = canvas5.getContext("2d");

var particles5 = d3.range(num5).map(function(i) {
  return [Math.round(width5*Math.random()), Math.round(height5*Math.random())];
});

d3.timer(step5);

function step5() {
  ctx5.fillStyle = "rgba(255,255,255,0.3)";
  ctx5.fillRect(0,0,width5,height5);
  ctx5.fillStyle = "rgba(43,222,115,1.0)";

  particles5.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width5;
      if (p[0] > width5) p[0] = 0;
      if (p[1] < 0) p[1] = height5;
      if (p[1] > height5) p[1] = 0;
    drawPoints5(p);
  });
};

function drawPoints5(p) {
  ctx5.fillRect(p[0],p[1],1,1);
};
