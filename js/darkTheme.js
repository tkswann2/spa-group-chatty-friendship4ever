

document.getElementById("darkTheme").addEventListener("click", function() {

var chattyBox = document.getElementById("chattyBox"); 

var messagesDark = document.getElementById("messageOutput");


	if (event.target.checked) {
	    chattyBox.classList.toggle('legendDark');
	    messagesDark.classList.toggle('messagesDark');
	    
	 }

	else {
	    chattyBox.classList.toggle('legendDark');
	    messagesDark.classList.toggle('messagesDark');
	    
	}
});











