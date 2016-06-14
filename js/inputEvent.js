function enterListener (e) {
	let output = document.getElementById('messageOutput'),
			input = document.getElementById('textInput').value,
			clearButton = document.getElementById('clearBoard');
	if (e.keyCode === 13 && input !== '') {
				Chatty.parseMessage(output, input);
				clearButton.removeAttribute('disabled');
	}
}

function clearMessages () {
	let output = document.getElementById('messageOutput');
	output.innerHTML = '';
	this.setAttribute('disabled', 'true');
}

Chatty.loadMessages();
Chatty.addEvents();


