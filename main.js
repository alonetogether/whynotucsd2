// Not in function so code is automatically called when script is loaded
// Add Header to the beginning of any GoalPeer webpage
// JQuery .get()
$.get("header.html", function(data) { 
	$(document.body).prepend(data);
});

// Not in function so code is automatically called when script is loaded
// Add NavBar footer to the end of any GoalPeer webpage
// JQuery .get()
$.get("navbar.html", function(data) { 
	$(document.body).append(data);
});