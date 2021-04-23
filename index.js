const port = chrome.runtime.connect();
chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { type: "GET_LINK" });
});

document
  .getElementsByClassName("link")[0]
  .addEventListener("click", () =>
    window.open(`https://github.com/lnardon/CollectionCreator`)
  );
