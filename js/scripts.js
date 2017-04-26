function drawTree(n) {
	var star = "";
	
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j < n; j++) {
			star += "";
		}
		for (var j = n-i+1; j < n+i; j++) {
			star += "*";
		}
		for (var j = n+i; j <= 2*n-i; j++) {
			star += "";
		}
		star += "\n"; 
	}
	return star;
}

console.log(drawTree(1));
console.log(drawTree(2));
console.log(drawTree(3));
console.log(drawTree(4));
console.log(drawTree(5));