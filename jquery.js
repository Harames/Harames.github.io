// In case we ever need jquery in our project
$( document ).ready(function() { 
				$('div').click(function() {
					$('.Header').fadeOut('slow');
				});
				$('div').click(function() {
					$('.Header').fadeIn('slow');
				});
			});