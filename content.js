function copyToClipboard(text) {
  const input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  const result = document.execCommand("copy");
  document.body.removeChild(input);
  document.removeEventListener("click", (e) => {
    getImageUrl(e);
  });
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

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message) {
  document.addEventListener("click", (e) => {
    getImageUrl(e);
  });
}
