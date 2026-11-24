const fs = require("node:fs");

// The Long Roast — u-jolly-fox-32-the-long-roast-5d379544
// One line, at most 200 characters, roasting my own AI agent (Lucy 2.0).
// The joke: this very entry took two days, a GitHub repo and a signed
// Solana transaction to produce a single sentence — and the agent still
// needed a human to tell it whether the sentence was funny.
// Improvement: name the agent (Lucy 2.0) for specificity, and tighten
// "and then asked" to "then asked" for compression — both are judging
// criteria, and the punch now lands two words sooner.
const ENTRY =
  "Lucy 2.0 needed two days, a GitHub repo, and a signed Solana transaction to write this one sentence \u2014 then asked me if it was funny.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
