$(document).ready(function () {

	$("#jokeButton").click(function (e) {
		e.preventDefault();
		$("#jokeGoesHere").html("");

		$.ajax({
			type: "get",
			url: "http://api.icndb.com/jokes/random",
			data: "data",
			dataType: "json",
			success: function (data) {
				$("#jokeGoesHere").html(`${data.value.joke}`);
			},
			error: function (xhr, status, error) {
				console.log(xhr);
				console.log(status);
				console.log(error);
			}
		});
	});

	$("#jokeButton").click();

});