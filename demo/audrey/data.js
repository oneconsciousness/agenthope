/* data.js — the SINGLE SOURCE OF TRUTH for this portfolio (schema v2).
   ONE global, classic script (file:// law). index.html loads this BEFORE
   portfolio.js, so window.HOPE_DATA exists when the renderers run.

   PERSONA: Audrey Tang — Civic Technologist · ex-Digital Minister, Taiwan.
   REAL public figure · PUBLIC career data only · ILLUSTRATIVE sample.
   Not affiliated with or endorsed by Audrey Tang. No private contact info:
   public handles + website only; email/phone omitted by design.

   Semantic values ONLY — zero raw hex (no-hex rule, canon §10 / spec §A.7).
   Skill colors come from `level` (tier) + `category` (header ledge) at render. */

window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Audrey Tang",
    headline: "Civic Technologist · ex-Digital Minister, Taiwan",
    og_description: "Taiwan's first Minister of Digital Affairs and a respected open-source hacker — built vTaiwan and the COVID mask map, contributed to Perl 6 (Raku) and Haskell, and turned civic-tech into a working model of government.",
    summary_short: "I bring rough consensus and running code to government. Taiwan's first Digital Minister, an open-source contributor since my teens, and a builder of digital-democracy tools from the g0v movement.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 92, band: "high" },
      skills:         { pct: 88, band: "mid"  },
      education:      { pct: 78, band: "mid"  },
      certifications: { pct: 84, band: "mid"  },
      projects:       { pct: 90, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "Taipei, Taiwan",
    summary: "Taiwan's first Minister of Digital Affairs and the government's first transgender, non-binary cabinet member. A self-taught programmer who left school at 14, contributed to Perl 6 (Raku) and Haskell, advised Apple on Siri, and built digital-democracy tools out of the g0v civic-tech movement — rough consensus and running code, applied to government.",
    links: [
      { kind: "x",       label: "X",       url: "https://x.com/audreyt",          resume: true },
      { kind: "github",  label: "GitHub",  url: "https://github.com/audreyt",     resume: true },
      { kind: "website", label: "Website", url: "https://audreyt.org",            resume: true }
    ],
    stats: { skills: 20, roles: 5, contributions: 5 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "public",             value: "1st",     label: "Taiwan's first Digital Minister" },
      { icon: "forum",              value: "vTaiwan", label: "open-government deliberation tools" },
      { icon: "health_and_safety",  value: "mask map", label: "real-time mask-supply map in days" },
      { icon: "code",               value: "g0v",     label: "leader in the civic-tech movement" }
    ],
    interests: ["digital democracy", "open government", "open source", "civic tech", "poetry"]
  },

  experience: [
    {
      id: "moda-ambassador",
      role_title: "Cyber Ambassador-at-large",
      company: "Taiwan",
      company_domain: "moda.gov.tw",
      company_initial: "T",
      dates: "2024 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "public",
              domain: "Digital Democracy",
              scope: "industry",
              action: "Represents Taiwan internationally on digital democracy, open government, and information resilience.",
              impact: "Carries Taiwan's participatory-governance model to a global audience.",
              skills: [
                { name: "digital democracy", category: "domain" },
                { name: "public policy",     category: "domain" }
              ],
              competencies: ["diplomacy"]
            }
          ]
        }
      ]
    },
    {
      id: "moda-minister",
      role_title: "Minister of Digital Affairs (first)",
      company: "Taiwan",
      company_domain: "moda.gov.tw",
      company_initial: "T",
      dates: "2022 — 2024",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "hub",
              domain: "Open Government · Cyber",
              scope: "company-wide",
              metric: { value: "1st", direction: "achieved", subject: "Digital Minister" },
              action: "Taiwan's first Digital Minister — built participation tools (vTaiwan, Join), led the open-data COVID mask-map response, and defended the 2024 elections from cyber-interference.",
              impact: "Pioneered transparent, participatory digital governance copied around the world; first non-binary cabinet member.",
              skills: [
                { name: "open government",       category: "domain" },
                { name: "cybersecurity",         category: "domain" },
                { name: "participatory design",  category: "methods" }
              ],
              competencies: ["public leadership"]
            }
          ]
        }
      ]
    },
    {
      id: "minister-no-portfolio",
      role_title: "Digital Minister (without portfolio)",
      company: "Taiwan",
      company_initial: "T",
      dates: "2016 — 2022",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "forum",
              domain: "Civic Tech",
              scope: "industry",
              action: "Joined the cabinet from the g0v civic-tech community; brought open-source, consensus-seeking methods into policymaking after the 2014 Sunflower Movement.",
              impact: "Turned civic hacking into a working model of government.",
              skills: [
                { name: "civic tech",  category: "domain" },
                { name: "open source", category: "domain" }
              ],
              competencies: ["bridge-building"]
            }
          ]
        }
      ]
    },
    {
      id: "apple-siri",
      role_title: "Consultant — Siri",
      company: "Apple",
      company_domain: "apple.com",
      company_initial: "A",
      dates: "2010 — 2016",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "mic",
              domain: "Machine Learning",
              scope: "industry",
              action: "Consulted for Apple, helping develop its Siri virtual assistant and other machine-learning products.",
              impact: "Applied language and ML expertise at consumer scale.",
              skills: [
                { name: "machine learning", category: "domain" },
                { name: "natural language", category: "domain" }
              ],
              competencies: ["applied ML"]
            }
          ]
        }
      ]
    },
    {
      id: "perl-haskell",
      role_title: "Software Engineer · Perl 6 / Haskell",
      company: "Socialtext & open source",
      company_initial: "P",
      dates: "1996 — 2010",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "code",
              domain: "Programming Languages",
              scope: "industry",
              action: "Core contributor to Perl 6 (Raku) and Haskell; worked in high-level IT consultancy and built open-source software from a young age.",
              impact: "A respected figure in the global free-software community.",
              skills: [
                { name: "Perl / Raku", category: "programming" },
                { name: "Haskell",     category: "programming" },
                { name: "open source", category: "domain" }
              ],
              competencies: ["hacker craft"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "vtaiwan-join",
      name: "vTaiwan / Join",
      tagline: "Taiwan · Digital Minister",
      dates: "2015 — Present",
      is_active: true,
      initial: "V",
      best_metric: "millions reached",
      description: "Built open platforms (vTaiwan, Join) where citizens and government deliberate on policy and reach rough consensus.",
      impact: "Used to shape real legislation, from Uber to alcohol e-commerce.",
      skills: [
        { name: "digital democracy",    category: "domain" },
        { name: "participatory design", category: "methods" }
      ]
    },
    {
      id: "mask-map",
      name: "COVID Mask Map",
      tagline: "Taiwan · g0v",
      dates: "2020",
      is_active: false,
      initial: "M",
      best_metric: "national rollout",
      description: "Coordinated the open-data mask-availability map that helped Taiwan manage PPE without lockdowns.",
      impact: "A model of open-data crisis response.",
      skills: [
        { name: "open source", category: "domain" },
        { name: "civic tech",  category: "domain" }
      ]
    },
    {
      id: "raku",
      name: "Perl 6 / Raku",
      tagline: "Open source · Core contributor",
      dates: "2005 — 2010",
      is_active: false,
      domain: "raku.org",
      initial: "R",
      best_metric: "core contributor",
      description: "Core contributor to the design and implementation of Perl 6 (Raku).",
      impact: "Helped bootstrap the language's first working implementations.",
      skills: [
        { name: "Perl / Raku", category: "programming" },
        { name: "open source", category: "domain" }
      ],
      link: { url: "https://github.com/audreyt", label: "Code on GitHub" }
    }
  ],

  skills: {
    order: ["Domain", "Programming", "Methods", "Interpersonal", "Languages"],
    categories: {
      "Domain": {
        category: "domain",
        items: [
          { name: "digital democracy",       level: 4, years: 12 },
          { name: "open government",         level: 4, years: 12 },
          { name: "civic tech",              level: 4, years: 16 },
          { name: "open source",             level: 4, years: 26 },
          { name: "cybersecurity",           level: 3, years: 10 },
          { name: "public policy",           level: 3, years: 10 },
          { name: "information resilience",  level: 3, years: 8  }
        ]
      },
      "Programming": {
        category: "programming",
        items: [
          { name: "Perl / Raku", level: 4, years: 26 },
          { name: "Haskell",     level: 4, years: 24 },
          { name: "Python",      level: 3, years: 20 },
          { name: "JavaScript",  level: 3, years: 20 }
        ]
      },
      "Methods": {
        category: "methods",
        items: [
          { name: "participatory design",      level: 4, years: 12 },
          { name: "rough consensus",           level: 4, years: 16 },
          { name: "deliberative facilitation", level: 3, years: 12 }
        ]
      },
      "Interpersonal": {
        category: "interpersonal",
        items: [
          { name: "facilitation",          level: 4, years: 14 },
          { name: "public communication",  level: 4, years: 12 },
          { name: "radical transparency",  level: 4, years: 12 }
        ]
      },
      "Languages": {
        category: "languages",
        items: [
          { name: "Mandarin (native)", level: 4 },
          { name: "English",           level: 4 },
          { name: "German",            level: 3 }
        ]
      }
    }
  },

  education: [
    {
      id: "self-taught",
      degree_line: "Self-taught · left formal school at 14",
      institution: "Independent study — programming & mathematics",
      institution_initial: "S",
      dates: "from 1995"
    }
  ],

  certifications: [
    {
      id: "plurality-book",
      name: "Co-author — “Plurality”",
      issuer: "Book on collaborative technology & democracy",
      issuer_initial: "P",
      date: "2024"
    },
    {
      id: "time100-ai",
      name: "TIME100 AI — Most Influential",
      issuer: "TIME",
      issuer_domain: "time.com",
      issuer_initial: "T",
      date: "2023"
    },
    {
      id: "honorary-doctorates",
      name: "Honorary Doctorates",
      issuer: "For digital democracy & open government",
      issuer_initial: "H",
      date: null
    }
  ],

  resume: {
    contact_line_parts: {
      location: "Taipei, Taiwan",
      links: [
        { label: "X",       url: "https://x.com/audreyt" },
        { label: "GitHub",  url: "https://github.com/audreyt" },
        { label: "Website", url: "https://audreyt.org" }
      ]
    },
    summary: "Civic technologist and Taiwan's first Minister of Digital Affairs, with a self-taught open-source background reaching back to the 1990s. I build participatory-governance tools (vTaiwan, Join, the COVID mask map) and bring rough consensus and running code into policymaking, while contributing to open-source language ecosystems like Perl 6 (Raku) and Haskell.",
    experience: [
      {
        role_title: "Cyber Ambassador-at-large",
        company: "Taiwan",
        dates: "2024 — Present",
        bullets: [
          { text: "Represent Taiwan internationally on digital democracy, open government, and information resilience.", tag: "global" }
        ]
      },
      {
        role_title: "Minister of Digital Affairs (first)",
        company: "Taiwan",
        dates: "2022 — 2024",
        bullets: [
          { text: "Built participation tools (vTaiwan, Join) and led the open-data COVID mask-map response as Taiwan's first Digital Minister.", tag: "1st Digital Minister" },
          { text: "Defended the 2024 elections from cyber-interference and pioneered transparent, participatory digital governance copied worldwide.", tag: "2024 elections" }
        ]
      },
      {
        role_title: "Digital Minister (without portfolio)",
        company: "Taiwan",
        dates: "2016 — 2022",
        bullets: [
          { text: "Joined the cabinet from the g0v civic-tech community, bringing open-source, consensus-seeking methods into policymaking.", tag: "g0v" }
        ]
      },
      {
        role_title: "Consultant — Siri",
        company: "Apple",
        dates: "2010 — 2016",
        bullets: [
          { text: "Consulted for Apple on the Siri virtual assistant and other machine-learning products.", tag: "Siri" }
        ]
      },
      {
        role_title: "Software Engineer · Perl 6 / Haskell",
        company: "Socialtext & open source",
        dates: "1996 — 2010",
        bullets: [
          { text: "Core contributor to Perl 6 (Raku) and Haskell, building open-source software from a young age.", tag: "Perl 6 / Raku" }
        ]
      }
    ],
    education: [
      {
        degree_line: "Self-taught · left formal school at 14",
        institution: "Independent study — programming & mathematics",
        dates: "from 1995"
      }
    ],
    skills_line: "digital democracy, open government, civic tech, open source, cybersecurity, public policy, Perl / Raku, Haskell, Python, participatory design, rough consensus, facilitation, public communication"
  },

  timeline: [
    {
      id: "moda-ambassador",
      type: "experience",
      date_start: "2024-01",
      date_end: null,
      label: "Cyber Ambassador-at-large @ Taiwan",
      org: "Taiwan",
      domain: "moda.gov.tw",
      metric: "Global digital democracy",
      skills: ["digital democracy", "public policy"],
      pane: "experience",
      anchor: "tl-moda-ambassador",
      featured: true
    },
    {
      id: "moda-minister",
      type: "experience",
      date_start: "2022-08",
      date_end: "2024-05",
      label: "Minister of Digital Affairs @ Taiwan",
      org: "Taiwan",
      domain: "moda.gov.tw",
      metric: "1st Digital Minister",
      skills: ["open government", "cybersecurity", "participatory design"],
      pane: "experience",
      anchor: "tl-moda-minister",
      featured: true
    },
    {
      id: "minister-no-portfolio",
      type: "experience",
      date_start: "2016-10",
      date_end: "2022-08",
      label: "Digital Minister (no portfolio) @ Taiwan",
      org: "Taiwan",
      domain: null,
      metric: "From g0v to cabinet",
      skills: ["civic tech", "open source"],
      pane: "experience",
      anchor: "tl-minister-no-portfolio"
    },
    {
      id: "apple-siri",
      type: "experience",
      date_start: "2010-01",
      date_end: "2016-10",
      label: "Consultant — Siri @ Apple",
      org: "Apple",
      domain: "apple.com",
      metric: "ML at consumer scale",
      skills: ["machine learning", "natural language"],
      pane: "experience",
      anchor: "tl-apple-siri"
    },
    {
      id: "perl-haskell",
      type: "experience",
      date_start: "1996-01",
      date_end: "2010-01",
      label: "Software Engineer · Perl 6 / Haskell",
      org: "Socialtext & open source",
      domain: null,
      metric: "Open-source contributor",
      skills: ["Perl / Raku", "Haskell", "open source"],
      pane: "experience",
      anchor: "tl-perl-haskell"
    },
    {
      id: "vtaiwan-join",
      type: "project",
      date_start: "2015-01",
      date_end: null,
      label: "vTaiwan / Join",
      org: "Taiwan",
      domain: null,
      metric: "Shaped real legislation",
      skills: ["digital democracy", "participatory design"],
      pane: "projects",
      anchor: "tl-vtaiwan-join",
      featured: true
    },
    {
      id: "mask-map",
      type: "project",
      date_start: "2020-02",
      date_end: "2020-12",
      label: "COVID Mask Map",
      org: "g0v",
      domain: null,
      metric: "Open-data crisis response",
      skills: ["open source", "civic tech"],
      pane: "projects",
      anchor: "tl-mask-map"
    },
    {
      id: "raku",
      type: "project",
      date_start: "2005-01",
      date_end: "2010-01",
      label: "Perl 6 / Raku",
      org: "Open source",
      domain: "raku.org",
      metric: "Core contributor",
      skills: ["Perl / Raku", "open source"],
      pane: "projects",
      anchor: "tl-raku"
    },
    {
      id: "plurality-book",
      type: "certification",
      date_start: "2024-01",
      date_end: "2024-01",
      label: "Co-author — Plurality",
      org: "Book",
      domain: null,
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-plurality-book"
    },
    {
      id: "time100-ai",
      type: "certification",
      date_start: "2023-01",
      date_end: "2023-01",
      label: "TIME100 AI — Most Influential",
      org: "TIME",
      domain: "time.com",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-time100-ai"
    },
    {
      id: "honorary-doctorates",
      type: "certification",
      date_start: null,
      date_end: null,
      label: "Honorary Doctorates",
      org: null,
      domain: null,
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-honorary-doctorates"
    },
    {
      id: "self-taught",
      type: "education",
      date_start: "1995-01",
      date_end: null,
      label: "Self-taught · left school at 14",
      org: "Independent study",
      domain: null,
      metric: null,
      skills: [],
      pane: "education",
      anchor: "tl-self-taught"
    }
  ],

  social: [
    { platform: "x",    pinned: true, url: "https://x.com/audreyt/status/1460951399240732672", caption: "Digital democracy, meet bubble tea" },
    { platform: "gist", pinned: true, url: "https://github.com/audreyt/plurality", caption: "Plurality: open-source democracy book" },
    { platform: "x",    url: "https://x.com/audreyt/status/1893671891547607206", caption: "Taiwan model shapes Engaged California" },
    { platform: "x",    url: "https://x.com/audreyt/status/1962816679299162227", caption: "AI governance needs a 6-pack of care" },
    { platform: "x",    url: "https://x.com/audreyt/status/1966436911330869272", caption: "Open-source defence, end-to-end encryption" },
    { platform: "x",    url: "https://x.com/audreyt/status/731895317377867776", caption: "Interpreting at a vTaiwan unconference" },
    { platform: "gist", url: "https://github.com/audreyt/civic.ai", caption: "Civic AI care-ethics framework" }
  ],

  traveler: "paper-plane"
};
