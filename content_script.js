var allentrycontent = "";
var entrycontent = document.getElementsByClassName("entry-content");
for (var i=0; i<entrycontent.length; i++) {
	allentrycontent += entrycontent[i].innerHTML;
}
var codeslist = "";

//var allcodes = allentrycontent.match(/(^|\s+)[A-Za-z0-9]{12}/g);
var allcodes = allentrycontent.match(/[A-Z0-9]{12}/g);

for (var j=0; j<allcodes.length; j++) {
	codeslist += '<li><a href="https://phobos.apple.com/WebObjects/MZFinance.woa/wa/freeProductCodeWizard?code=' + allcodes[j] + '" style="cursor:pointer">' + allcodes[j] + '</a></li>';
}

chrome.extension.sendRequest({message: codeslist}, function(response) {});

/* Created: 2010 May 24 */