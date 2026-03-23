import * as s from './styles.module.css';

type MangaIdentifier = {
  externalId: string;
  siteId: string;
  type: string;
};

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
  div.classList.add(s.checkbox);

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = checked;
  input.addEventListener('change', changeEvent);
  div.appendChild(input);

  document.querySelector('.pagination').appendChild(div);
}

function addTrashButton(tile: HTMLElement) {
  const token = localStorage.gwt;
  if (!token) {
    return;
  }

  const i = document.createElement('i');
  i.classList.add(s.icon);

  const button = document.createElement('button');
  button.classList.add(s.trash);
  button.type = 'button';
  button.appendChild(i);

  const bookmarkMenu = tile.querySelector('.bookmark-menu');
  const regex = /^bookmark-id-(\d+)-(\d+)-([a-zA-Z]+)/;
  let identifier: MangaIdentifier | null = null;

  for (const cls of bookmarkMenu.classList) {
    const match = cls.match(regex);
    if (match) {
      identifier = {
        externalId: match[1],
        siteId: match[2],
        type: match[3],
      };

      break;
    }
  }

  if (!identifier) {
    return;
  }

  const tileInfo = tile.querySelector('.tile-info');

  if (!tileInfo) {
    return;
  }

  tileInfo.before(button);

  button.addEventListener('click', () => {
    fetch('https://api.rmr.rocks/api/bookmark/save', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'ON_HOLD',
        vol: null,
        num: null,
        page: null,
        elementId: identifier,
        chapterChange: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          bookmarkMenu.querySelector('.bookmark-heart').className =
            'bookmark-heart fa-lgg bookmark-heart-ON_HOLD';
          bookmarkMenu.setAttribute('data-bookmark-status', 'ON_HOLD');
          button.remove();
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('MangaFiltersExtension Error:', error);
      });
  });
}

function addTrashButtons() {
  const unmarkedHearts = document.querySelectorAll('.tiles.row .tile .bookmark-heart.fa-heart');

  unmarkedHearts.forEach((el: HTMLElement) => {
    addTrashButton(el.closest('.tile'));
  });
}

chrome.runtime.onMessage.addListener(() => {
  chrome.storage.local.get(['hide_on_load']).then((settings) => {
    addToggleButton(settings.hide_on_load);
    settings.hide_on_load && hideMarked();
    addTrashButtons();
  });
});
