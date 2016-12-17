var parseID = 'yZuw4uxhimHRUsijxdq7tb0yMF3mbpJZQn5GixjJ';
var parseRestKey = 'EC53WtovFe0hcvetQ1PXcYby3kqPVCqkZxG4KrxA';

$(docuemnt).ready(function(){
	getMessage();
	$("#send").click(function() {	
		var username = $('input[name=username]').attr('value');
		var username = $('input[name=message]').attr('value');
		console.log(username);
		console.log('!'');
		$.ajax({
			url: 'http://api.parse.com/1/classes/MessageBoard',
			headers: {'X-Parse-Application-Id': parseID, 'X-Parse-REST-API-Key': parseRestKey}
			contentType:'application/json',
			processData: false,
			data: JSON.stringify({
				'username': username,
				'message': message
			}),
			type: 'POST',
			success: function(){
				console.log('sent');
				getMessages();
			},
			error: function () {
				console.log('error')
			}
		});
	});
})
