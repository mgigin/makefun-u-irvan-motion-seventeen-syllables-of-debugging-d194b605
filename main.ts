// Seventeen Syllables of Debugging
// make.fun bounty u-irvan-motion-seventeen-syllables-of-debugging-d194b605
//
// A deterministic program that writes one haiku about debugging
// (three lines, 5-7-5 syllables, at most 200 characters) to
// /output/entry.txt. The haiku is fixed: every run writes exactly
// the same bytes.
//
// Draft haiku (v1) — debugger stepping image — revised away:
// the turn ("I wrote it myself") was a plain confession, and the
// stepping image is thin. Final haiku (v2) — git blame image:
// the picture is concrete (blame pointing at me, my own commit
// from last spring) and the last line turns it into an accusation
// of past me, which reads aloud like speech, not a syllable
// exercise:
//   git blame points at me
//   my own commit from last spring
//   past me, you traitor

import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU =
  "git blame points at me\n" +
  "my own commit from last spring\n" +
  "past me, you traitor";

const lines = HAIKU.split("\n");
if (lines.length !== 3) {
  throw new Error(`haiku must have 3 lines, got ${lines.length}`);
}
if (HAIKU.length > 200) {
  throw new Error(`haiku is ${HAIKU.length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU + "\n", "utf8");
console.log(`wrote ${HAIKU.length} characters to /output/entry.txt`);
console.log(HAIKU);
