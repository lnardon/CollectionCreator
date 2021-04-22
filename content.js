function copyToClipboard(text) {
  const input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  const result = document.execCommand("copy");
  document.body.removeChild(input);
  document.removeEventListener("click", listener);
}

function getImageUrl(element) {
  if (element.src) {
    text = element.src;
  } else {
    text = element.srcset;
  }
  console.log(element.target.srcset || element.target.src);
  copyToClipboard(element.target.srcset || element.target.src);
}

function listener(e) {
  getImageUrl(e);
}

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message) {
  document.addEventListener("click", listener);
}
