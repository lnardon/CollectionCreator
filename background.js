chrome.runtime.onConnect.addListener((externalPort) => {
  externalPort.onDisconnect.addListener(() => {
    console.log("Closed");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: "CLOSE_EXTENSION" });
    });
  });
});
