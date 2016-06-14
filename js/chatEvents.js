var Chatty = (function (oldChatty) {
	var userMessages = [],
			outputUl = document.getElementById('messageOutput'),
			inputEl = document.getElementById('textInput'),
			clearButton = document.getElementById('clearBoard'),
			counter = 0;

	oldChatty.parseJSON = function (jsonData) {
		var newMsg;
				for (var i = 0, j = jsonData.messages.length; i < j; i++) {
					var msgObj = jsonData.messages[i],
							msg = msgObj.msg.msg,
							userName =	`${msgObj.msg.username}::&nbsp;&nbsp;`,
							message = document.createElement('li'),
							messageUserName = document.createElement('p'),
							messageText = document.createElement('p'),
							messageDate = document.createElement('p'),
							messageDelete = document.createElement('button'),
							messageEdit = document.createElement('button'),
							timeStamp = new Date().toString();

							messageUserName.innerHTML = userName;
							messageUserName.classList.add('username');

							messageText.innerText = msg;

							messageDate.innerText = timeStamp;
							messageDate.classList.add('time');

							messageEdit.innerText = "Edit";
							messageEdit.classList.add("edit");

							messageDelete.innerText = "X";
							messageDelete.classList.add("delete");

							message.appendChild(messageUserName);
							message.appendChild(messageText);
							message.appendChild(messageDelete);
							message.appendChild(messageEdit);
							message.appendChild(messageDate);
							newMsg = message;
							outputUl.appendChild(newMsg);		
				}
	};

	oldChatty.parseMessage = function (element, userInput) {
		 var newMsg;
		 var msg = userInput,
		 		message = document.createElement('li'),
		 		messageUserName = document.createElement('p'),
		 		messageText = document.createElement('p'),
		 		messageDate = document.createElement('p'),
		 		messageDelete = document.createElement('button'),
				messageEdit = document.createElement('button'),
				timeStamp = new Date().toString();

				message.id = counter;
				counter++;

				messageUserName.innerHTML = `WhiteDragon::&nbsp;&nbsp`;
				messageUserName.classList.add('username');

				messageText.innerText = msg;

				messageDate.innerText = timeStamp;
				messageDate.classList.add('time');

				messageEdit.innerText = "Edit";
				messageEdit.classList.add("edit");

				messageDelete.innerText = "X";
				messageDelete.classList.add("delete");

				message.appendChild(messageUserName);
				message.appendChild(messageText);
				message.appendChild(messageDelete);
				message.appendChild(messageEdit);
				message.appendChild(messageDate);
				newMsg = message;
				element.appendChild(newMsg);	

				userMessages.push(newMsg);
				inputEl.value = '';
	};

	oldChatty.getUserMessages = function () {
		return userMessages;
	};


	oldChatty.addEvents = function () {
		inputEl.addEventListener('keydown', enterListener);
		clearButton.addEventListener('click', clearMessages);
		document.querySelector("body").addEventListener("click", function () {
			index = event.target.parentNode.id;
			Chatty.deleteEvents(event, index);
		});
	};

	
	return oldChatty;
})(Chatty || {});