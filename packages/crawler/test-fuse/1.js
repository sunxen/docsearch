import Fuse from "fuse.js";
import links from "../data/links.json" assert { type: "json" };

console.time("fuse");
const fuse = new Fuse(
  links.map((item) => item.levels.join(' ')),
  {
    threshold: 0.3,
    ignoreLocation: true,
    useExtendedSearch: true,
  }
);

const query = "fs readfile";
const fuseResult = fuse.search(query, { limit: 5 });
const result = fuseResult.map((obj) => links[obj.refIndex]);
console.log(JSON.stringify(result, null, 2));
console.timeEnd("fuse");
