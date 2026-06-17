---
layout: doc
title: "GitHub, explained"
permalink: /publishing/
seo_title: "What is GitHub? Publish Your Portfolio Free (No Code)"
description: "What GitHub is, in plain English — and exactly how to publish your portfolio to a free link with whatever AI you use. No coding, nothing to worry about."
---
<div class="skill-body" markdown="1">

# GitHub, explained

To get your **one free link**, your portfolio gets published to **GitHub Pages** — free website hosting. If you've never heard of GitHub, this page is for you. It takes about five minutes and there's **nothing to worry about**.

## What is GitHub? (in plain English)

GitHub is a free website where people keep files in the cloud — think **Google Drive or Dropbox**, with one magic extra: it can turn a folder of files into a **real, live web page** anyone can visit. It's owned by Microsoft, used by millions of people every day, and the part you need is **completely free**.

Your AI built your portfolio as a folder on your computer. GitHub is simply where that folder goes so it gets a **public link** you can paste into applications, LinkedIn, or an email to a recruiter.

> **Wait — is this for programmers? Do I have to code?**
> **No.** You are *not* coding, and you don't need to understand a single file. You're uploading a folder and flipping one switch to make it public — the same as sharing a photo album. It's **$0** (no card, no trial), it's **safe** (only the one page you publish is public — nothing else on your computer is touched), and it's **reversible** (delete it anytime and the link disappears).

## Step 1 — Create your free account (once)

1. Go to **[github.com](https://github.com)** and click **Sign up**.
2. Enter your **email**, a **password**, and a **username** — your username becomes part of your link, so keep it clean and professional (e.g. `jane-smith`).
3. Verify with the code GitHub emails you.
4. When asked, choose the **Free** plan. That's all you'll ever need here.

## Step 2 — Which AI are you using?

How you publish depends on whether your AI has a built-in **terminal** (a place it can run commands). Two paths:

| If you use… | Can it publish for you? | Your path |
|---|---|---|
| **Claude Code**, **Cursor**, **VS Code + Copilot**, **Windsurf** | ✅ Yes, end-to-end | **The easy way** below — your AI does it; you click "Authorize" once. |
| **ChatGPT**, **Gemini**, **Perplexity** (web chatbots) | ❌ Not directly | **The no-code way** below — you drag-and-drop. It can guide you, but it can't upload for you (that's just how web chatbots work). |

Both paths end with the same thing: your free `https://yourname.github.io/portfolio/` link.

## The easy way — let your AI publish it

If your AI has a terminal (Claude Code, Cursor, VS Code, Windsurf), just say:

> **"Publish my portfolio to GitHub Pages and give me the link."**

The only thing **you** do is approve it once: your AI runs `gh auth login`, a browser opens, you click the green **Authorize** button — done. Your AI creates the repository, uploads the files, switches on GitHub Pages, and hands you the live link. With Claude Code this is the smoothest, since Hope is built for it.

## The no-code way — drag-and-drop (works for everyone)

No terminal, no commands — just clicking and dragging in your browser.

**A · Make a home for your files**
1. Signed in at [github.com](https://github.com), click the **+** (top-right) → **New repository**.
2. Name it something simple like `portfolio`. Set it to **Public**. *(Required for free hosting — only this portfolio is public, nothing else.)* Click **Create repository**.

**B · Upload your portfolio**
3. Click **Add file → Upload files**.
4. Open your portfolio folder, select **everything inside it** (including the file named `index.html`), and **drag it all into the browser**.
5. Scroll down and click the green **Commit changes**.

**C · Turn it into a live website**
6. Click **Settings** → **Pages** (left sidebar).
7. Under **Source**, choose **Deploy from a branch**; set branch to **main** and folder to **/ (root)**; click **Save**.
8. Wait **1–2 minutes**, refresh, and your **live link** appears at the top (`https://yourname.github.io/portfolio/`). That's your shareable portfolio — paste it anywhere.

<p class="muted"><em>Step-by-step screenshots for each AI tool are on the way. Until then, the steps above are everything you need.</em></p>

## Questions people ask

> **"Public" sounds scary — is my whole computer exposed?**
> No. *Public* only means the files in that one project folder — your portfolio, which you *want* people to see — are viewable. Nothing else on your computer, and no other project, is affected. Free hosting just requires that one folder to be public.

> **Is my personal data published?**
> Only the portfolio page you upload. Your email, password, and anything you didn't upload stay private. If your portfolio shows a phone number or address you'd rather keep off the web, remove it before publishing.

> **It says 404 / page not found.**
> Two usual reasons: it's still building (wait a couple minutes), or there's no `index.html` at the top level — make sure you uploaded the *contents* of the folder, not the folder zipped up.

> **Can I undo it?**
> Anytime. Repo **Settings → Delete this repository** and the link stops working instantly. You're never locked in.

> **Is it really free?**
> Yes — no credit card, no trial that expires. The free plan covers all of this, forever.

</div>
