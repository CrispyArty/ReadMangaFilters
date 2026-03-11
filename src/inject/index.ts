import { checkbox } from './styles.module.css';

function hideMarked() {
  const items = document.querySelectorAll('.tiles.row .tile .bookmark-heart:not(.fa-heart)');
  const tiles = [...items].map((el) => el.closest('.tile'));

  tiles.forEach((tile: HTMLElement) => (tile.style.display = 'none'));
}

function showMarked() {
  const tiles = document.querySelectorAll('.tiles.row .tile');

  tiles.forEach((tile: HTMLElement) => (tile.style.display = ''));
}

// function showBallonHint(newMangasNum) {}

function changeEvent(event) {
  event.target.checked ? hideMarked() : showMarked();
}

function addToggleButton() {
  console.log('showBallonHint', chrome.webRequest);
  chrome.storage.local.get(['hide_on_load']).then((settings) => {
    const div = document.createElement('div');
    div.classList.add(checkbox);

    // div.style.cssText = 'width:100%; display:flex; align-items:center; justify-content:right;';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = settings.hide_on_load;
    input.addEventListener('change', changeEvent);
    div.appendChild(input);

    document.querySelector('.pagination').appendChild(div);
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('message, sender, sendResponse', message, sender, sendResponse);
  addToggleButton();
  hideMarked();
});
// chrome.webRequest.onCompleted.addListener(
//   (details) => {
//     if (details.method === 'POST') {
//       // details.tabId
//       console.log('onCompleted-details', details);

//       //  await chrome.scripting.insertCSS({
//       //   files: ["focus-mode.css"],
//       //   target: { tabId: tab.id },
//       // });
//     }
//   },
//   { urls: ['https://api.rmr.rocks/api/bookmark/getAllList'] }, // Intercept all URLs
// );
