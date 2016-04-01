var num1 = 674;

var canvas1 = document.getElementById("medium-atoms");
var width1 = canvas1.width = 80;
var height1 = canvas1.height = 80;
var ctx1 = canvas1.getContext("2d");

var particles1 = d3.range(num1).map(function(i) {
  return [Math.round(width1*Math.random()), Math.round(height1*Math.random())];
});

d3.timer(step1);

function step1() {
  ctx1.fillStyle = "rgba(255,255,255,0.3)";
  ctx1.fillRect(0,0,width1,height1);
  ctx1.fillStyle = "rgba(47,184,139,1.0)";

  particles1.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width1;
      if (p[0] > width1) p[0] = 0;
      if (p[1] < 0) p[1] = height1;
      if (p[1] > height1) p[1] = 0;
    drawPoints1(p);
  });
};

// function formula(p) {
//
// };

function drawPoints1(p) {
  ctx1.fillRect(p[0],p[1],1,1);
};
