chrome.contextMenus.onClicked.addListener(function(info, tab) {
	chrome.tabs.create({
		url: "http://www.wolframalpha.com/input/?i=" + encodeURIComponent(info.selectionText)
	});
});

chrome.contextMenus.create({
	id: 'open',
	title: chrome.i18n.getMessage('openContextMenuTitle'),
	contexts: ['selection'],
});