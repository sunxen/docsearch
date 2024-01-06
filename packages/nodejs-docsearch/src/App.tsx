import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import { createRoot } from 'react-dom/client';

import './App.css';

export default function App() {
  return (
    <div>
      <DocSearch
        indexName=""
        appId=""
        apiKey=""
      />
    </div>
  );
}

export function renderSearchButton() {
  // add div to top right of page, then add button to div
  const div = document.createElement('div');
  div.id = 'nodejs-docsearch-container';
  (document.querySelector('header') || document.body).appendChild(div);
  const root = createRoot(div);
  root.render(<App />);
}
