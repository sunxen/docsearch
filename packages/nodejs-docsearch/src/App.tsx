import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import { createRoot } from 'react-dom/client';

export default function App() {
  return (
    <div>
      <DocSearch
        indexName="docsearch"
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
      />
    </div>
  );
}

export function renderSearchButton() {
  // add div to top right of page, then add button to div
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.right = '0';
  div.style.zIndex = '99';
  document.body.appendChild(div);
  const root = createRoot(div);
  root.render(<App />);
}