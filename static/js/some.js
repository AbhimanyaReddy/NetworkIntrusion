$(document).ready(function() {
	
	$('form').on('submit', function(event) {	
	$('.ajaxProgress').show();	
	$('#successAlert').hide();
	$('#errorAlert').hide();				
		$.ajax({
			data : {
				info0 : $('#input-a').val(),
				info1 : $('#input-b').val(),
				info2 : $('#input-c').val(),
				info3 : $('#input-d').val(),
				info4 : $('#input-e').val(),
				info5 : $('#input-f').val(),
				info6 : $('#input-g').val(),
				info7 : $('#input-h').val()		
			},
			type : 'POST',
			url : '/predict',
			
		})
		.done(function(data) {
			$('.ajaxProgress').hide();
			if (data!="None") {

				$('#errorAlert').text(data).show();
				$('#successAlert').hide();
				
			}
			else
			{
					$('#successAlert').text(data).show();
					$('#errorAlert').hide();
				}
				
		
			
				
			

		});

		event.preventDefault();

	});

});