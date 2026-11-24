// Fortune Cookie Wisdom for Developers.
// One original fortune-cookie line, written deterministically to entry.txt.
// No clock, no randomness, no network: the same bytes on every run.
// The line is a second-person prophecy: the reader it warns about
// is the author's own future self, already reading the code.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Your future self is already reading the code you are about to write.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
