// function handleClick() {
//   const theme = {
//     setPageBGColor: getInputValue("setPageBGColor"),
//     setAllFontsColors: getInputValue("setAllFontsColors"),
//     setIconsColor: getInputValue("setIconsColor"),
//   };

//   localStorage.setItem("notionTheme", JSON.stringify(theme));
//   chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, theme);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("addBtn").addEventListener("click", handleClick);
// });
