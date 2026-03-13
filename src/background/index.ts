chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ hide_on_load: true });
});

chrome.webRequest.onCompleted.addListener(
  (response) => {
    if (response.method === 'POST' && response.statusCode === 200) {
      chrome.tabs
        .sendMessage(response.tabId, { action: 'bookmark-fetch-complete' })
        .catch(() => {});
    }
  },
  { urls: ['https://api.rmr.rocks/api/bookmark/getAllList'] },
);
