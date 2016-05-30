function fizzBuzz(){
	var arry=[];
	function isDivBy3(num) {
		return (num%3===0);
	};

	function isDivBy5(num) {
		return (num%5===0);
	};

	function itContains3(num) {
		return ((num+"").indexOf("3")!=-1);
	}

	function itContains5(num) {
		return ((num+"").indexOf("5")!=-1);
	}

	for (var i=1;i<=100;i++){

		if ( isDivBy3(i) && isDivBy5(i) ) {
			arry.push("fizzbuzz");
		}
		else if ( isDivBy3(i) || itContains3(i) ) {
			arry.push("fizz");
		}
		else if ( isDivBy5(i) || itContains5(i) ){
			arry.push("buzz");
		}
		else {
			arry.push(i);
		}
	}
	return arry;
};
