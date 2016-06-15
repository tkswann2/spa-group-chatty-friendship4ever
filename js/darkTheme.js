

document.getElementById("darkTheme").addEventListener("click", function() {

var chattyBox = document.getElementById("chattyBox"); 

var messagesDark = document.getElementById("messageOutput");


	if (event.target.checked) {
	    chattyBox.classList.toggle('legendDark');
	    messagesDark.classList.toggle('messageOutput');
	    
	 }

	else {
	    chattyBox.classList.toggle('legendDark');
	    messagesDark.classList.toggle('messageOutput');
	    
	}
});


 // large font //


document.getElementById("largeFont").addEventListener("click", function() {

	var messagesLarge = document.getElementById("messageOutput");

		if (event.target.checked) { 
			messagesLarge.classList.toggle('largeFont');
		}

		else { 
			messagesLarge.classList.toggle('largeFont');
		}
});







