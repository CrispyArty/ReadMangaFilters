chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ hide_on_load: true });

  // chrome.action.setBadgeText({
  //   text: 'OFF',
  // });
});

chrome.webRequest.onCompleted.addListener(
  (response) => {
    if (response.method === 'POST' && response.statusCode === 200) {
      chrome.tabs.sendMessage(response.tabId, { action: 'bookmark-fetch-complete' });
    }
  },
  { urls: ['https://api.rmr.rocks/api/bookmark/getAllList'] },
);

// function reddenPage() {
//   document.body.style.backgroundColor = 'red';
// }

// chrome.action.onClicked.addListener((tab) => {
//   if (!tab.url.includes('chrome://')) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: reddenPage
//     });
//   }
// });

//  await chrome.scripting.insertCSS({
//   files: ["focus-mode.css"],
//   target: { tabId: tab.id },
// });
