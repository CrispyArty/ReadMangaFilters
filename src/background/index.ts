chrome.runtime.onInstalled.addListener(() => {
  setTimeout(() => {
    console.log('runtime.onInstalled');
  }, 10000);

  chrome.storage.local.set({ hide_on_load: true });

  // chrome.storage.local.get(["key"]).then((result) => {
  //   console.log("Value is " + result.key);
  // });

  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     console.log('onBeforeRequest', details.url);

//     // You can also cancel the request
//     // return {cancel: true};
//   },
//   { urls: ['https://api.rmr.rocks/api/bookmark/getAllList'] }, // Intercept all URLs
//   // ["blocking"] // Use "blocking" for synchronous modification (deprecated in MV3, use declarativeNetRequest instead for blocking)
// );

chrome.webRequest.onCompleted.addListener(
  (response) => {
    if (response.method === 'POST') {
      // details.tabId
      console.log('onCompleted-response', response);

      if (response.statusCode === 200) {
        chrome.tabs.sendMessage(response.tabId, { action: 'bookmark-fetch-complete' });
      }
      //  await chrome.scripting.insertCSS({
      //   files: ["focus-mode.css"],
      //   target: { tabId: tab.id },
      // });
    }
  },
  { urls: ['https://api.rmr.rocks/api/bookmark/getAllList'] }, // Intercept all URLs
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
