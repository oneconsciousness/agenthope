/* data.js — SINGLE SOURCE OF TRUTH for Dominique Crenn's portfolio (schema v2).
   REAL public figure · PUBLIC career data only · ILLUSTRATIVE sample — not
   affiliated with or endorsed by Dominique Crenn or Atelier Crenn. No private
   contact info: public website + public social handles only (no email/phone).
   Classic script, ONE global, loaded BEFORE portfolio.js (file:// law).
   portfolio.js renders every visible surface from this object; index.html ships
   only a static SEO-stamped shell. NO hex / rgb() / var(--token) here — semantic
   tokens only (category / level / band); the renderer resolves colors. */

window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Dominique Crenn",
    headline: "Chef & Owner · Atelier Crenn (3 Michelin stars)",
    og_description: "Chef & owner of Atelier Crenn — the first woman in the United States to earn three Michelin stars. Self-taught French chef whose poetic, vegetable-forward tasting menus redefined American fine dining.",
    summary_short: "I'm the first woman in the US to earn three Michelin stars, at my San Francisco restaurant Atelier Crenn. Self-taught, French-born — my tasting menus read as poetry.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 96, band: "high" },
      skills:         { pct: 90, band: "high" },
      education:      { pct: 85, band: "mid"  },
      certifications: { pct: 94, band: "high" },
      projects:       { pct: 92, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "San Francisco, CA",
    summary: "The first woman in the United States to earn three Michelin stars, at her San Francisco restaurant Atelier Crenn. French-born and self-taught — no culinary school — she rose through Jeremiah Tower's kitchen and became the first woman executive chef in Indonesia. Her tasting menus read as poetry: artistry on the plate, three stars earned.",
    links: [
      { kind: "website",   label: "Atelier Crenn", url: "https://www.ateliercrenn.com/", resume: true },
      { kind: "instagram", label: "Instagram",     url: "https://www.instagram.com/dominiquecrenn/" },
      { kind: "x",         label: "X",             url: "https://x.com/dominiquecrenn" }
    ],
    stats: { skills: 17, roles: 5, contributions: 5 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "star",       value: "3 ★",           label: "first US woman chef with 3 Michelin stars" },
      { icon: "restaurant", value: "Atelier Crenn", label: "chef & owner, San Francisco" },
      { icon: "menu_book",  value: "poetry",        label: "menus written as poems" },
      { icon: "eco",        value: "meat-free",     label: "sustainable, vegetable-forward fine dining" }
    ],
    interests: ["gastronomy", "sustainability", "poetry", "art", "mentorship"]
  },

  experience: [
    {
      id: "atelier-crenn",
      role_title: "Chef & Owner",
      company: "Atelier Crenn",
      company_domain: "ateliercrenn.com",
      company_initial: "A",
      dates: "2011 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "restaurant",
              domain: "Fine Dining · Cuisine",
              scope: "industry",
              metric: { value: "3 ★", direction: "achieved", subject: "first US woman" },
              action: "Opened Atelier Crenn in 2011 — poetic, artistic tasting menus — and in 2018 became the first woman in the US to earn three Michelin stars.",
              impact: "Redefined American fine dining and what a woman-led kitchen could achieve.",
              skills: [
                { name: "modernist cuisine", category: "domain" },
                { name: "French cuisine",    category: "domain" },
                { name: "plating",           category: "design" }
              ],
              competencies: ["culinary excellence", "ownership"]
            }
          ]
        }
      ]
    },
    {
      id: "petit-bar-crenn",
      role_title: "Chef & Owner",
      company: "Petit Crenn & Bar Crenn",
      company_initial: "C",
      dates: "2015 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "wine_bar",
              domain: "Hospitality · Restaurants",
              scope: "company-wide",
              action: "Owns Petit Crenn (homestyle French) and Bar Crenn, a Parisian-style wine bar that also earned a Michelin star.",
              impact: "Built a family of restaurants around her vision.",
              skills: [
                { name: "restaurant operations", category: "domain" },
                { name: "menu development",      category: "domain" }
              ],
              competencies: ["business building"]
            }
          ]
        }
      ]
    },
    {
      id: "luce",
      role_title: "Executive Chef",
      company: "Luce, San Francisco",
      company_initial: "L",
      dates: "2009 — 2011",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "local_dining",
              domain: "Fine Dining",
              scope: "company-wide",
              metric: { value: "1 ★", direction: "achieved", subject: "at Luce" },
              action: "As executive chef of Luce, earned the restaurant a Michelin star.",
              impact: "Established her name in the San Francisco fine-dining scene.",
              skills: [
                { name: "French cuisine",      category: "domain" },
                { name: "kitchen management", category: "methods" }
              ],
              competencies: ["rising talent"]
            }
          ]
        }
      ]
    },
    {
      id: "intercontinental-jakarta",
      role_title: "Executive Chef",
      company: "InterContinental, Jakarta",
      company_initial: "I",
      dates: "1997 — 2000",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "public",
              domain: "International · Leadership",
              scope: "industry",
              action: "Became the first woman executive chef in Indonesia, also cooking in Osaka — honing technique and management abroad.",
              impact: "Broke ground for women in professional kitchens internationally.",
              skills: [
                { name: "kitchen management", category: "methods" },
                { name: "global cuisine",     category: "domain" }
              ],
              competencies: ["leadership"]
            }
          ]
        }
      ]
    },
    {
      id: "stars-sf",
      role_title: "Cook",
      company: "Stars, San Francisco (under Jeremiah Tower)",
      company_initial: "S",
      dates: "1988 — 1990s",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "skillet",
              domain: "Training",
              scope: "team",
              action: "Got her first kitchen job under Jeremiah Tower, a father of California cuisine, and worked her way up — with no formal culinary schooling.",
              impact: "Self-taught foundations that became a three-star career.",
              skills: [
                { name: "French cuisine", category: "domain" },
                { name: "technique",      category: "methods" }
              ],
              competencies: ["craft"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "proj-atelier-crenn",
      name: "Atelier Crenn",
      tagline: "Chef & Owner",
      dates: "2011 — Present",
      is_active: true,
      domain: "ateliercrenn.com",
      initial: "A",
      best_metric: "3 ★ Michelin",
      description: "Her flagship — a poetic, vegetable-forward, artistry-driven tasting menu that earned three Michelin stars.",
      impact: "First US woman with three Michelin stars (2018); menus written as verse.",
      skills: [
        { name: "modernist cuisine", category: "domain" },
        { name: "plating",           category: "design" }
      ],
      link: { url: "https://www.ateliercrenn.com/", label: "View Atelier Crenn" }
    },
    {
      id: "proj-bar-crenn",
      name: "Bar Crenn",
      tagline: "Chef & Owner",
      dates: "2018 — Present",
      is_active: true,
      initial: "B",
      best_metric: "1 ★ Michelin",
      description: "A Parisian-style wine bar adjacent to Atelier Crenn that earned its own Michelin star.",
      impact: "Extended the Crenn family of restaurants.",
      skills: [
        { name: "restaurant operations", category: "domain" },
        { name: "French cuisine",        category: "domain" }
      ]
    },
    {
      id: "proj-rebel-chef",
      name: "Rebel Chef",
      tagline: "Author",
      dates: "2020",
      is_active: false,
      initial: "R",
      description: "Wrote the memoir “Rebel Chef: In Search of What Matters,” on identity, immigration, and cooking.",
      impact: "A candid account of a self-made culinary career.",
      skills: [
        { name: "media presence", category: "interpersonal" }
      ]
    }
  ],

  skills: {
    order: ["Domain", "Methods", "Interpersonal", "Creative"],
    radar: [
      { axis: "Modernist Cuisine", score: 4, source: "ACF", inDemand: false },
      { axis: "Plant-Based & Garde Manger", score: 4, source: "ACF", inDemand: true },
      { axis: "Menu Development", score: 4, source: "ACF", inDemand: false },
      { axis: "Kitchen Leadership", score: 3, source: "ACF", inDemand: false },
      { axis: "Cost Control & Operations", score: 3, source: "ACF", inDemand: false },
      { axis: "Hospitality & Service", score: 3, source: "ACF", inDemand: false }
    ],
    categories: {
      "Domain": {
        category: "domain",
        items: [
          { name: "French cuisine",        level: 4, years: 35 },
          { name: "modernist cuisine",     level: 4, years: 20 },
          { name: "fine dining",           level: 4, years: 30 },
          { name: "menu development",      level: 4, years: 30 },
          { name: "pastry",                level: 3, years: 30 },
          { name: "seafood",               level: 3, years: 30 },
          { name: "restaurant operations", level: 4, years: 25 }
        ]
      },
      "Methods": {
        category: "methods",
        items: [
          { name: "kitchen management",       level: 4, years: 28 },
          { name: "sourcing & sustainability", level: 4, years: 20 },
          { name: "service operations",       level: 4, years: 25 },
          { name: "recipe development",       level: 4, years: 30 }
        ]
      },
      "Interpersonal": {
        category: "interpersonal",
        items: [
          { name: "team leadership", level: 4, years: 28 },
          { name: "mentoring",       level: 4, years: 22 },
          { name: "media presence",  level: 3, years: 15 }
        ]
      },
      "Creative": {
        category: "design",
        items: [
          { name: "artistic plating",   level: 4, years: 25 },
          { name: "poetic menu design", level: 4, years: 14 },
          { name: "flavor pairing",     level: 4, years: 30 }
        ]
      }
    }
  },

  education: [
    {
      id: "self-taught",
      degree_line: "Self-taught — no culinary school (trained in working kitchens)",
      institution: "Trained in working kitchens (Stars, SF onward)",
      institution_initial: "S",
      dates: "from 1988"
    }
  ],

  certifications: [
    {
      id: "rebel-chef-author",
      name: "Author — “Rebel Chef”",
      issuer: "Memoir",
      issuer_initial: "R",
      date: "2020"
    },
    {
      id: "michelin-3-star",
      name: "Three Michelin Stars",
      issuer: "Atelier Crenn — first US woman",
      issuer_initial: "M",
      date: "2018"
    },
    {
      id: "worlds-best-female-chef",
      name: "World's Best Female Chef",
      issuer: "World's 50 Best Restaurants",
      issuer_domain: "theworlds50best.com",
      issuer_initial: "W",
      date: "2016"
    }
  ],

  resume: {
    contact_line_parts: {
      location: "San Francisco, CA",
      links: [
        { label: "Atelier Crenn", url: "https://www.ateliercrenn.com/" },
        { label: "Instagram",     url: "https://www.instagram.com/dominiquecrenn/" }
      ]
    },
    summary: "Chef and owner of Atelier Crenn and the first woman in the United States to earn three Michelin stars. Self-taught French chef known for poetic, vegetable-forward tasting menus, sustainable sourcing, and three decades building and leading acclaimed fine-dining kitchens.",
    experience: [
      {
        role_title: "Chef & Owner",
        company: "Atelier Crenn",
        dates: "2011 — Present",
        bullets: [
          { text: "Opened Atelier Crenn with poetic, artistry-driven tasting menus and earned three Michelin stars.", tag: "3 Michelin stars" },
          { text: "Became the first woman in the US to hold three Michelin stars, redefining American fine dining.", tag: "first US woman" }
        ]
      },
      {
        role_title: "Chef & Owner",
        company: "Petit Crenn & Bar Crenn",
        dates: "2015 — Present",
        bullets: [
          { text: "Opened Petit Crenn (homestyle French) and Bar Crenn, a Parisian-style wine bar, building a family of restaurants.", tag: "+1 Michelin star" }
        ]
      },
      {
        role_title: "Executive Chef",
        company: "Luce, San Francisco",
        dates: "2009 — 2011",
        bullets: [
          { text: "Led the Luce kitchen and earned the restaurant a Michelin star, establishing her name in San Francisco.", tag: "1 Michelin star" }
        ]
      },
      {
        role_title: "Executive Chef",
        company: "InterContinental, Jakarta",
        dates: "1997 — 2000",
        bullets: [
          { text: "Became the first woman executive chef in Indonesia, also cooking in Osaka while honing technique and kitchen management.", tag: "first woman exec chef" }
        ]
      },
      {
        role_title: "Cook",
        company: "Stars, San Francisco (under Jeremiah Tower)",
        dates: "1988 — 1990s",
        bullets: [
          { text: "Earned her first kitchen role under Jeremiah Tower and worked up through the line with no formal culinary schooling.", tag: "self-taught" }
        ]
      }
    ],
    education: [
      {
        degree_line: "Self-taught — no culinary school (trained in working kitchens)",
        institution: "Trained in working kitchens (Stars, SF onward)",
        dates: "from 1988"
      }
    ],
    skills_line: "French cuisine, modernist cuisine, fine dining, menu development, restaurant operations, kitchen management, sourcing & sustainability, recipe development, team leadership, artistic plating, poetic menu design, flavor pairing"
  },

  timeline: [
    {
      id: "atelier-crenn",
      type: "experience",
      date_start: "2011-01",
      date_end: null,
      label: "Chef & Owner @ Atelier Crenn",
      org: "Atelier Crenn",
      domain: "ateliercrenn.com",
      metric: "3 ★ — first US woman",
      skills: ["modernist cuisine", "French cuisine", "plating"],
      pane: "experience",
      anchor: "tl-atelier-crenn",
      featured: true
    },
    {
      id: "petit-bar-crenn",
      type: "experience",
      date_start: "2015-01",
      date_end: null,
      label: "Chef & Owner @ Petit / Bar Crenn",
      org: "Petit Crenn & Bar Crenn",
      domain: null,
      metric: "Bar Crenn earned 1 ★",
      skills: ["restaurant operations", "menu development"],
      pane: "experience",
      anchor: "tl-petit-bar-crenn"
    },
    {
      id: "luce",
      type: "experience",
      date_start: "2009-01",
      date_end: "2011-01",
      label: "Executive Chef @ Luce",
      org: "Luce, San Francisco",
      domain: null,
      metric: "1 ★ at Luce",
      skills: ["French cuisine", "kitchen management"],
      pane: "experience",
      anchor: "tl-luce"
    },
    {
      id: "intercontinental-jakarta",
      type: "experience",
      date_start: "1997-01",
      date_end: "2000-01",
      label: "Executive Chef @ InterContinental",
      org: "InterContinental, Jakarta",
      domain: null,
      metric: "First woman exec chef in Indonesia",
      skills: ["kitchen management", "global cuisine"],
      pane: "experience",
      anchor: "tl-intercontinental-jakarta"
    },
    {
      id: "stars-sf",
      type: "experience",
      date_start: "1988-01",
      date_end: "1995-01",
      label: "Cook @ Stars (Jeremiah Tower)",
      org: "Stars, San Francisco",
      domain: null,
      metric: "Self-taught foundations",
      skills: ["French cuisine", "technique"],
      pane: "experience",
      anchor: "tl-stars-sf"
    },
    {
      id: "proj-atelier-crenn",
      type: "project",
      date_start: "2011-01",
      date_end: null,
      label: "Atelier Crenn (flagship)",
      org: "Atelier Crenn",
      domain: "ateliercrenn.com",
      metric: "3 ★ Michelin",
      skills: ["modernist cuisine", "plating"],
      pane: "projects",
      anchor: "tl-proj-atelier-crenn",
      featured: true
    },
    {
      id: "proj-bar-crenn",
      type: "project",
      date_start: "2018-01",
      date_end: null,
      label: "Bar Crenn (wine bar)",
      org: "Bar Crenn",
      domain: null,
      metric: "1 ★ Michelin",
      skills: ["restaurant operations", "French cuisine"],
      pane: "projects",
      anchor: "tl-proj-bar-crenn"
    },
    {
      id: "proj-rebel-chef",
      type: "project",
      date_start: "2020-01",
      date_end: "2020-12",
      label: "Rebel Chef (memoir)",
      org: null,
      domain: null,
      metric: "Published 2020",
      skills: ["media presence"],
      pane: "projects",
      anchor: "tl-proj-rebel-chef"
    },
    {
      id: "rebel-chef-author",
      type: "certification",
      date_start: "2020-01",
      date_end: "2020-01",
      label: "Author — Rebel Chef",
      org: "Memoir",
      domain: null,
      metric: null,
      skills: ["media presence"],
      pane: "certifications",
      anchor: "tl-rebel-chef-author"
    },
    {
      id: "michelin-3-star",
      type: "certification",
      date_start: "2018-01",
      date_end: "2018-01",
      label: "Three Michelin Stars",
      org: "Atelier Crenn",
      domain: null,
      metric: "First US woman",
      skills: ["fine dining"],
      pane: "certifications",
      anchor: "tl-michelin-3-star",
      featured: true
    },
    {
      id: "worlds-best-female-chef",
      type: "certification",
      date_start: "2016-01",
      date_end: "2016-01",
      label: "World's Best Female Chef",
      org: "World's 50 Best Restaurants",
      domain: "theworlds50best.com",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-worlds-best-female-chef"
    },
    {
      id: "self-taught",
      type: "education",
      date_start: "1988-01",
      date_end: null,
      label: "Self-taught — no culinary school",
      org: "Working kitchens",
      domain: null,
      metric: "Trained on the line",
      skills: ["French cuisine"],
      pane: "education",
      anchor: "tl-self-taught"
    }
  ],

  social: [
    { platform: "instagram", pinned: true, url: "https://www.instagram.com/dominiquecrenn/reel/DFOw7vQvZGT/", caption: "Atelier Crenn 2025: new team, menu" },
    { platform: "x",         pinned: true, url: "https://x.com/dominiquecrenn/status/296354415013683203", caption: "Atelier Crenn is looking for a cook" },
    { platform: "instagram", url: "https://www.instagram.com/dominiquecrenn/reel/DEh0UlGu0Xl/", caption: "My love letter to San Francisco" },
    { platform: "instagram", url: "https://www.instagram.com/dominiquecrenn/reel/C3ZSN8COZLr/", caption: "USA Today named us best restaurant" },
    { platform: "x",         url: "https://x.com/dominiquecrenn/status/1790461510273098067", caption: "Love wins, always be kind" },
    { platform: "link",      url: "https://www.ateliercrenn.com/", title: "Atelier Crenn", caption: "Atelier Crenn, three Michelin stars" }
  ],

  traveler: "sailboat"
};
