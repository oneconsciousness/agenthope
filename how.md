---
layout: doc
title: "How it works"
permalink: /how/
description: "How JobHunt with Hope works: set up once, show your work, then run the hunt a little every day. Find jobs, apply (you press send), write, prep, keep score."
---

# How it works

**You talk. Your AI does the work. You press send.** No coding. No GitHub knowledge needed. If you can chat with an AI, you can do this. Hope is ten skills in three acts, built from a real four-month job hunt that ran with Claude as the partner.

{% include ig-journey.html %}

## Act 1: Set up

**Start · know where you are.** Say *“start my job hunt with Hope.”* Hope looks at your hunt folder, tells you where things stand, and points you to the next step. Come back to it any day you lose the thread. It also teaches you the short daily rhythm in Act 3.

**Onboarding · tell your story once.** Bring a résumé, a LinkedIn export, a headshot, a few notes: whatever you have. Hope asks for the minimum and fills the gaps by talking with you. Nothing is assumed. Nothing is scraped. Your roles, wins, skills and projects go into one tidy career file on your own computer.

**Then, the questions every form asks.** Hope builds your application profile: your work authorization in your own words, your pay rules, where you will work, the roles you want and the ones you don't, and your standard answers. It asks each question once, so you never retype them. It also sets up your hunt folder: your tracker, a folder for each role, and a short rulebook where your facts, your rules and your corrections live.

## Act 2: Show your work

**Portfolio & résumé · a page that looks like you tried.** Your story becomes a designed portfolio with a playable career timeline, plus one résumé that screening software reads cleanly and a person actually wants to read.

**Publish · one link you own.** Published free to a page in your name. Drop it on LinkedIn and it unfurls with your own preview card. Only you can change it.

<figure class="figure figure--plain">
  <img src="{{ '/assets/img/how-hope-works.webp' | relative_url }}" alt="Setting up and showing your work in pictures: what you have, Hope reads it, your portfolio is built, and you get your link" width="1200" height="675" loading="lazy" />
  <figcaption class="muted">Acts 1 and 2, in pictures: from what you have to your link.</figcaption>
</figure>

## Act 3: Run the hunt, every day

This is the part Hope 2.0 rebuilt. It is the rhythm that worked in a real hunt: a few minutes each morning, and nothing slips.

**Sync · start the day knowing what changed.** Hope reads your email and LinkedIn. It only reads. Confirmations, rejections, recruiter messages and interview invites go into your tracker. Then it tells you, in a few short lines, what changed and what needs you.

**Find jobs · a shortlist worth your time.** Hope sweeps job boards through their own data feeds and matches on the job description, not just the title. It screens against your rules: your pay floor, the titles you don't want, two live applications per company. It skips anything already in your tracker. You get a shortlist file with an honest fit line for each role, and it tells you what the sweep could not see. You pick.

**Apply · the form filled, you press send.** Give Hope a job link. It saves the posting, makes a folder for the role, and fills the form in your browser with real keystrokes. It writes down every answer it entered and every one it left for you: the legal boxes, salary if you prefer, relocation. It adds the row to your tracker and stops at submit. You read it over and press send.

**Write · every message in your voice.** Emails, LinkedIn messages, cover letters, form answers, follow-ups, replies to recruiters. Hope drafts each one the way you write and saves it to a file. When you edit a draft, it learns what you changed, so the next one needs fewer edits. You send.

**Interview · ready for every call.** The moment a call is on your calendar, Hope says: record this one. It sets a reminder for 10 minutes before the call, with your prep inside it. It writes a prep file: three things to land, where you overlap with the role, your honest gaps, and two questions to ask. After the call, it transcribes your recording on your machine, writes a debrief question by question, and drafts your follow-up.

**Tracker · one spreadsheet keeps score.** Every role, its status, the next action and dated notes live in `job-tracker.xlsx`, in your folder. Ask *“where do I stand?”* or *“what needs me?”* any time. Once a week, Hope walks you through it.

So when the role you want says “come in” — **you walk in ready.**

## What Hope will never do

- **Send anything in your name.** It fills forms and drafts messages. You press send, every time.
- **Act on your LinkedIn or email.** It reads. It never messages, likes, connects, replies or forwards.
- **Invent a fact about you.** If it isn't on file, Hope asks.
- **Type a password or a document number.** Those steps are yours.
- **Tick a legal checkbox for you.** Consent boxes and attestations stay yours.
- **Move your data.** Everything stays on your machine, except the page you choose to publish.

Hope also works with a smaller model. It was written so Claude Sonnet can run every step: short steps, exact file names, and a check after each one.

## Already use <span class="ai">{% include ai-claude.svg %}Claude Code</span>?

Skip the chat setup — install Hope in one command from the plugin marketplace:

```
/plugin marketplace add oneconsciousness/job-hunt-with-hope
/plugin install hope@hope
```

Then, in a fresh chat in an empty folder, say **start my job hunt with Hope**.

## Ready?

[Copy your instructions and start →](/#start) · [Read all ten skills →]({{ '/skills/' | relative_url }}) · [See a live portfolio first →]({{ '/demo/' | relative_url }})

Setting up for the first time? [Connect Claude to your tools once →]({{ '/setup/' | relative_url }})

New to GitHub or publishing a page? [Here's the plain-English walkthrough →]({{ '/publishing/' | relative_url }})
