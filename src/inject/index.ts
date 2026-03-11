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

function addToggleButton(checked) {
  const div = document.createElement('div');
  div.classList.add(checkbox);

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = checked;
  input.addEventListener('change', changeEvent);
  div.appendChild(input);

  document.querySelector('.pagination').appendChild(div);
}

chrome.runtime.onMessage.addListener(() => {
  chrome.storage.local.get(['hide_on_load']).then((settings) => {
    addToggleButton(settings.hide_on_load);
    settings.hide_on_load && hideMarked();
  });
});
