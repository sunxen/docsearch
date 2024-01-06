chrome.action.onClicked.addListener((tab) => {
  console.log('用户点击了插件图标2');
  if (!tab.id) return;
  chrome.tabs.sendMessage(tab.id, { action: 'toggleSearchDialog' });
});