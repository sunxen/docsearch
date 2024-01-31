[中文](./README_zh.md)

# Node.js Document Search

A chrome extension to add search box to Node.js documentation.

The Node.js documentation (https://nodejs.org/api/) does not have a search function, it is just a plain text page, unlike other documentation such as Vue.js (https://vuejs.org/), React (https://react.dev/) etc., which have integrated the Algolia search box, allowing you to quickly locate specific pages or methods based on keywords.

This plugin adds a search box to the Node.js documentation page, perfectly embedded in the page, as if it was originally there, providing instant search capabilities, aligning with the search experience of other documentation.

## Preview

![1.png](./screenshots/1.png)

![2.png](./screenshots/2.png)

## Installation

- install from [Chrome Web Store](https://chromewebstore.google.com/detail/aljljpbjhedenkebeampefpecogcgekb)
- or install unpacked extension: `docsearch/packages/chrome-extension`

## Usage

1. After installing the plugin, open the [Node.js documentation page](https://nodejs.org/api/), you will see a search button in the upper right corner of the page, click it or use the shortcut Ctrl+k (Cmd+k) to pop up the search box
2. Or click the plugin button, if the current tab is a document, it will pop up the search box, if not, it will open the document

## How it works

- `docsearch/crawler` is a nodejs script, it crawls the Node.js documentation website, and generates a json file which contains all the documentations.
- use `Fuse.js` to search the documentations in the json file.
- `docsearch/packages/docsearch-react` is a search box UI, fork from [docsearch](https://github.com/algolia/docsearch), and modified to support local search.
- `docsearch/packages/nodejs-docsearch` is a chrome extension, it injects the search box UI to the Node.js documentation website.

## License

[MIT](LICENSE)
