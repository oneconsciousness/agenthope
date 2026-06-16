# Deploy agenthope.ai

This is a plain **Jekyll** site that GitHub Pages builds with **"Deploy from a branch"** —
**no GitHub Actions**, no build pipeline to maintain. Push the folder, flip two settings, add four
DNS records. That's the whole job.

Everything below is done by **you (the owner)** — the scaffolding agent did not create a repo or
touch DNS on purpose, so you review first.

---

## 0. (Optional) Preview locally first

You don't need Ruby to deploy — GitHub builds the site for you. But if you want to see it before
pushing:

```bash
cd agenthope-site
bundle install
bundle exec jekyll serve
# open http://127.0.0.1:4000
```

---

## 1. Create the public repo

Create a **public** repository named **`agenthope`** under the **`oneconsciousness`** account.

```bash
cd agenthope-site
git init -b main
git add .
git commit -m "scaffold agenthope.ai site"
gh repo create oneconsciousness/agenthope --public --source=. --remote=origin --push
```

(Or create `oneconsciousness/agenthope` in the GitHub UI, then
`git remote add origin https://github.com/oneconsciousness/agenthope.git && git push -u origin main`.)

---

## 2. Turn on Pages — Deploy from a branch

In the repo: **Settings → Pages**.

- **Source:** *Deploy from a branch*
- **Branch:** `main`
- **Folder:** `/ (root)`
- Click **Save**.

GitHub builds the site and gives you a temporary URL like
`https://oneconsciousness.github.io/agenthope/`. Wait for the first build to go green (1–2 min).

> The repo already contains a `CNAME` file (`agenthope.ai`), so once DNS is in place GitHub serves
> the site at the custom domain automatically.

---

## 3. Set the custom domain (in GitHub, BEFORE DNS)

Still in **Settings → Pages → Custom domain**:

- Enter **`agenthope.ai`** and click **Save**.

GitHub will show a DNS check that fails for now — that's expected. Add it here **before** the DNS
records so GitHub starts watching for them.

---

## 4. Point DNS at GitHub (Namecheap)

In **Namecheap → Domain List → `agenthope.ai` → Manage → Advanced DNS**:

1. **Delete the default parking records** Namecheap adds (the `CNAME` on `@`/`www` pointing at
   `parkingpage.namecheap.com`, and any default `URL Redirect`). Leave nothing on `@` or `www`.

2. **Add four A records** — Host `@`, pointing at GitHub Pages' IPs:

   | Type     | Host | Value             |
   |----------|------|-------------------|
   | A Record | @    | 185.199.108.153   |
   | A Record | @    | 185.199.109.153   |
   | A Record | @    | 185.199.110.153   |
   | A Record | @    | 185.199.111.153   |

3. **Add one CNAME record** for `www`:

   | Type        | Host | Value                          |
   |-------------|------|--------------------------------|
   | CNAME Record| www  | oneconsciousness.github.io.    |

   (Namecheap may strip or add the trailing dot — either is fine.)

Set **Automatic** TTL or 5 min. DNS can take anywhere from a few minutes to a couple of hours to
propagate.

---

## 5. Enforce HTTPS

Back in **Settings → Pages**, wait until the DNS check passes and GitHub provisions the TLS
certificate (the **"Enforce HTTPS"** checkbox stops being greyed out — this can take up to ~30 min
after DNS resolves).

Then **tick "Enforce HTTPS."** Done — the site is live at `https://agenthope.ai`.

---

## What's already wired for you

- **`CNAME`** (`agenthope.ai`) — committed, served at the site root.
- **`robots.txt`** — allows every crawler, names the major AI agents explicitly, points at the
  sitemap.
- **`sitemap.xml`** — generated automatically by the `jekyll-sitemap` plugin (Pages-supported).
- **`llms.txt`** + **`llms-full.txt`** — the AI-agent index, served at the root.
- **Raw Markdown** for each skill at `/skills/<name>.md` — clean text for agents to fetch.
- **`url: https://agenthope.ai`** is already set in `_config.yml`.

## When you change the content later

Just `git push` to `main`. GitHub rebuilds and redeploys automatically — no Action, no extra step.
