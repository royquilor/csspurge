var num4 = 40;

var canvas4 = document.getElementById("tachyons-atoms");
var width4 = canvas4.width = 80;
var height4 = canvas4.height = 80;
var ctx4 = canvas4.getContext("2d");

var particles4 = d3.range(num4).map(function(i) {
  return [Math.round(width4*Math.random()), Math.round(height4*Math.random())];
});

d3.timer(step4);

function step4() {
  ctx4.fillStyle = "rgba(255,255,255,0.3)";
  ctx4.fillRect(0,0,width4,height4);
  ctx4.fillStyle = "rgba(0,153,247,1.0)";

  particles4.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width4;
      if (p[0] > width4) p[0] = 0;
      if (p[1] < 0) p[1] = height4;
      if (p[1] > height4) p[1] = 0;
    drawPoints4(p);
  });
};

function drawPoints4(p) {
  ctx4.fillRect(p[0],p[1],1,1);
};
