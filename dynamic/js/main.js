var dots = [];
var SEED = 90;
var DIRECTIONS = [[0, 1], [1, 0]];
var swatches = ['#03bfb8', '#2a54b0', '#ea5514'];

var exportSVG = false;
function setup() {
	noStroke();
	createCanvas(1200, 1200);
	frameRate(1);
	translate(100, 100);
}

function link(c1, r1, offset1, offset2) {
	fill(swatches[Math.floor(random(3))]);
	rect(coordinate(c1, r1)[0] - 10, coordinate(c1, r1)[1] - 10, coordinate(offset1, offset2)[0] + 20, coordinate(offset1, offset2)[1] + 20, 50);
}

function coordinate(c, r) { // Convert (columns, row) to (x, y)
	var position = [ c * 50, r * 50];
	console.log(position);
	return position
}

function draw() {
	if(exportSVG) beginRecord();
	background(255)
	for ( var i = 0; i < 20; i ++) {
		var ary = [];
		for ( var j = 0; j < 20; j ++) {
			ary.push(0);
			fill(swatches[Math.floor(random(3))]);
			rect( i * 50 - 10, j * 50 - 10, 20, 20);
		}
		dots.push(ary);
	}

	for ( var i = 0; i < SEED; i ++) {
		var start = [ Math.floor(random(19)), Math.floor(random(19)) ];
		var offset;
		console.log(start, offset);

		offset = DIRECTIONS[ Math.floor(random(2)) ];

		
		link(start[0], start[1], offset[0], offset[1] );
	}

	if(exportSVG)
  {
    exportSVG = false;
    endRecord();
  }
}

function keyPressed()
{
  if(key == "S")
  {
    exportSVG = true;
  }
}