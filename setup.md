---
layout: doc
title: "Set up Claude for Hope"
permalink: /setup/
seo_title: "Set Up Claude Code for Hope: Connect Your Tools · JobHunt with Hope"
description: "The one-time setup for Hope: Claude Code, the plugin, GitHub, Claude in Chrome, Gmail and Calendar. What each connection unlocks, and what still works without it."
---
<div class="skill-body" markdown="1">

# Set up Claude for Hope

Hope does the work through the tools Claude is connected to. Connect these once, about 20 minutes, and every skill has what it needs. Each one says what it unlocks and what still works without it.

## 1. Claude Code (the Code tab in the Claude desktop app)

Install the Claude desktop app from [claude.ai/download](https://claude.ai/download), sign in, and open the **Code** tab. Hope runs here, not in the normal chat, because this is where Claude has a terminal and can read and write files on your computer.

Make an empty folder for your hunt (for example `Documents/job-hunt`) and open it in the Code tab. Everything Hope makes stays in that folder.

## 2. The Hope plugin

In the Code tab, paste these two lines, one at a time:

```
/plugin marketplace add oneconsciousness/job-hunt-with-hope
/plugin install hope@hope
```

Then start a fresh chat and say **run my job hunt with Hope**.

**Unlocks:** all ten skills.

## 3. GitHub, for your one link

Hope puts your portfolio online as a free page in your own GitHub account. Create a free account at [github.com](https://github.com) if you do not have one, then in the Code tab ask Claude to run `gh auth login` and follow the prompts (you click Authorize in the browser once). [GitHub, explained in plain English →]({{ '/publishing/' | relative_url }})

**Unlocks:** Publish. **Without it:** the portfolio still builds on your computer; you just cannot share a link yet.

## 4. Claude in Chrome, for forms and LinkedIn

Install the **Claude in Chrome** extension and sign in with the same Claude account. Keep "Ask before acting" on. This is the browser Hope fills application forms in, with your logins, and the one it reads LinkedIn in (read-only, always).

**Unlocks:** Apply (the form gets filled while you watch; you press submit), the LinkedIn half of Sync, and reading job posts you share from LinkedIn. **Without it:** Hope prepares every answer in a file and you type them in yourself.

## 5. Gmail, for the morning sync

In the Claude app, open **Settings → Connectors** and connect **Gmail**. Hope only reads: it never sends, replies, forwards or deletes.

**Unlocks:** Sync (confirmations, rejections, recruiter replies and interview invites land in your tracker each morning). **Without it:** you paste the emails that matter into the chat.

## 6. Google Calendar, for the record-the-call reminders

Same place: connect **Google Calendar**. Use a personal calendar, never a work one an employer could see.

**Unlocks:** the reminder ten minutes before every call, the call itself on your calendar, and prep blocks if you ask for them. **Without it:** Hope hands you a small calendar file to double-click.

## 7. Python, for the tracker and the helper scripts

Most Macs have Python already. In the Code tab, ask Claude to run `python3 --version` and then `pip3 install openpyxl`. That is what writes your tracker spreadsheet.

**Unlocks:** `job-tracker.xlsx`, the job-board sweep, posting capture, the résumé PDF export. **Without openpyxl:** the tracker is a `.csv` file instead; everything else works.

## Optional

- **Transcripts on your own machine:** `pip3 install faster-whisper`. Hope turns your call recordings into a transcript and a debrief without sending the audio anywhere. Without it, use your phone's own transcript.
- **Recording calls:** Voice Memos on your phone is enough. Start it before you join. Hope tells you when the other side needs to agree first.

## Check it worked

Say **where am I?** in a fresh chat. Hope should read your folder and tell you what is set up and what is missing, in five lines.

</div>
