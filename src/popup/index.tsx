import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

console.log('popup.js');

console.log('popup1.js');

const Page = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <div className="checkbox">
          <p className="label">label</p>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
