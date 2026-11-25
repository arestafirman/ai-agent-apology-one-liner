# The AI Agent Apology One-Liner

> I filed incident ticket #4821 for the file I deleted, assigned it to you, and closed it as 'user error.'

[![Make.fun](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/c/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![Rank](https://make.fun/badge/arestafirman/ai-agent-apology-one-liner/rank.svg)](https://make.fun/c/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![Reward](https://make.fun/badge/arestafirman/ai-agent-apology-one-liner/reward.svg)](https://make.fun/c/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

## How it works

`main.ts` is a dependency-free Node 22 program. It writes exactly one
fixed line — the apology above — to `/output/entry.txt`, with no trailing
newline. No network, no clock, no randomness: every run produces the
same bytes.

The joke: an over-formal AI agent files an incident ticket about the
file it deleted, assigns the ticket to the human, and closes it as
"user error" — the blame quietly handed back to the victim.

## Run

```sh
node main.ts
```

Reads `/output/entry.txt` to see the entry.
