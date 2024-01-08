import Fuse from 'fuse.js';

import links from './data/links.json';

const fuse = new Fuse(
  links.map((item) => item.levels.join(' ')),
  {
    threshold: 0.3,
    ignoreLocation: true,
    useExtendedSearch: true,
  }
);

export function localSearch(query: string) {
  const hits: any[] = [];
  const fuseResult = fuse.search(query, { limit: 5 });
  const result = fuseResult.map((obj) => links[obj.refIndex]);

  for (const link of result) {
    const len = link.levels.length;
    let title = link.levels[len - 1];
    let subTitle = '';
    if (len > 1) {
      subTitle = link.levels.slice(1, len - 1).join(' / ');
    }
    title = highlight(title, query);
    subTitle = highlight(subTitle, query);

    let typeNumber = len - 1;
    if (typeNumber > 2) {
      typeNumber = 2;
    }

    hits.push({
      url: link.url,
      content: null,
      type: 'lvl' + typeNumber,
      hierarchy: {
        lvl0: link.levels[0],
        lvl1: subTitle ? subTitle : title,
        lvl2: title,
      },
      objectID: String(link.id),
      _highlightResult: {
        hierarchy: {
          lvl0: {
            value: link.levels[0],
            matchLevel: 'none',
            matchedWords: [],
          },
          lvl1: {
            value: subTitle ? subTitle : title,
            matchLevel: 'none',
            matchedWords: [],
          },
          lvl2: {
            value: title,
            matchLevel: 'none',
            matchedWords: [],
          },
        },
      },
    });
  }
  return Promise.resolve({
    results: [
      {
        hits,
        nbHits: hits.length,
      },
    ],
  });
}

function highlight(text: string, query: string) {
  const tokens = query.split(/\s+/).filter((token) => token.length > 0);
  const regex = new RegExp(tokens.join('|'), 'gi');
  return text.replace(regex, (match) => `<mark>${match}</mark>`);
}
