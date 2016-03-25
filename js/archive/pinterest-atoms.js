var num2 = 1180;
var num2 = 76;
var canvas2 = document.getElementById("pinterest-atoms");
var width = canvas2.width = 320;
var height = canvas2.height = 100;
var ctx2 = canvas2.getContext("2d");

var particles2 = d3.range(num2).map(function(i) {
  return [Math.round(width*Math.random()), Math.round(height*Math.random())];
});

d3.timer(step);

function step() {
  ctx2.fillStyle = "rgba(255,255,255,0.3)";
  ctx2.fillRect(0,0,width,height);
  ctx2.fillStyle = "rgba(0,0,0,0.5)";

  particles2.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width;
      if (p[0] > width) p[0] = 0;
      if (p[1] < 0) p[1] = height;
      if (p[1] > height) p[1] = 0;
    drawPoints2(p);
  });
};

function drawPoints2(p) {
  ctx2.fillRect(p[0],p[1],1,1);
};
