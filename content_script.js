if (document.getElementsByClassName("entry-content").length == 0) {
	codeslist = '<li id="placeholder">No promo codes found.</li>';
}
else {
	
	var allentrycontent = "";	

	var entrycontent = document.getElementsByClassName("entry-content");

	for (var i=0; i<entrycontent.length; i++) {
		allentrycontent += entrycontent[i].innerHTML;
	}
	var codeslist = "";

	//var allcodes = allentrycontent.match(/(^|\s+)[A-Za-z0-9]{12}/g);
	var allcodes = allentrycontent.match(/[A-Z0-9]{12}/g);

	if (allcodes != null) {		
		for (var j=0; j<allcodes.length; j++) {
			codeslist += '<li><a href="https://phobos.apple.com/WebObjects/MZFinance.woa/wa/freeProductCodeWizard?code=' + allcodes[j] + '" target="blank">' + allcodes[j] + '</a></li>';
		}
		codeslist += '<li id="note">Click any of these to directly redeem in iTunes.</li>';
	}
	else {
		codeslist = '<li id="placeholder">No promo codes found.</li>';
	}
}

chrome.extension.sendRequest({message: codeslist}, function(response) {});

/* Created: 2010 May 24 */