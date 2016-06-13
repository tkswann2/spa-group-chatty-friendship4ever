var Chatty = (function (oldChatty) {
	var userMessages = [],
			outputUl = document.getElementById('messageOutput'),
			inputEl = document.getElementById('textInput');

	oldChatty.parseJSON = function (jsonData) {
		var newMsg;
				for (var i = 0; i < jsonData.messages.length; i++) {
					var msg = jsonData.messages[i].msg,
							message = document.createElement('li'),
							messageText = document.createElement('p'),
							messageDelete = document.createElement('button');

							messageText.innerText = msg;
							messageDelete.innerText = "Delete";

							message.appendChild(messageText);
							message.appendChild(messageDelete);
							newMsg = message;
							outputUl.appendChild(newMsg);		
				}
	};

	oldChatty.parseMessage = function (element, userInput) {
		 var newMsg;
		 var msg = userInput,
		 		message = document.createElement('li'),
		 		messageText = document.createElement('p'),
		 		messageDelete = document.createElement('button');

				messageText.innerText = msg;
				messageDelete.innerText = "Delete";

				message.appendChild(messageText);
				message.appendChild(messageDelete);
				newMsg = message;
				userMessages.push(newMsg);
				element.appendChild(newMsg);		
	};

	oldChatty.getUserMessages = function () {
		return userMessages;
	};

	oldChatty.addEvents = function () {
		inputEl.addEventListener('keydown', enterListener);
	}
	
	return oldChatty;
})(Chatty || {});