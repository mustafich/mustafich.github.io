$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		alert("Спасибо за отправку формы.");
	});
});
