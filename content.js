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

function getElements(e) {
  const x = e.clientX;
  const y = e.clientY;
  let stack = [];
  let foundImage = false;
  let hoveredElement = document.elementFromPoint(x, y);

  stack.push(hoveredElement);
  while (!foundImage) {
    if (hoveredElement.tagName !== "IMG") {
      hoveredElement.style.pointerEvents = "none";
      hoveredElement = document.elementFromPoint(x, y);
    } else {
      copyToClipboard(hoveredElement.src);
      foundImage = !foundImage;
    }
  }
}

window.onload = () => {
  document.addEventListener("click", (e) => {
    getElements(e);
  });
};

chrome.runtime.onMessage.addListener(gotMessage);
