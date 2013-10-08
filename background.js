var onClicked = function() {
	chrome.tabs.getSelected(null, selectedTab);
};

var selectedTab = function(tab) {
    chrome.tabs.remove(tab.id);
};

chrome.browserAction.onClicked.addListener(onClicked);

