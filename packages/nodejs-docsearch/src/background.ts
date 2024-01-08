chrome.action.onClicked.addListener((tab) => {
  if (!tab.id || tab.url?.startsWith('chrome://')) {
    openDoc();
    return;
  };

  // check page content has "div.id = 'nodejs-docsearch-container';"
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      return document.getElementById('nodejs-docsearch-container');
    }
  }).then((result) => {
    if (result[0].result) {
      toggleSearchModal(tab.id!);
    } else {
      openDoc();
    }
  });
});


function toggleSearchModal(tabId: number) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: () => {
      // packages/docsearch-react/src/useDocSearchKeyboardEvents.ts
      window.dispatchEvent(new Event('toggleSearchModal'));
    }
  });
}

function openDoc() {
  chrome.tabs.create({ url: 'https://nodejs.org/api/' })
}
