/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
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
chrome.webRequest.onCompleted.addListener((response) => {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sT0FBTyx5REFBeUQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsbUNBQW1DO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDLFlBQVk7QUFDWjtBQUNBLENBQUMsSUFBSSx5REFBeUQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi1yZWFkLW1hbmdhLWZpbHRlcnMvLi9zcmMvYmFja2dyb3VuZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lLm9uSW5zdGFsbGVkJyk7XG4gICAgfSwgMTAwMDApO1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGhpZGVfb25fbG9hZDogdHJ1ZSB9KTtcbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wia2V5XCJdKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiVmFsdWUgaXMgXCIgKyByZXN1bHQua2V5KTtcbiAgICAvLyB9KTtcbiAgICBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7XG4gICAgICAgIHRleHQ6ICdPRkYnLFxuICAgIH0pO1xufSk7XG4vLyBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4vLyAgIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ29uQmVmb3JlUmVxdWVzdCcsIGRldGFpbHMudXJsKTtcbi8vICAgICAvLyBZb3UgY2FuIGFsc28gY2FuY2VsIHRoZSByZXF1ZXN0XG4vLyAgICAgLy8gcmV0dXJuIHtjYW5jZWw6IHRydWV9O1xuLy8gICB9LFxuLy8gICB7IHVybHM6IFsnaHR0cHM6Ly9hcGkucm1yLnJvY2tzL2FwaS9ib29rbWFyay9nZXRBbGxMaXN0J10gfSwgLy8gSW50ZXJjZXB0IGFsbCBVUkxzXG4vLyAgIC8vIFtcImJsb2NraW5nXCJdIC8vIFVzZSBcImJsb2NraW5nXCIgZm9yIHN5bmNocm9ub3VzIG1vZGlmaWNhdGlvbiAoZGVwcmVjYXRlZCBpbiBNVjMsIHVzZSBkZWNsYXJhdGl2ZU5ldFJlcXVlc3QgaW5zdGVhZCBmb3IgYmxvY2tpbmcpXG4vLyApO1xuY2hyb21lLndlYlJlcXVlc3Qub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoKHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIC8vIGRldGFpbHMudGFiSWRcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ29tcGxldGVkLXJlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShyZXNwb25zZS50YWJJZCwgeyBhY3Rpb246ICdib29rbWFyay1mZXRjaC1jb21wbGV0ZScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuaW5zZXJ0Q1NTKHtcbiAgICAgICAgLy8gICBmaWxlczogW1wiZm9jdXMtbW9kZS5jc3NcIl0sXG4gICAgICAgIC8vICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufSwgeyB1cmxzOiBbJ2h0dHBzOi8vYXBpLnJtci5yb2Nrcy9hcGkvYm9va21hcmsvZ2V0QWxsTGlzdCddIH0pO1xuLy8gZnVuY3Rpb24gcmVkZGVuUGFnZSgpIHtcbi8vICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbi8vIH1cbi8vIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbi8vICAgaWYgKCF0YWIudXJsLmluY2x1ZGVzKCdjaHJvbWU6Ly8nKSkge1xuLy8gICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4vLyAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYi5pZCB9LFxuLy8gICAgICAgZnVuYzogcmVkZGVuUGFnZVxuLy8gICAgIH0pO1xuLy8gICB9XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==