chrome.tabs.getSelected(null, function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "return_document.js"});
});

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		var f = document.createElement('form');
		f.action  = 'http://validator.w3.org/check';
		f.method  = "POST";
		f.enctype = "multipart/form-data";
		f.target  = 'validator_response';
		f.acceptCharset = 'utf-8';
		
		// issue is here
		console.log(request.source);
		var input = $('<input>>').prop({name: 'fragment'});
		input[0].value = request.source;
		$(f).append(input);
		$(f).submit();
	}
);
