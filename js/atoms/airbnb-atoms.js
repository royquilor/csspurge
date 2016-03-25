var num6 = 356;
var canvas6 = document.getElementById("airbnb-atoms");
var width6 = canvas6.width = 400;
var height6 = canvas6.height = 100;
var ctx6 = canvas6.getContext("2d");

var particles6 = d3.range(num6).map(function(i) {
  return [Math.round(width6*Math.random()), Math.round(height6*Math.random())];
});

d3.timer(step6);

function step6() {
  ctx6.fillStyle = "rgba(255,255,255,0.3)";
  ctx6.fillRect(0,0,width6,height6);
  ctx6.fillStyle = "rgba(253,92,99,0.5)";

  particles6.forEach(function(p) {
      p[0] += Math.round(2*Math.random()-1);
      p[1] += Math.round(2*Math.random()-1);
      if (p[0] < 0) p[0] = width6;
      if (p[0] > width6) p[0] = 0;
      if (p[1] < 0) p[1] = height6;
      if (p[1] > height6) p[1] = 0;
    drawPoints6(p);
  });
};

function drawPoints6(p) {
  ctx6.fillRect(p[0],p[1],1,1);
};
