var Chatty = (function (oldChatty) {
	var	oldContent;

	oldChatty.deleteEvents = function(event, index) {
			 // Handle the click event on any DOM element with a certain class
	 		 if (event.target.className === "delete") {
	 		 	// remove deleted message from private message array
	 		 	 Chatty.getUserMessages().splice(index, 1);
	 		 	 // remove selected message with delete button
	 		   event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	 		   
	 		 }
		};

		oldChatty.editEvents = function (event) {
			if (event.target.className === "edit") {
	 		 	// save old message content 
	 		   oldContent = event.path[1].children[1].innerText;
	 		   // add input box to innerHTML of clicked message
	 		   event.path[1].children[1].innerHTML = `<input type="text" id="editBox" />`;
	 		   // add messge content into edit input for better user interaction
	 		  var editInput =  event.path[1].children[1].children[0];
	 		  		editInput.value = oldContent;
	 		  		// editInput.select();
	 		   // diable edit button while in edit mode
	 		   event.target.setAttribute('disabled', 'true');
	 		 }

	 		 // Inspect the `id` property of the event target
	 		 if (event.target.id === "editBox") {
	 		   event.target.addEventListener('keydown', function (e) {
	 		   		 if (e.keyCode === 13 && event.target.value !== '') {
	 		   		 	// enable edit button after user is done
	 		   		  event.path[1].nextSibling.nextSibling.removeAttribute('disabled');	
	 		   		  // set message value to user input from edit box
	 		   			event.path[2].children[1].innerText = event.target.value;
	 		   		} else if (e.keyCode === 13 && event.target.value === '') {
	 		   		  // enable edit button after user is done
	 		   		  event.path[1].nextSibling.nextSibling.removeAttribute('disabled');
	 		   		  // if nothing changed, set the content to the old message
	 		   			event.path[2].children[1].innerText = oldContent;
	 		   		}
	 		   });
	 		  }
		};


  return oldChatty;
})(Chatty || {});