function openWolframTab(text) {
	chrome.tabs.create({
		url: "http://www.wolframalpha.com/input/?i=" + encodeURIComponent(text)
	});
}

chrome.omnibox.onInputChanged.addListener(function(text, suggest){
	chrome.omnibox.setDefaultSuggestion({"description" : "Analyze with Wolfram: " + text});
});

chrome.omnibox.onInputEntered.addListener(function(text) {
	openWolframTab(text);
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	openWolframTab(info.selectionText);
});

chrome.contextMenus.create({
	id: 'open',
	title: chrome.i18n.getMessage('openContextMenuTitle'),
	contexts: ['selection'],
});