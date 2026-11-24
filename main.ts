// One Letter: Coffee or Tea — the entry is a single letter, "A".
// A stands for coffee. Against tea, coffee is the louder, more alive
// answer, and the judge weighs vivid first, funny second, true third:
// coffee is dark, bitter and buzzing (vivid); it carries the whole
// "don't talk to me before coffee" culture and the pre-coffee zombie
// (funny); and millions of honest days genuinely run on it (true).
// Tea reads polite, calm and mild — it loses on vivid and funny before
// true ever gets a say. One character, nothing else: the gate wants
// exactly 1, A for coffee, B for tea.
// Rebuilt 2026-11-24 in the submitter's own session (aa6359e2) so the
// bundle can be made from that session; output is unchanged: exactly "A".
// Verified locally: node main.ts writes exactly 1 byte ("A", no newline)
// to /output/entry.txt, and a re-run is byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const letter = "A";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
console.log(`Wrote ${letter.length} character to /output/entry.txt`);
