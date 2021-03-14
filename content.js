function copyToClipboard(text) {
  const input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  const result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
}

function getImageUrl(e) {
  const x = e.clientX;
  const y = e.clientY;
  let stack = [];
  let foundImage = false;
  let hoveredElement = document.elementFromPoint(x, y);

  stack.push(hoveredElement);
  while (!foundImage) {
    if (hoveredElement.tagName !== "IMG") {
      hoveredElement.style.pointerEvents = "none";
      stack.push(hoveredElement);
      hoveredElement = document.elementFromPoint(x, y);
    } else {
      copyToClipboard(hoveredElement.src);
      undoPointerEvents(stack);
      removeListener();
      foundImage = !foundImage;
      alert("Link copied to clipboard!");
    }
  }
}

function undoPointerEvents(elements) {
  elements.forEach((el) => {
    el.style.pointerEvents = "auto";
  });
}

function removeListener() {
  document.removeEventListener("click", getImageUrl);
}

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message) {
  console.log(message);
  switch (message.type) {
    case "GET_LINK":
      document.addEventListener("click", (e) => {
        getImageUrl(e);
      });
      break;
    // case "CLOSE_EXTENSION":
    //   alert("SKRT");
    //   break;
    default:
      break;
  }
}
