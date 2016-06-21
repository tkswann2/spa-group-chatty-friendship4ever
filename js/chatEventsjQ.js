$(document).ready(function () {
	'use strict';

	const $textInput = $('#textInput'),
				$outputUl = $('#messageOutput'),
				$body = $('body'),
				$clearMessages = $('#clearBoard'),
				$darkTheme = $('#darkTheme'),
				$largeFont = $('#largeFont'),
				$chattyBox = $('#chattyBox');

		$body.on('click', '.delete', function () {
			$(this).parent().remove();
			if ($outputUl.children().length === 0) {
				$clearMessages.attr('disabled', 'true');
			}
		});

		$body.on('click', '.edit', function () {
			console.log($(this)[0].previousElementSibling.children[1].innerText);
			let previousMessage = $(this)[0].previousElementSibling.children[1].innerText,
			    editInput = $(this)[0].previousElementSibling.children[1].innerHTML = `<input class='editInput' />`;
					
					$body.on('keyup', '.editInput', function (e) {
						if (e.keyCode === 13) {
							$(this).parent().html($(this).val());
						}
					});
		});


		$clearMessages.on('click', function () { 
			$outputUl.empty();
			$clearMessages.attr('disabled', 'true');
		});

		$textInput.on('keyup', function (e) {
			let newMsg = '';
			if (e.keyCode === 13) {
			console.log($textInput.val());
			newMsg += `<li>
									<div class="messageWrap">
										<p class='username'>White Dragon::</p>
										<p>${$textInput.val()}</p>
										<p class='time'>Now bitch</p>
									</div>
										<button class='edit'>Edit</button>
										<button class='delete'>X</button>
								</li>`;
			$outputUl.append(newMsg);
			$textInput.val('');
			$clearMessages.removeAttr('disabled');
		  }
		});

		$darkTheme.on('click', function () {
			console.log('hello');
			$chattyBox.toggleClass('legendDark');
		});

		$largeFont.on('click', function () {
			$chattyBox.toggleClass('largeFont');
		});
});