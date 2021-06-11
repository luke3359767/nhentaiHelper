chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sixDigitNumber_normal",
    title: "Going to nhentai with this number",
    contexts: ["selection"],
  });
  chrome.contextMenus.create({
    id: "sixDigitNumber_private",
    title: "Going to nhentai with this number (Private Browsing)",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function getword(info, tab) {
  if (info.menuItemId !== "sixDigitNumber_normal") {
    return;
  }
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({
    url: "https://nhentai.net/g/" + info.selectionText,
  });
});

chrome.contextMenus.onClicked.addListener(function getword(info, tab) {
  if (info.menuItemId !== "sixDigitNumber_private") {
    return;
  }
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.windows.create({
    url: "https://nhentai.net/g/" + info.selectionText,
    incognito: true,
  });
});
