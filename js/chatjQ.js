$(document).ready(function () {
'use strict';

	$.ajax({
		url: 'js/messages.json'
		}).done (parseJson);

	 function parseJson (data) {
		  let li = 	'',
		   		$messageArray = $(data.messages),
		   		$messageOutput = $('#messageOutput'),
		   		$body = $('body');

			// console.log(data.messages);
			$messageArray.each(function () {
					li += `<li>
										<div class="messageWrap">
											<p class="username">${this.msg.username}::</p>
											<p>${this.msg.msg}</p>
											<p class="time">Today bitch</p>
										</div>
										<button class='edit'>Edit</button>
										<button class='delete'>X</button>
									</li>
						     `
					});

			$messageOutput.append(li);
		};
});