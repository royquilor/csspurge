var num6 = 356;
var num6 = 50;
var canvas6 = document.getElementById("airbnb-atoms");
var width = canvas6.width = 320;
var height = canvas6.height = 100;
var ctx6 = canvas6.getContext("2d");

var particles6 = d3.range(num6).map(function(i) {
  return [Math.round(width*Math.random()), Math.round(height*Math.random())];
});

d3.timer(step);

function step() {
  ctx6.fillStyle = "rgba(255,255,255,0.3)";
  ctx6.fillRect(0,0,width,height);
  ctx6.fillStyle = "rgba(0,0,0,0.5)";

  particles6.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width;
      if (p[0] > width) p[0] = 0;
      if (p[1] < 0) p[1] = height;
      if (p[1] > height) p[1] = 0;
    drawPoints6(p);
  });
};

function drawPoints6(p) {
  ctx6.fillRect(p[0],p[1],1,1);
};
