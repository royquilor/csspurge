/*
	@id canvas ID
	@w canvas width
	@h canvas height
	@qnt number of particles
	@color particle fill color
*/
function createAtoms (id, w, h, qnt, color) {
	var canvas = document.getElementById(id);
	canvas.width = w;
	canvas.height = h;
	var ctx = canvas.getContext("2d");

	var particles = d3.range(qnt).map(function(i) {
	  return [Math.round(w*Math.random()), Math.round(h*Math.random())];
	});

	d3.timer(step);

	function step () {
	  ctx.fillStyle = "rgba(255,255,255,0.3)";
	  ctx.fillRect(0, 0, w, h);
	  ctx.fillStyle = color;

	  particles.forEach(function(p) {
	      p[0] += Math.round(2*Math.random()-1);
	      p[1] += Math.round(2*Math.random()-1);
	      if (p[0] < 0) p[0] = w;
	      if (p[0] > w) p[0] = 0;
	      if (p[1] < 0) p[1] = h;
	      if (p[1] > h) p[1] = 0;
	    drawPoints(p);
	  });
	};

	function drawPoints (p) {
	  ctx.fillRect(p[0],p[1],1,1);
	};
}