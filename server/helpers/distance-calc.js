module.exports = function(a,b){
	// expect a and b to be in form [x,y]
	var horizontal = Math.abs(a[0] - b[0]);
	var vertical = Math.abs(a[1] - b[1]);
	var distance = Math.sqrt(Math.pow(horizontal, 2) + Math.pow(vertical, 2));
	return distance;
}