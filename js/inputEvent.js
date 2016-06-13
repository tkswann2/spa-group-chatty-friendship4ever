function handleEvents () {
	let output = document.getElementById('messageOutput'),
			input = document.getElementById('textInput').value;

			Chatty.parseMessage(output, input);
};


function enterListener (e) {
	if (e.keyCode === 13) {
		handleEvents();
	}
}

Chatty.addEvents();


