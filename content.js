function gotMessage() {
  console.log("Got");
}

chrome.runtime.onMessage.addListener(gotMessage);
