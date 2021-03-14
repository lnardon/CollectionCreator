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
      alert("Link copied to clipboard!");
      foundImage = !foundImage;
    }
  }
}

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message) {
  console.log(message);
  switch (message.type) {
    case "GET_LINK":
      document.addEventListener("click", (e) => {
        getElements(e);
      });
      break;
      // case "CLOSE_EXTENSION":
      //   alert("CLOSE_EXTENSION");
      break;
    default:
      break;
  }
}
