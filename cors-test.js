$(document).ready( function() {  
    console.log("Document ready..");
    console.log("Sending ajax request to https://alfresco.local.com:80/share/page, to test CORS enablement..");
    $.ajax
    ({
        dataType: "html",
        url: "https://alfresco.local.com:80/share/page",
		success: function(data, textStatus, xhr) {
			console.log("Got the successful response. See the response content below::::::::");
            console.log(data);
		},
		error: function(data, textStatus, xhr) {
			console.log("Failed to get the response!");
            console.log(data);
		},
		complete: function(xhr, textStatus) {
			console.log("Http status: "+xhr.status);
		} 
    });
});