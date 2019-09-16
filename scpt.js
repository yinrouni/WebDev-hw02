// present the infix expression user inputs
var toCal =[];

//"C": clear the previous input and the display.
document.getElementById("button-clear").addEventListener("click", function(){
	document.getElementById("display").innerHTML = "";
	toCal =[];
});


/*
"+/=":
This can works as "+" and "=". When there are more than 1 operands in the infix expression, it's "=". Otherwise, it works as "+".
As "+": it will be added into the infix expression (toCal) when pressed, like other operators.
As "=": the infix expression will be evaluate when pressed. Convert the infix expression into postfix first, and then evaluate.
*/
document.getElementById("+/=").addEventListener("click", function(){
	
	// +/= button works as =
	if (toCal.length > 1){
		toCal.push(Number(document.getElementById("display").innerHTML));
		
		//covertToPostfix(toCal);

		// function calculate
		var calculate = function(){
			// function convert
			var postfix = function(infix){
			var help = [];
			var result = [];
			var x;
			//function: compare the precedence of the operators
			var isGreaterThan = function(opa, opb){
				if(["*", "/"].indexOf(opa)>-1 && ["+", "-"].indexOf(opb) > -1){
					return true;
				}
				return false;
			}

			for (x of infix){
				if (typeof(x) == "number"){
					result.push(x);
				}
				else{
					if (help.length == 0){
						help.push(x);
					}
			
					else{
						while(help.length != 0 && !isGreaterThan(x, help[help.length -1])){
							result.push(help.pop());
						}
						help.push(x);
					}

				}
			}
			while(help.length != 0){
				result.push(help.pop());
			}
			return result;
		};

	
		//evaluate the postfix
		var help = [];
		var x;
		for (x of postfix(toCal)){
			if (typeof(x) == "number"){
			help.push(x);
			}
			else {
				var a = help.pop();
				var b = help.pop();
			
				switch(x){
					case"+":
						help.push(a + b);
						break;
					case "*":
						help.push(a*b);
						break;
					case "-":
						help.push(b-a);
						break;
					case "/":
						help.push(b/a);
						break;
				}
		
			}
		
		}
		return help[0];

		};
		var result = calculate();
		document.getElementById("display").innerHTML = result;
		toCal = [result];
	}

	// +/= button works as +
	else {
		if (toCal.length < 1){
			toCal.push(Number(document.getElementById("display").innerHTML));
		}
		toCal.push("+")
		document.getElementById("display").innerHTML = "";
	}
});


document.getElementById("-").addEventListener("click", function(){
	// If staring a new number with a "-", it is a negative number.
	if (document.getElementById("display").innerHTML == ""){
		document.getElementById("display").innerHTML = "-";
		return;
	}
	if (typeof(toCal[toCal.length -1]) != "number"){
		toCal.push(Number(document.getElementById("display").innerHTML));}
	toCal.push("-");
	document.getElementById("display").innerHTML = "";
});


document.getElementById("times").addEventListener("click", function(){
	if (typeof(toCal[toCal.length -1]) != "number"){
		toCal.push(Number(document.getElementById("display").innerHTML));}
	toCal.push("*");
	document.getElementById("display").innerHTML = "";	
});

document.getElementById("divide").addEventListener("click", function(){
	if (typeof(toCal[toCal.length -1]) != "number"){
		toCal.push(Number(document.getElementById("display").innerHTML));}
	toCal.push("/");
	document.getElementById("display").innerHTML = "";	
});



// Add event listeners to number buttons. Add a digit or start a new number when pressed.
(function(){
	for(var btn of document.getElementsByClassName("button-number")){
		btn.addEventListener("click", function(){
			var pressed = this.innerHTML;
			var cur = document.getElementById("display").innerHTML;
			
			// The last result is remained in the display. If the number button is pressed, start a new number.
			if (toCal.length == 1){
				document.getElementById("display").innerHTML = pressed;
				toCal.pop();
				return;

			}

			// Avoid multiple floating point in the input.
			if (pressed != "." || cur.indexOf(".") == -1){
				document.getElementById("display").innerHTML = cur + pressed;
			}
	
		});
	}

})();


