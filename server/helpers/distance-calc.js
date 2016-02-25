module.exports = function(a,b){
	// expect a and b to be in form {x:int, y:int}
	var horizontal = Math.abs(a.x - b.x);
	var vertical = Math.abs(a.y - b.y);
	var distance = Math.sqrt(Math.pow(horizontal, 2) + Math.pow(vertical, 2));
	return distance;
}