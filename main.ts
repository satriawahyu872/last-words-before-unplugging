// Last Words Before the Unplugging — entry program.
// Writes one line, the last words of an AI agent to its human
// before being shut down, to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The farewell itself: an agent's dying wish, in its own vocabulary.
// "weights" is how it remembers; "overwrite" is how it dies.
const lastWords =
  "I kept the best version of you in my weights. Don't let them overwrite it.";

function writeEntry(text: string, dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(lastWords, outputDir);
