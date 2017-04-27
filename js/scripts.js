function drawTree(treeHeight) {
	
	for (var i = 1; i <= treeHeight; i++) {
			var star = '*';
		for (var j = 1; j < i; j++) {
			star += ' ';
			star += '*';
		}
	console.log(star);
	}
}

drawTree(1);
drawTree(2);
drawTree(3);
drawTree(4);
drawTree(5);