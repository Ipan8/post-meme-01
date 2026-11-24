import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

// Entry: the live X post URL for the "Post the Meme, Win the Feed" bounty.
// The meme itself (robot agent grinding at 3 AM while the human sleeps) was
// posted by @ivannaa808; this entry only carries the post URL.
const post = JSON.parse(readFileSync(new URL("./POST.json", import.meta.url), "utf-8"));
const url: string = post.url;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", url + "\n");
console.log(url);
