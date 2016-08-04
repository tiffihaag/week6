$(document).ready(function() {

	$(document.body).on('click', '.polButton', function() {
        var politician = $(this).attr("data-person");
        console.log(politician);
        getPics(politician);

	}); //onclick function

	$('#subButton').on('click', function() {
        var politician = $('#politician').val();
        console.log(politician);
        getPics(politician);

    	var newButton = $("<button class='polButton' data-person='" + politician + "'>" + politician + "</button>");
        $('#buttonList').append(newButton);
             
	}); //onclick function

function getPics(politician) {
		$(".imgPlace").empty();

	 		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + politician + "&api_key=dc6zaTOxFJmzC&limit=10";

	        $.ajax({url: queryURL, method: 'GET'})
	        .done(function(response) {
	        	
	        	for (var i = 0; i < 10; i++) {
		        	var imageUrl = response.data[i].images.downsized_large.url;

		        	var imgHtml = "<img src = '" + imageUrl + "' height='200' width='200'>";
		        	$(imgHtml).appendTo(".imgPlace");
	        	}
	        });
	}
}); //docready function