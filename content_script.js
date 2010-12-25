//var entrycontent = document.getElementsByClassName("stream-items")[0].getElementsByClassName("tweet-text");

if (window.location.host != "twitter.com") {
	codeslist = '<li id="placeholder">This is not Twitter.</li>';
}
// else if (entrycontent.length == 0) {
else if (document.getElementsByClassName("stream-items")[0].getElementsByClassName("tweet-text").length == 0) {
	codeslist = '<li id="placeholder">No promo codes found.</li>';
}
else {
	var entrycontent = document.getElementsByClassName("stream-items")[0].getElementsByClassName("tweet-text");

	var allentrycontent = "";
	var codeslist = "";
	
	for (var i=0; i<entrycontent.length; i++) {
		allentrycontent += entrycontent[i].innerHTML;
	}

	var allcodes = allentrycontent.match(/(^|\s+)[A-Z0-9]{12}/g);

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
/* Revised: 2010 May 28 */
/* Revised: 2010 Dec 24 for new Twitter site. this is still a very fragile technique. look into accessing tweets in JSON format */