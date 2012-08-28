var dtd      = document.doctype;
var publicId = dtd.publicId ? ' PUBLIC "' + dtd.publicId + '"' : '';
var publicId = (publicId && dtd.systemId) ? publicId + ' "' + dtd.systemId + '"' : '';
var systemId = dtd.systemId ? ' SYSTEM "' + dtd.systemId + '"' : '';
var source   = "<!DOCTYPE " + dtd.name + (publicId || systemId) + '>';
var source   = source + "\n" + document.documentElement.outerHTML;

chrome.extension.sendMessage({source: source});
