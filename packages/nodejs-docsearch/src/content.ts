import { renderSearchButton } from "./App";

renderSearchButton();

// document.addEventListener('toggleSearchDialog', showSearchDialog)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleSearchDialog') {
    window.dispatchEvent(new Event('toggleSearchModal'));
  }
});

