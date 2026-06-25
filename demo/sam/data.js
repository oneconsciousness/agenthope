/* data.js — SINGLE SOURCE OF TRUTH for this portfolio (spec §A, schema_version 2).
   Classic script, ONE global. index.html loads this BEFORE portfolio.js.

   DEMO PERSONA — "sam" (Sam Altman, Co-founder & CEO, OpenAI).
   REAL public figure · PUBLIC career data only · illustrative sample.
   NOT affiliated with or endorsed by Sam Altman or OpenAI. No private contact
   info is fabricated: only public handles/website are used; email/phone omitted.

   NO-HEX RULE (spec §A.7): semantic values only — category/level/band tokens.
   portfolio.js resolves them to var(--token) at render. Zero raw hex here. */

window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Sam Altman",
    headline: "Co-founder & CEO, OpenAI",
    og_description: "Co-founder and CEO of OpenAI, maker of ChatGPT — the fastest consumer product to 100M users. Former president of Y Combinator, where he scaled the world's most influential startup accelerator.",
    summary_short: "I build companies that change what's possible. From a Stanford dropout founding Loopt, to running Y Combinator, to leading OpenAI and shipping ChatGPT.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 96, band: "high" },
      skills:         { pct: 84, band: "mid"  },
      education:      { pct: 90, band: "high" },
      certifications: { pct: 82, band: "mid"  },
      projects:       { pct: 92, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "San Francisco, CA",
    links: [
      { kind: "x",       label: "X",        url: "https://x.com/sama",            resume: true },
      { kind: "website", label: "Website",  url: "https://blog.samaltman.com",    resume: true },
      { kind: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/sama", resume: false }
    ],
    summary: "Co-founder & CEO of OpenAI, maker of ChatGPT. Former president of Y Combinator (2014–2019), where I scaled the world's most influential startup accelerator. Started my first company, Loopt, after dropping out of Stanford. Stanford dropout → YC president → ChatGPT.",
    stats: { skills: 18, roles: 4, contributions: 4 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "smart_toy",    value: "ChatGPT",      label: "launched to 100M users in two months" },
      { icon: "groups",       value: "Y Combinator", label: "president, 2014–2019" },
      { icon: "trending_up",  value: "$300B",        label: "OpenAI valuation" },
      { icon: "bolt",         value: "AGI",          label: "OpenAI's stated mission" }
    ],
    interests: ["artificial general intelligence", "startups", "nuclear energy", "longevity", "technology"]
  },

  experience: [
    {
      id: "openai",
      role_title: "Co-founder & CEO",
      company: "OpenAI",
      company_domain: "openai.com",
      company_initial: "O",
      dates: "2019 — Present (co-founded 2015)",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "groups",
              domain: "AI · Company Building",
              scope: "industry",
              metric: { value: "100M+", direction: "achieved", subject: "ChatGPT users" },
              action: "Co-founded OpenAI in 2015 and became CEO in 2019; led the launches of ChatGPT and the GPT-4 model line.",
              impact: "ChatGPT reached 100M+ users faster than any prior consumer app and reset the AI industry.",
              skills: [
                { name: "AI strategy",  category: "domain" },
                { name: "fundraising",  category: "methods" },
                { name: "leadership",   category: "interpersonal" }
              ],
              competencies: ["company building"]
            }
          ]
        }
      ]
    },
    {
      id: "ycombinator",
      role_title: "President",
      company: "Y Combinator",
      company_domain: "ycombinator.com",
      company_initial: "Y",
      dates: "2014 — 2019 (partner 2011)",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 0 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "trending_up",
              domain: "Startups · Investing",
              scope: "industry",
              action: "Ran Y Combinator as president, expanding the accelerator and launching YC Continuity for later-stage funding.",
              impact: "Helped fund and scale hundreds of startups now worth hundreds of billions.",
              skills: [
                { name: "startup advising",  category: "methods" },
                { name: "venture investing", category: "domain" }
              ],
              competencies: ["ecosystem building"]
            }
          ]
        }
      ]
    },
    {
      id: "hydrazine",
      role_title: "Managing Partner",
      company: "Hydrazine Capital",
      company_initial: "H",
      dates: "2012 — 2015",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "savings",
              domain: "Investing",
              scope: "team",
              action: "Ran a seed fund backing early-stage startups, including a large early position in Stripe.",
              impact: "Built the investing track record that led to running YC.",
              skills: [
                { name: "venture investing", category: "domain" }
              ],
              competencies: ["capital allocation"]
            }
          ]
        }
      ]
    },
    {
      id: "loopt",
      role_title: "Co-founder & CEO",
      company: "Loopt",
      company_initial: "L",
      dates: "2005 — 2012",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "share_location",
              domain: "Mobile · Location",
              scope: "company-wide",
              metric: { value: "$43.4M", direction: "achieved", subject: "acquisition" },
              action: "Co-founded Loopt, a location-sharing app, in Y Combinator's first batch; raised $30M+ and sold it to Green Dot.",
              impact: "Acquired by Green Dot for $43.4M in 2012.",
              skills: [
                { name: "product", category: "domain" },
                { name: "mobile",  category: "domain" }
              ],
              competencies: ["zero-to-one"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "chatgpt",
      name: "ChatGPT",
      tagline: "OpenAI · CEO",
      dates: "2022 — Present",
      is_active: true,
      domain: "openai.com",
      initial: "O",
      best_metric: "100M+ users",
      description: "Shipped ChatGPT, the assistant that brought generative AI to hundreds of millions of people.",
      impact: "Fastest consumer product to 100M users at the time, resetting the trajectory of the AI industry.",
      skills: [
        { name: "AI strategy", category: "domain" },
        { name: "product",     category: "domain" }
      ],
      link: { url: "https://chatgpt.com", label: "Open ChatGPT" }
    },
    {
      id: "worldcoin",
      name: "Worldcoin / Tools for Humanity",
      tagline: "Co-founder & Chairman",
      dates: "2019 — Present",
      is_active: true,
      domain: "worldcoin.org",
      initial: "W",
      description: "Co-founded Worldcoin, a proof-of-personhood and digital-identity project building identity infrastructure for an AI age.",
      skills: [
        { name: "platform strategy", category: "domain" }
      ]
    }
  ],

  skills: {
    order: ["Domain", "Methods", "Interpersonal", "Analytical"],
    radar: [
      { axis: "Product Vision", score: 4, source: "SVPG", inDemand: false },
      { axis: "Zero-to-One Building", score: 4, source: "BIP", inDemand: false },
      { axis: "Fundraising", score: 4, source: "VC", inDemand: false },
      { axis: "Founder Leadership", score: 3, source: "BIP", inDemand: false },
      { axis: "Ecosystem Building", score: 3, source: "VC", inDemand: false },
      { axis: "Public Influence", score: 3, source: "VC", inDemand: false }
    ],
    categories: {
      "Domain": {
        category: "domain",
        items: [
          { name: "AI strategy",           level: 4, years: 8 },
          { name: "product",               level: 4, years: 18 },
          { name: "startups",              level: 4, years: 20 },
          { name: "large language models", level: 3, years: 6 },
          { name: "platform strategy",     level: 3, years: 10 }
        ]
      },
      "Methods": {
        category: "methods",
        items: [
          { name: "fundraising",       level: 4, years: 18 },
          { name: "go-to-market",      level: 3, years: 15 },
          { name: "startup advising",  level: 4, years: 12 },
          { name: "capital allocation", level: 3, years: 12 },
          { name: "hiring",            level: 4, years: 15 }
        ]
      },
      "Interpersonal": {
        category: "interpersonal",
        items: [
          { name: "leadership",           level: 4, years: 15 },
          { name: "recruiting",           level: 4, years: 14 },
          { name: "public communication", level: 4, years: 10 },
          { name: "negotiation",          level: 3, years: 15 },
          { name: "storytelling",         level: 3, years: 12 }
        ]
      },
      "Analytical": {
        category: "analytical",
        items: [
          { name: "market analysis",  level: 4, years: 18 },
          { name: "strategy",         level: 4, years: 15 },
          { name: "systems thinking", level: 3, years: 15 }
        ]
      }
    }
  },

  education: [
    {
      id: "stanford-cs",
      degree_line: "Computer Science (did not finish)",
      institution: "Stanford University",
      institution_domain: "stanford.edu",
      institution_initial: "S",
      dates: "2003 — 2005 · left to found Loopt"
    }
  ],

  certifications: [
    {
      id: "time100-ceo",
      name: "TIME100 / CEO of the Year",
      issuer: "TIME",
      issuer_domain: "time.com",
      issuer_initial: "T",
      date: "2023"
    },
    {
      id: "yc-first-batch",
      name: "Y Combinator — First Batch (Loopt)",
      issuer: "Summer 2005 cohort",
      issuer_domain: "ycombinator.com",
      issuer_initial: "Y",
      date: "2005"
    }
  ],

  resume: {
    contact_line_parts: {
      location: "San Francisco, CA",
      links: [
        { label: "X",        url: "https://x.com/sama" },
        { label: "Website",  url: "https://blog.samaltman.com" }
      ]
    },
    summary: "Co-founder and CEO of OpenAI, maker of ChatGPT. Former president of Y Combinator who scaled the world's most influential startup accelerator. A two-decade builder of companies and capital, from founding Loopt out of Stanford to leading the company defining the AI era.",
    experience: [
      {
        role_title: "Co-founder & CEO",
        company: "OpenAI",
        dates: "2019 — Present (co-founded 2015)",
        bullets: [
          { text: "Co-founded OpenAI in 2015 and became CEO in 2019; led the launches of ChatGPT and the GPT-4 model line.", tag: "100M+ users" },
          { text: "Brought generative AI to hundreds of millions of people, resetting the trajectory of the industry.", tag: "fastest to 100M" }
        ]
      },
      {
        role_title: "President",
        company: "Y Combinator",
        dates: "2014 — 2019",
        bullets: [
          { text: "Ran Y Combinator as president, expanding the accelerator and launching YC Continuity for later-stage funding.", tag: "hundreds of startups" },
          { text: "Helped fund and scale companies now worth hundreds of billions of dollars.", tag: "$100B+ created" }
        ]
      },
      {
        role_title: "Managing Partner",
        company: "Hydrazine Capital",
        dates: "2012 — 2015",
        bullets: [
          { text: "Ran a seed fund backing early-stage startups, including a large early position in Stripe.", tag: "seed fund" }
        ]
      },
      {
        role_title: "Co-founder & CEO",
        company: "Loopt",
        dates: "2005 — 2012",
        bullets: [
          { text: "Co-founded Loopt, a location-sharing app, in Y Combinator's first batch; raised $30M+ in venture capital.", tag: "$30M+ raised" },
          { text: "Sold the company to Green Dot in 2012.", tag: "$43.4M exit" }
        ]
      }
    ],
    education: [
      {
        degree_line: "Computer Science (did not finish)",
        institution: "Stanford University",
        dates: "2003 — 2005"
      }
    ],
    skills_line: "AI strategy, product, startups, large language models, platform strategy, fundraising, capital allocation, hiring, leadership, recruiting, public communication, market analysis, strategy, systems thinking"
  },

  timeline: [
    {
      id: "openai",
      type: "experience",
      date_start: "2019-01",
      date_end: null,
      label: "Co-founder & CEO @ OpenAI",
      org: "OpenAI",
      domain: "openai.com",
      metric: "100M+ ChatGPT users",
      skills: ["AI strategy", "fundraising", "leadership"],
      pane: "experience",
      anchor: "tl-openai",
      featured: true
    },
    {
      id: "chatgpt",
      type: "project",
      date_start: "2022-11",
      date_end: null,
      label: "ChatGPT",
      org: "OpenAI",
      domain: "openai.com",
      metric: "100M+ users in 2 months",
      skills: ["AI strategy", "product"],
      pane: "projects",
      anchor: "tl-chatgpt",
      featured: true
    },
    {
      id: "worldcoin",
      type: "project",
      date_start: "2019-01",
      date_end: null,
      label: "Worldcoin / Tools for Humanity",
      org: null,
      domain: "worldcoin.org",
      metric: "digital-identity infrastructure",
      skills: ["platform strategy"],
      pane: "projects",
      anchor: "tl-worldcoin"
    },
    {
      id: "ycombinator",
      type: "experience",
      date_start: "2014-01",
      date_end: "2019-01",
      label: "President @ Y Combinator",
      org: "Y Combinator",
      domain: "ycombinator.com",
      metric: "hundreds of startups scaled",
      skills: ["startup advising", "venture investing"],
      pane: "experience",
      anchor: "tl-ycombinator",
      featured: true
    },
    {
      id: "hydrazine",
      type: "experience",
      date_start: "2012-01",
      date_end: "2015-01",
      label: "Managing Partner @ Hydrazine Capital",
      org: "Hydrazine Capital",
      domain: null,
      metric: "seed fund — early Stripe",
      skills: ["venture investing"],
      pane: "experience",
      anchor: "tl-hydrazine"
    },
    {
      id: "time100-ceo",
      type: "certification",
      date_start: "2023-01",
      date_end: "2023-01",
      label: "TIME100 / CEO of the Year",
      org: "TIME",
      domain: "time.com",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-time100-ceo"
    },
    {
      id: "loopt",
      type: "experience",
      date_start: "2005-01",
      date_end: "2012-01",
      label: "Co-founder & CEO @ Loopt",
      org: "Loopt",
      domain: null,
      metric: "$43.4M acquisition",
      skills: ["product", "mobile"],
      pane: "experience",
      anchor: "tl-loopt"
    },
    {
      id: "yc-first-batch",
      type: "certification",
      date_start: "2005-06",
      date_end: "2005-06",
      label: "YC First Batch (Loopt)",
      org: "Y Combinator",
      domain: "ycombinator.com",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-yc-first-batch"
    },
    {
      id: "stanford-cs",
      type: "education",
      date_start: "2003-09",
      date_end: "2005-01",
      label: "Computer Science @ Stanford",
      org: "Stanford University",
      domain: "stanford.edu",
      metric: "left to found Loopt",
      skills: [],
      pane: "education",
      anchor: "tl-stanford-cs"
    }
  ],

  social: [
    { platform: "x",    url: "https://x.com/sama/status/1598038815599661056", caption: "The day we launched ChatGPT", pinned: true },
    { platform: "x",    url: "https://x.com/sama/status/1599668808285028353", caption: "ChatGPT hit 1 million users", pinned: true },
    { platform: "x",    url: "https://x.com/sama/status/1906771292390666325", caption: "A million new users in an hour" },
    { platform: "x",    url: "https://x.com/sama/status/1945900345378697650", caption: "Launching ChatGPT Agent" },
    { platform: "link", url: "https://blog.samaltman.com/reflections",        title: "Reflections", caption: "Reflections on nine years of OpenAI" },
    { platform: "link", url: "https://blog.samaltman.com/how-to-be-successful", title: "How to be successful", caption: "How to be successful" }
  ],

  traveler: "rocket"
};
