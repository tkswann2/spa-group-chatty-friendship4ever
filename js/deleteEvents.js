var Chatty = (function (oldChatty) {
	var	oldContent;

	oldChatty.deleteEvents = function(event, index) {
	 		 console.log(event);
			
	 		 // Handle the click event on any li
	 		 if (event.target.tagName.toLowerCase() === "li") {
	 		 }
			
	 		 // Handle the click event on any DOM element with a certain class
	 		 if (event.target.className === "delete") {
	 		 	 Chatty.getUserMessages().splice(index, 1);
	 		   event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	 		   
	 		 }
			
	 		 if (event.target.className === "edit") {
	 		   oldContent = event.path[1].children[1].innerText;
	 		   event.path[1].children[1].innerHTML = `<input type="text" id="editBox" />`;
	 		   event.path[1].children[1].children[0].value = oldContent;
	 		 }

	 		 // Inspect the `id` property of the event target
	 		 if (event.target.id === "editBox") {
	 		   event.target.addEventListener('keydown', function (e) {
	 		   		 if (e.keyCode === 13 && event.target.value !== '') {
	 		   			event.path[2].children[1].innerText = event.target.value;
	 		   		} else if (e.keyCode === 13 && event.target.value === '') {
	 		   			event.path[2].children[1].innerText = oldContent;
	 		   		}
	 		   });
	 				
	 		 }
		};


  return oldChatty;
})(Chatty || {});