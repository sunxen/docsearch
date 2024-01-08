import axios from 'axios';
import { load } from 'cheerio';
import pages from './data/pages.js';
import fs from 'fs';

async function analyzePages() {
  let id = 0;
  const links = [];
  for (const page of pages) {
    const { data } = await axios.get(page.url);
    const $ = load(data);
    // console.log($("title").text());
    const levels = [];
    function recursive(element) {
      if (element.prop("tagName") === "A") {
        levels.push(element.text());
        console.log(levels.join(" > "));
        console.log(element.attr("href"));
        links.push({
          id: id++,
          levels: levels.length === 1 ? [levels[0], levels[0]] : [...levels],
          url: page.url + element.attr("href"),
        });
      }
      element.children().each((i, item) => {
        recursive($(item));
      });
      if (element.prop("tagName") === "LI") {
        levels.pop();
      }
    }
    recursive($('#toc'));
  }
  fs.writeFileSync('./crawler/data/links.json', JSON.stringify(links, null, 2));
}

analyzePages();

