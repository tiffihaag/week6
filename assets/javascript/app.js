$(document).ready(function(){

	$('#subButton').on('click', function() {
        var politician = $('#politician').val();
        console.log(politician);

        $(".imgPlace").empty();

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + politician + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
        	for (var i = 0; i < 10; i++) {
	        	var imageUrl = response.data[i].images.downsized_large.url;
	        	console.log(imageUrl);
	        	var imgHtml = "<img src = '" + imageUrl + "' height='200' width='200'>";
	        	$(imgHtml).appendTo(".imgPlace");
        	}

        	var newButton = "<button class='polButton2' data-person='" + politician + "'>" + politician + "</button>";
	        $(newButton).appendTo("#buttonList");

	        $('.polButton2').on('click', function() {
		        var politician = $(this).attr("data-person");
		        console.log(politician);
		        getPics(politician);

			}); //onclick function
        });     
	}); //onclick function


	$('.polButton').on('click', function() {
        var politician = $(this).attr("data-person");
        console.log(politician);
        getPics(politician);

	}); //onclick function

	function getPics(politician) {
		$(".imgPlace").empty();
			console.log(politician);

	 		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + politician + "&api_key=dc6zaTOxFJmzC&limit=10";

	        $.ajax({url: queryURL, method: 'GET'})
	        .done(function(response) {
	        	for (var i = 0; i < 10; i++) {
		        	var imageUrl = response.data[i].images.downsized_large.url;
		        	//console.log(imageUrl);

		        	var imgHtml = "<img src = '" + imageUrl + "' height='200' width='200'>";
		        	$(imgHtml).appendTo(".imgPlace");
	        	}
	        });
		}
}); //docready function