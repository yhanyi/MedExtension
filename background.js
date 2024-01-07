chrome.runtime.onInstalled.addListener(function () {
  console.log("Med-Ext Installed");
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "_execute_action") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "highlightShortcut" });
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (
    request.action === "highlight" ||
    request.action === "highlightShortcut"
  ) {
    const highlightedText = request.text;
  }
});
