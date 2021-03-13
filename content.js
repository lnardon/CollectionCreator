function gotMessage() {
  console.log("Got");
}
window.onload = () => {
  document.addEventListener("click", (e) => {
    console.log(e.target.src);
  });
  let auxDiv = document.createElement("div");
  auxDiv.style.position = "absolute";
  auxDiv.style.width = "1000px";
  auxDiv.style.height = "1000px";
  auxDiv.style.backgroundColor = "#313131";
  auxDiv.style.zIndex = "1000000";
  auxDiv.style.top = "0px";
  document.body.prepend(auxDiv);
};

chrome.runtime.onMessage.addListener(gotMessage);
