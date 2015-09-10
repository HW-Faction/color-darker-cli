#! /usr/bin/env node
if (process.argv.length < 3) console.log("color is required as HEX");
else {
	var color = process.argv[2];
	if (process.argv.length < 4) console.log("percentage is required as float[-1,1]");
	else {
		var percentage = process.argv[3];
		console.log(colorDarker(color, percentage));
	}
}
function colorDarker(hex, lum) {
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}