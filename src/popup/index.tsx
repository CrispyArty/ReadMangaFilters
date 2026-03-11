import { createRoot } from 'react-dom/client';
import React, { FC, useState } from 'react';
import { Settings } from '@/settings';

import './global.css';
import * as s from './styles.module.css';

const Page: FC<{ settings: Settings }> = ({ settings }) => {
  const [isHideOnLoad, setIsHideOnLoad] = useState<boolean>(settings.hide_on_load);

  const handleChange = (event) => {
    setIsHideOnLoad(event.target.checked);

    if (chrome.storage) {
      chrome.storage.local.set({ hide_on_load: event.target.checked });
    }
  };

  return (
    <div>
      <h1>Options</h1>
      <div>
        <div className={s.option}>
          <label htmlFor="hide-on-load">Hide bookmarked on page load</label>
          <input
            id="hide-on-load"
            type="checkbox"
            className={s.swipeCheckbox}
            checked={isHideOnLoad}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);

if (chrome.storage) {
  chrome.storage.local.get().then((settings: Settings) => {
    root.render(
      <React.StrictMode>
        <Page settings={settings} />
      </React.StrictMode>,
    );
  });
} else {
  root.render(
    <React.StrictMode>
      <Page settings={{ hide_on_load: true }} />
    </React.StrictMode>,
  );
}
