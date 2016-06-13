var Chatty = (function (oldChatty) {
	var messages = [];
		
		oldChatty.loadMessages = function () {
			let oldMessages = new XMLHttpRequest();

					oldMessages.addEventListener('load', function () {
						messages = JSON.parse(this.responseText);
						Chatty.parseJSON(messages);
					});

					oldMessages.open('GET', 'js/messages.json');
					oldMessages.send();
		};

		oldChatty.getMessages = function () {
			return messages;
		};


	return oldChatty;
})(Chatty || {});


Chatty.loadMessages();
