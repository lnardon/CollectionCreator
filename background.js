chrome.browserAction.onClicked.addListener(sendfunc);
function sendfunc(tab) {
  msg = { type: "execute" };
  chrome.tabs.sendMessage(tab.id, msg);
}
