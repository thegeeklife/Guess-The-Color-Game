var numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay")
// colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init()

function init(){
	// Easy/Hard mode button event listeners
	setupModeButtons();
	
	//setup square listeners
	setupSquareListeners();
	reset();
}


function setupModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
		//remove from both buttons and add later to the one thats selected
		for(var i=0; i<modeButtons.length; i++){
			modeButtons[i].classList.remove("selected");
		}
		this.classList.add("selected");
		//this refers to whatever was clicked on. we added the class but we need to switch ofd the old one
		
		//a funtion reset() will do the following:
		//figure how many squares to show
		//pick new colors
		//pick a new picked color
		//update page to reflect changes
		//running reset, we need to update numSquares
		if(this.textContent === "Easy"){
			numSquares = 3;
			maxTry = 2;
		}else if(this.textContent=="Medium"){
			numSquares = 6;
			maxTry = 4;
		}else{
			numSquares = 9;
			maxTry = 3;
		}
		reset();
	})
	}
}

function setupSquareListeners(){
	for(var i=0; i<squares.length;i++){
	//add initial colors to squares
	//squares[i].style.backgroundColor = colors[i];

	//add click listener
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			
			//IF YOU WIN
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "You got it right!";
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?"
				h1.style.backgroundColor = clickedColor;
			}else{
		 	// alert("wrong!")
				resetButton.textContent = "Reset";
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Oops! Try Again";
			}
		})
	}
}

function reset(){
	//figure how many squares to show
	//pick new colors
	//pick a new picked color
	//update page to reflect changes
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Reset";
	messageDisplay.textContent="";
	//change square colors
	for(var i = 0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

//First select all squares

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color){
	//loop through all squares and change each  to match given color
	for(var i = 0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

resetButton.addEventListener("click",function(){
	reset();
})

function generateRandomColors(num){
		//make array
		var arr =[]
		//add num random colors
		for(var i=0;i<num;i++){
			//get random color and add to array
			arr.push(randomColor());
		}
		// return array
		return arr;
	}

function randomColor(){
	//pick red from 0-255
	var r = Math.floor(Math.random() *256)
	//pick green
	var g = Math.floor(Math.random() *256)
	//pick blue
	var b = Math.floor(Math.random() *256)
	// make it in the format of "rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
