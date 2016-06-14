
// var Chatty = (function (oldChatty) { 
	
// 	var darkCheckBox = document.getElementById('darkTheme');
// 	var messages = document.getElementById('messages');
	

// 		oldChatty.loadDarkTheme = function check() { 

// 			darkCheckBox.addEventListener("click", function (event) {
// 				console.log(event);
// 				if (event.target.checked === true) {
// 					loadDarkTheme;
// 				}

// 				else (event.target.unchecked === true) {

// 				}

// 			messages.classList.toggle('dark')
			



// 			});

// 		};


// 	return oldChatty;

// })(Chatty || {});

// Chatty.loadDarkTheme();




document.getElementById("darkTheme").addEventListener("click", function() {

var chattyBox = document.getElementById("chattyBox"); 
// var image = document.getElementById("image");

	if (event.target.checked) {
	    chattyBox.classList.toggle('legendDark');
	    chattyBox.classList.toggle('messagesDark');
	    chattyBox.classList.toggle('paragraphDark');
	    // chattyBox.classList.toggle('imageDark');
	 }

	else {
	    chattyBox.classList.toggle('legendDark');
	    chattyBox.classList.toggle('messagesDark');
	    chattyBox.classList.toggle('paragraphDark');
	    // chattyBox.classList.toggle('imageDark');

	}
});











