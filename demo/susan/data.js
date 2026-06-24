/* data.js — SINGLE SOURCE OF TRUTH for this portfolio (Hope schema_version 2).
   ONE global, classic script (file:// law): index.html loads this BEFORE
   portfolio.js, so window.HOPE_DATA exists when the renderers run.

   ILLUSTRATIVE PUBLIC-FIGURE SAMPLE — Susan Kare. Built from PUBLIC career data
   only. Not affiliated with or endorsed by Susan Kare. No private contact info:
   public website + public social handles only (email/phone intentionally omitted).
   NO-HEX RULE: semantic tokens only (category / level / band) — never a color. */

window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Susan Kare",
    headline: "Designer · Iconography & UI",
    og_description: "The designer who gave the graphical user interface its face — original Macintosh icons and the Chicago typeface, creative director at NeXT, and four decades of iconwork for Apple, Microsoft, IBM, Facebook and PayPal.",
    summary_short: "I draw the small pictures people tap a thousand times a day. I designed the original Macintosh icons and the Chicago typeface, then spent four decades giving software its visual language.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 96, band: "high" },
      skills:         { pct: 90, band: "high" },
      education:      { pct: 94, band: "high" },
      certifications: { pct: 92, band: "high" },
      projects:       { pct: 95, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "San Francisco, CA",
    summary: "I'm a graphic designer best known for the original Macintosh interface icons — the happy Mac, the trash can, the watch cursor — and the Chicago typeface. I trained in fine art and counted-thread embroidery, which is where I learned to think on a grid. After Apple I was a creative director at NeXT, then ran my own studio for 25 years drawing icons for Microsoft, IBM, Facebook, PayPal and Oracle. I care most about clarity: an icon should explain itself in a single glance.",
    links: [
      { kind: "website",  label: "Kare Prints", url: "https://kareprints.com", resume: true },
      { kind: "linkedin", label: "LinkedIn",    url: "https://www.linkedin.com/in/susan-kare-92058951", resume: true },
      { kind: "x",        label: "X",           url: "https://x.com/susankare", resume: false }
    ],
    stats: { skills: 19, roles: 5, contributions: 5 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "palette",       value: "1984",    label: "iconography for the first Macintosh" },
      { icon: "keyboard",      value: "⌘",  label: "designed the Command-key symbol" },
      { icon: "font_download", value: "Chicago", label: "typeface for the original Mac" },
      { icon: "widgets",       value: "100s",    label: "icons for Apple, NeXT & Microsoft" }
    ],
    interests: ["iconography", "typography", "pixel art", "type design", "graphic design"]
  },

  experience: [
    {
      id: "niantic",
      role_title: "Design Architect",
      company: "Niantic",
      company_domain: "nianticlabs.com",
      company_initial: "N",
      dates: "2021 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "stadia_controller",
              domain: "AR · Visual Design",
              scope: "company-wide",
              action: "Design graphical elements — icons and visuals — for Niantic's augmented-reality games, including Pokémon GO.",
              impact: "Brought iconographic clarity to one of the most-played mobile games in the world.",
              skills: [
                { name: "iconography", category: "domain" },
                { name: "UI design",   category: "domain" },
                { name: "pixel art",   category: "design" }
              ],
              competencies: ["visual craft"]
            }
          ]
        }
      ]
    },
    {
      id: "pinterest",
      role_title: "Creative Lead",
      company: "Pinterest",
      company_domain: "pinterest.com",
      company_initial: "P",
      dates: "2015 — 2021",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "grid_view",
              domain: "Product Design",
              scope: "team",
              action: "Joined Pinterest's creative team, shaping visual and product design.",
              impact: "Applied decades of interface craft to a modern visual-discovery product.",
              skills: [
                { name: "product design", category: "domain" },
                { name: "visual design",  category: "domain" }
              ],
              competencies: ["design leadership"]
            }
          ]
        }
      ]
    },
    {
      id: "kare-llp",
      role_title: "Founder & Principal",
      company: "Susan Kare LLP",
      company_domain: "kare.com",
      company_initial: "K",
      dates: "1989 — 2015",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "draw",
              domain: "Icon & UI Design",
              scope: "industry",
              metric: { value: "100Ms", direction: "achieved", subject: "desktops" },
              action: "Ran my own design studio for over two decades — created icons for Microsoft (the Windows 3.0 set and the Solitaire card deck), IBM, Facebook, PayPal and Oracle.",
              impact: "The work shipped to hundreds of millions of desktops; many Windows icons lasted unchanged until XP.",
              skills: [
                { name: "iconography",   category: "domain" },
                { name: "UI design",     category: "domain" },
                { name: "brand identity", category: "domain" }
              ],
              competencies: ["studio leadership", "craft"]
            }
          ]
        }
      ]
    },
    {
      id: "next",
      role_title: "Creative Director",
      company: "NeXT, Inc.",
      company_initial: "N",
      dates: "1986 — 1989",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "palette",
              domain: "Creative Direction",
              scope: "company-wide",
              action: "Creative director at NeXT, the company Steve Jobs founded after Apple.",
              impact: "Carried the visual language of personal computing into a new platform.",
              skills: [
                { name: "creative direction", category: "interpersonal" },
                { name: "visual design",      category: "domain" }
              ],
              competencies: ["direction"]
            }
          ]
        }
      ]
    },
    {
      id: "apple",
      role_title: "Macintosh Artist & Designer",
      company: "Apple",
      company_domain: "apple.com",
      company_initial: "A",
      dates: "1983 — 1986",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "computer",
              domain: "Interface Design",
              scope: "company-wide",
              metric: { value: "1984", direction: "achieved", subject: "first Mac" },
              action: "Designed the original Macintosh interface icons — the happy Mac, the trash can, the save disk — and the Chicago typeface, drawing on my training in counted-thread embroidery for the grid.",
              impact: "Defined the visual language of the graphical user interface; my icons shipped on every Mac.",
              skills: [
                { name: "iconography", category: "domain" },
                { name: "typography", category: "domain" },
                { name: "pixel art",  category: "design" }
              ],
              competencies: ["foundational design"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "solitaire-deck",
      name: "Windows Solitaire Deck",
      tagline: "Microsoft · Designer",
      dates: "1990",
      is_active: false,
      initial: "S",
      description: "Designed the card deck and icons for Microsoft's Windows 3.0 — including the Solitaire cards seen by hundreds of millions.",
      impact: "One of the most-seen pieces of interface art in history.",
      skills: [
        { name: "iconography", category: "domain" },
        { name: "UI design",   category: "domain" }
      ]
    },
    {
      id: "chicago-typeface",
      name: "Chicago Typeface",
      tagline: "Apple · Type designer",
      dates: "1984",
      is_active: false,
      initial: "C",
      description: "Designed Chicago, the bold bitmap typeface used across the early Mac interface (and later the first iPods).",
      impact: "The system font of the original Macintosh.",
      skills: [
        { name: "typography", category: "domain" }
      ]
    },
    {
      id: "mac-icons",
      name: "The Macintosh Icons",
      tagline: "Apple · Designer",
      dates: "1983 — 1984",
      is_active: false,
      domain: "apple.com",
      initial: "A",
      best_metric: "1984",
      description: "Designed the original Mac icon set — the happy Mac, the trash can, the watch cursor — that taught the world the desktop metaphor.",
      impact: "Among the most recognizable icons ever made; now in the collection of MoMA.",
      skills: [
        { name: "iconography", category: "domain" },
        { name: "pixel art",   category: "design" }
      ]
    }
  ],

  skills: {
    order: ["Domain", "Tools", "Creative", "Methods", "Interpersonal"],
    categories: {
      "Domain": {
        category: "domain",
        items: [
          { name: "iconography",        level: 4, years: 42 },
          { name: "UI design",          level: 4, years: 42 },
          { name: "typography",         level: 4, years: 40 },
          { name: "interaction design", level: 3, years: 35 },
          { name: "brand identity",     level: 3, years: 35 },
          { name: "graphic design",     level: 4, years: 42 },
          { name: "interface design",   level: 4, years: 42 }
        ]
      },
      "Tools": {
        category: "tools",
        items: [
          { name: "bitmap / pixel editing", level: 4, years: 42 },
          { name: "Photoshop",              level: 3, years: 30 },
          { name: "Illustrator",            level: 3, years: 30 },
          { name: "grid systems",           level: 4, years: 42 }
        ]
      },
      "Creative": {
        category: "design",
        items: [
          { name: "visual metaphor", level: 4, years: 42 },
          { name: "simplicity",      level: 4, years: 42 },
          { name: "pixel art",       level: 4, years: 42 },
          { name: "craft",           level: 4, years: 42 }
        ]
      },
      "Methods": {
        category: "methods",
        items: [
          { name: "design systems", level: 3, years: 35 },
          { name: "design review",  level: 3, years: 35 }
        ]
      },
      "Interpersonal": {
        category: "interpersonal",
        items: [
          { name: "creative direction", level: 4, years: 37 },
          { name: "collaboration",      level: 3, years: 40 }
        ]
      }
    }
  },

  education: [
    {
      id: "phd-nyu",
      degree_line: "PhD, Fine Art",
      institution: "New York University",
      institution_domain: "nyu.edu",
      institution_initial: "N",
      dates: "Graduated 1979"
    },
    {
      id: "ba-mtholyoke",
      degree_line: "BA, Art History",
      institution: "Mount Holyoke College",
      institution_domain: "mtholyoke.edu",
      institution_initial: "M",
      dates: "1975"
    }
  ],

  certifications: [
    {
      id: "cooper-hewitt",
      name: "Lifetime Achievement Award",
      issuer: "Cooper Hewitt, Smithsonian Design Museum",
      issuer_domain: "cooperhewitt.org",
      issuer_initial: "C",
      date: "2018"
    },
    {
      id: "aiga-medal",
      name: "AIGA Medal",
      issuer: "AIGA — for design excellence",
      issuer_domain: "aiga.org",
      issuer_initial: "A",
      date: null
    }
  ],

  resume: {
    contact_line_parts: {
      location: "San Francisco, CA",
      links: [
        { label: "Kare Prints", url: "https://kareprints.com" },
        { label: "LinkedIn",    url: "https://www.linkedin.com/in/susan-kare-92058951" }
      ]
    },
    summary: "Graphic designer and iconographer with four decades shaping the visual language of software. Designed the original Macintosh icons and the Chicago typeface, served as creative director at NeXT, and ran an independent studio drawing icons for Microsoft, IBM, Facebook, PayPal and Oracle.",
    experience: [
      {
        role_title: "Design Architect",
        company: "Niantic",
        dates: "2021 — Present",
        bullets: [
          { text: "Design icons and graphical elements for Niantic's augmented-reality games, including Pokémon GO.", tag: "AR · iconography" }
        ]
      },
      {
        role_title: "Creative Lead",
        company: "Pinterest",
        dates: "2015 — 2021",
        bullets: [
          { text: "Shaped visual and product design as part of Pinterest's creative team, applying decades of interface craft to a modern visual-discovery product.", tag: "product design" }
        ]
      },
      {
        role_title: "Founder & Principal",
        company: "Susan Kare LLP",
        dates: "1989 — 2015",
        bullets: [
          { text: "Ran an independent design studio for over two decades, creating icons for Microsoft (Windows 3.0 set and Solitaire deck), IBM, Facebook, PayPal and Oracle.", tag: "100Ms of desktops" },
          { text: "Delivered icon systems that shipped to hundreds of millions of users; many Windows icons lasted unchanged until XP.", tag: "industry-wide" }
        ]
      },
      {
        role_title: "Creative Director",
        company: "NeXT, Inc.",
        dates: "1986 — 1989",
        bullets: [
          { text: "Led creative direction at NeXT, carrying the visual language of personal computing into a new platform.", tag: "creative direction" }
        ]
      },
      {
        role_title: "Macintosh Artist & Designer",
        company: "Apple",
        dates: "1983 — 1986",
        bullets: [
          { text: "Designed the original Macintosh interface icons and the Chicago typeface, defining the visual language of the graphical user interface.", tag: "1984 · first Mac" }
        ]
      }
    ],
    education: [
      {
        degree_line: "PhD, Fine Art",
        institution: "New York University",
        dates: "Graduated 1979"
      },
      {
        degree_line: "BA, Art History",
        institution: "Mount Holyoke College",
        dates: "1975"
      }
    ],
    skills_line: "iconography, UI design, typography, pixel art, graphic design, interface design, brand identity, visual metaphor, grid systems, creative direction, bitmap / pixel editing, design systems"
  },

  timeline: [
    {
      id: "niantic",
      type: "experience",
      date_start: "2021-01",
      date_end: null,
      label: "Design Architect @ Niantic",
      org: "Niantic",
      domain: "nianticlabs.com",
      metric: "Pokémon GO",
      skills: ["iconography", "UI design", "pixel art"],
      pane: "experience",
      anchor: "tl-niantic",
      featured: true
    },
    {
      id: "pinterest",
      type: "experience",
      date_start: "2015-01",
      date_end: "2021-01",
      label: "Creative Lead @ Pinterest",
      org: "Pinterest",
      domain: "pinterest.com",
      metric: null,
      skills: ["product design", "visual design"],
      pane: "experience",
      anchor: "tl-pinterest"
    },
    {
      id: "kare-llp",
      type: "experience",
      date_start: "1989-01",
      date_end: "2015-01",
      label: "Founder & Principal @ Susan Kare LLP",
      org: "Susan Kare LLP",
      domain: "kare.com",
      metric: "100Ms of desktops",
      skills: ["iconography", "UI design", "brand identity"],
      pane: "experience",
      anchor: "tl-kare-llp",
      featured: true
    },
    {
      id: "next",
      type: "experience",
      date_start: "1986-01",
      date_end: "1989-01",
      label: "Creative Director @ NeXT",
      org: "NeXT, Inc.",
      domain: null,
      metric: null,
      skills: ["creative direction", "visual design"],
      pane: "experience",
      anchor: "tl-next"
    },
    {
      id: "apple",
      type: "experience",
      date_start: "1983-01",
      date_end: "1986-01",
      label: "Macintosh Artist & Designer @ Apple",
      org: "Apple",
      domain: "apple.com",
      metric: "1984 · first Mac",
      skills: ["iconography", "typography", "pixel art"],
      pane: "experience",
      anchor: "tl-apple",
      featured: true
    },
    {
      id: "solitaire-deck",
      type: "project",
      date_start: "1990-01",
      date_end: "1990-01",
      label: "Windows Solitaire Deck",
      org: "Microsoft",
      domain: "microsoft.com",
      metric: "seen by 100Ms",
      skills: ["iconography", "UI design"],
      pane: "projects",
      anchor: "tl-solitaire-deck"
    },
    {
      id: "chicago-typeface",
      type: "project",
      date_start: "1984-01",
      date_end: "1984-01",
      label: "Chicago Typeface",
      org: "Apple",
      domain: "apple.com",
      metric: "original Mac system font",
      skills: ["typography"],
      pane: "projects",
      anchor: "tl-chicago-typeface"
    },
    {
      id: "mac-icons",
      type: "project",
      date_start: "1983-01",
      date_end: "1984-01",
      label: "The Macintosh Icons",
      org: "Apple",
      domain: "apple.com",
      metric: "now in MoMA",
      skills: ["iconography", "pixel art"],
      pane: "projects",
      anchor: "tl-mac-icons"
    },
    {
      id: "cooper-hewitt",
      type: "certification",
      date_start: "2018-01",
      date_end: "2018-01",
      label: "Lifetime Achievement Award",
      org: "Cooper Hewitt, Smithsonian Design Museum",
      domain: "cooperhewitt.org",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-cooper-hewitt"
    },
    {
      id: "aiga-medal",
      type: "certification",
      date_start: "2001-01",
      date_end: "2001-01",
      label: "AIGA Medal",
      org: "AIGA",
      domain: "aiga.org",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-aiga-medal"
    },
    {
      id: "phd-nyu",
      type: "education",
      date_start: "1979-01",
      date_end: "1979-01",
      label: "PhD, Fine Art",
      org: "New York University",
      domain: "nyu.edu",
      metric: null,
      skills: [],
      pane: "education",
      anchor: "tl-phd-nyu"
    },
    {
      id: "ba-mtholyoke",
      type: "education",
      date_start: "1975-01",
      date_end: "1975-01",
      label: "BA, Art History",
      org: "Mount Holyoke College",
      domain: "mtholyoke.edu",
      metric: null,
      skills: [],
      pane: "education",
      anchor: "tl-ba-mtholyoke"
    }
  ],

  traveler: "footprints",

  social: [
    { platform: "x",        url: "https://x.com/susankare/status/1929030806502076443", caption: "A chat about design with Soleio", pinned: true },
    { platform: "linkedin", url: "https://www.linkedin.com/posts/susan-kare-92058951_i-just-fell-in-love-with-susan-kares-new-activity-7299859658117115904-v7nz", caption: "My new icons with Asprey Studio", pinned: true },
    { platform: "x",        url: "https://x.com/susankare/status/1072634292625379328", caption: "Signed Kare Prints Apple icon" },
    { platform: "x",        url: "https://x.com/susankare/status/426765369655558144", caption: "Happy 30th birthday, Macintosh" },
    { platform: "x",        url: "https://x.com/susankare/status/1251571813315821570", caption: "Limited-edition Mac icon prints" },
    { platform: "youtube",  url: "https://www.youtube.com/watch?v=4lx9Wtd2P48", caption: "Notes on Icons and Design" }
  ]
};
