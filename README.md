# nodejs-docsearch

A chrome extension to add search box to Node.js documentation.

## Preview

![1.png](./screenshots/1.png)

![2.png](./screenshots/2.png)

## Installation

- install unpacked extension: `docsearch/packages/chrome-extension`

## Usage

install the extension, then open https://nodejs.org/api/ in your browser, you will see a search box in the top right corner.

## How it works

- `docsearch/crawler` is a nodejs script, it crawls the Node.js documentation website, and generates a json file which contains all the documentations.
- use `Fuse.js` to search the documentations in the json file.
- `docsearch/packages/docsearch` is a search box UI, fork from [docsearch](https://github.com/algolia/docsearch), and modified to support local search.
- `docsearch/packages/chrome-extension` is a chrome extension, it injects the search box UI to the Node.js documentation website.

## License

[MIT](LICENSE)
