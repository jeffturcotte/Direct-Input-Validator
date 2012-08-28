var xhr = new XMLHttpRequest();
xhr.open("GET", window.location.href, true);
xhr.onload = function(e) {
	chrome.extension.sendMessage({source: xhr.responseText});
}
xhr.send();

