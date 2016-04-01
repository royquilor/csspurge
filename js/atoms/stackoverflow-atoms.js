var num3 = 600;

var canvas3 = document.getElementById("stackoverflow-atoms");
var width3 = canvas3.width = 80;
var height3 = canvas3.height = 80;
var ctx3 = canvas3.getContext("2d");

var particles3 = d3.range(num3).map(function(i) {
  return [Math.round(width3*Math.random()), Math.round(height3*Math.random())];
});

d3.timer(step3);

function step3() {
  ctx3.fillStyle = "rgba(255,255,255,0.3)";
  ctx3.fillRect(0,0,width3,height3);
  ctx3.fillStyle = "rgba(254,122,21,1.0)";

  particles3.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width3;
      if (p[0] > width3) p[0] = 0;
      if (p[1] < 0) p[1] = height3;
      if (p[1] > height3) p[1] = 0;
    drawPoints3(p);
  });
};

function drawPoints3(p) {
  ctx3.fillRect(p[0],p[1],1,1);
};
