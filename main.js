// Add Header to the beginning of any GoalPeer webpage
function addHeader() {
	// JQuery .get()
	$.get("header.html", function(data) { 
		$(document.body).prepend(data);
	});
}