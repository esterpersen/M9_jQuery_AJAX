$(document).ready(function () {

	$("#jokeButton").click(function (e) {
		e.preventDefault();
		$("#jokeGoesHere").html("");
		fetch("http://api.icndb.com/jokes/random").then(response => {
			return response.json();
		}).then(data => {
			return data.value;
		}).then(valueOfData => {
			return valueOfData.joke
		}).then(theJoke => {
			$("#jokeGoesHere").html(theJoke);
		}).catch (e =>{
			console.log(e);
		})
	});

	$("#jokeButton").click();
});