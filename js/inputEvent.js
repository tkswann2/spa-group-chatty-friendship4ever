function enterListener (e) {
	let output = document.getElementById('messageOutput'),
			input = document.getElementById('textInput').value,
			clearButton = document.getElementById('clearBoard');
	if (e.keyCode === 13 && input !== '') {
		// pass an output element and input value to function for loading to the DOM
				Chatty.parseMessage(output, input);
				// enable the clear messages button once messages have been added to the DOM
				clearButton.removeAttribute('disabled');
	}
}

// clear all messages from DOM, disable clear messages button
function clearMessages () {
	let output = document.getElementById('messageOutput');
	output.innerHTML = '';
	this.setAttribute('disabled', 'true');
}

// load IIFE funcs
Chatty.loadMessages();
Chatty.addEvents();


