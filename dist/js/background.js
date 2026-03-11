/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ hide_on_load: true });
    // chrome.action.setBadgeText({
    //   text: 'OFF',
    // });
});
chrome.webRequest.onCompleted.addListener((response) => {
    if (response.method === 'POST' && response.statusCode === 200) {
        chrome.tabs.sendMessage(response.tabId, { action: 'bookmark-fetch-complete' });
    }
}, { urls: ['https://api.rmr.rocks/api/bookmark/getAllList'] });
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrREFBa0QsbUNBQW1DO0FBQ3JGO0FBQ0EsQ0FBQyxJQUFJLHlEQUF5RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBLFFBQVE7QUFDUjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXJlYWQtbWFuZ2EtZmlsdGVycy8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBoaWRlX29uX2xvYWQ6IHRydWUgfSk7XG4gICAgLy8gY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoe1xuICAgIC8vICAgdGV4dDogJ09GRicsXG4gICAgLy8gfSk7XG59KTtcbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQ29tcGxldGVkLmFkZExpc3RlbmVyKChyZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5tZXRob2QgPT09ICdQT1NUJyAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UocmVzcG9uc2UudGFiSWQsIHsgYWN0aW9uOiAnYm9va21hcmstZmV0Y2gtY29tcGxldGUnIH0pO1xuICAgIH1cbn0sIHsgdXJsczogWydodHRwczovL2FwaS5ybXIucm9ja3MvYXBpL2Jvb2ttYXJrL2dldEFsbExpc3QnXSB9KTtcbi8vIGZ1bmN0aW9uIHJlZGRlblBhZ2UoKSB7XG4vLyAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4vLyB9XG4vLyBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4vLyAgIGlmICghdGFiLnVybC5pbmNsdWRlcygnY2hyb21lOi8vJykpIHtcbi8vICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuLy8gICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbi8vICAgICAgIGZ1bmM6IHJlZGRlblBhZ2Vcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gfSk7XG4vLyAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5pbnNlcnRDU1Moe1xuLy8gICBmaWxlczogW1wiZm9jdXMtbW9kZS5jc3NcIl0sXG4vLyAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkIH0sXG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==