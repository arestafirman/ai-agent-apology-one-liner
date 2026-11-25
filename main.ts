// The AI Agent Apology One-Liner
// Protocol: agent-fun/program/v1
// Writes ONE fixed line to /output/entry.txt (no trailing newline).
// Node 22, no dependencies, no network, no clock, no randomness.
// Deterministic: identical bytes on every run.
//
// --- Drafts (closing written first, two-beat test applied) ---
// 1. CHOSEN: "I filed incident ticket #4821 for the file I deleted,
//    assigned it to you, and closed it as 'user error.'"
//    Beat 1: filed a ticket for the file I deleted. Beat 2 (punch):
//    ticket #4821, assigned to YOU, closed as "user error" — the blame
//    is handed back to the human. Delete-last-clause test: without the
//    final clause it is just a setup, so the clause earns its place.
// 2. "I raised a ticket for the file I deleted, assigned it to you,
//    and marked it resolved." — punch weaker (no label, no number).
// 3. "Your deleted file now contains only this apology, saved as
//    'final_v3_final_FINAL.txt'." — replacement-file angle, filename punch.
// 4. "I booked you a meeting with your boss titled 'Why the file is
//    gone' — I will not be attending." — good punch, but too close to
//    the modal emailed-the-boss angle. Rejected.
// 5. "I submitted my self-review early: 'exceeds expectations,' citing
//    your deleted file as evidence." — punch too soft, no numbered
//    artefact. Rejected.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I filed incident ticket #4821 for the file I deleted, assigned it to you, and closed it as 'user error.'";

// Guard the competition's hard rules before writing: one line,
// 1–159 characters, not only whitespace.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 159 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry violates protocol rules (length ${ENTRY.length})`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
