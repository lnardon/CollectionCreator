function gotMessage() {
  console.log("Got");
}

function copyToClipboard(text) {
  const input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  const result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
}

window.onload = () => {
  document.addEventListener("click", (e) => {
    copyToClipboard(e.target.src);
  });
};

chrome.runtime.onMessage.addListener(gotMessage);
