/* data.js — SINGLE SOURCE OF TRUTH for this portfolio (schema_version 2).
   Classic script: ONE global, no type=module / fetch / import (file:// law).
   index.html loads this BEFORE portfolio.js, so window.HOPE_DATA exists when
   the renderers run. The full authoring contract lives in the template
   data.js (assets/templates/portfolio/data.js, §A.0–A.10) — cited, not restated.

   ILLUSTRATIVE SAMPLE — public-figure (Elon Musk). PUBLIC career data only.
   No private contact info: public website/handles only, email/phone omitted.
   Not affiliated with or endorsed by the subject. */
window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Elon Musk",
    headline: "Founder & CEO · SpaceX, Tesla, xAI",
    og_description: "Founder and CEO of SpaceX and Tesla, and founder of xAI, Neuralink, and The Boring Company — building across the internet, payments, aerospace, automotive, and AI, from a $307M first exit to reusable rockets and frontier AI.",
    summary_short: "I build companies across the internet, payments, aerospace, automotive, and AI — from Zip2 and PayPal to reusable rockets, mass-market electric cars, and frontier AI.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 96, band: "high" },
      skills:         { pct: 84, band: "mid"  },
      education:      { pct: 92, band: "high" },
      certifications: { pct: 78, band: "mid"  },
      projects:       { pct: 90, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "Austin, TX",
    summary: "Founder and CEO of SpaceX and Tesla, and founder of xAI, Neuralink, and The Boring Company. From Zip2 and PayPal to reusable rockets, mass-market electric cars, and frontier AI — building across the internet, payments, aerospace, automotive, and AI. Physics & economics at Penn. $307M Zip2 → $1.5B PayPal → SpaceX, Tesla, xAI.",
    links: [
      { kind: "x",       label: "X",       url: "https://x.com/elonmusk",     resume: true },
      { kind: "website", label: "SpaceX",  url: "https://www.spacex.com",     resume: true },
      { kind: "website", label: "Tesla",   url: "https://www.tesla.com",      resume: false }
    ],
    stats: { skills: 26, roles: 5, contributions: 6 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "rocket_launch", value: "1st",   label: "private crew to orbit (SpaceX)" },
      { icon: "electric_car",  value: "#1",    label: "automaker by value (Tesla)" },
      { icon: "public",        value: "7+",    label: "companies founded & led" },
      { icon: "star",          value: "200M+", label: "followers on X" }
    ],
    interests: [
      "space exploration",
      "Mars colonization",
      "sustainable energy",
      "artificial intelligence",
      "physics"
    ]
  },

  experience: [
    {
      id: "spacex",
      role_title: "CEO & Chief Engineer",
      company: "SpaceX",
      company_domain: "spacex.com",
      company_initial: "S",
      dates: "2002 — Present",
      is_current: true,
      contribution_count: 2,
      kpis: { ic: 1, lead: 1, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "satellite_alt",
              domain: "Satellites · Internet",
              scope: "industry",
              action: "Built Starlink, a constellation of thousands of satellites delivering broadband internet from low Earth orbit.",
              impact: "Brought high-speed internet to remote and underserved regions worldwide.",
              skills: [
                { name: "satellites", category: "domain" },
                { name: "systems engineering", category: "domain" }
              ],
              competencies: ["scale"]
            }
          ]
        },
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "rocket_launch",
              domain: "Aerospace · Rockets",
              scope: "industry",
              metric: { value: "1st", direction: "achieved", subject: "private crew to orbit" },
              action: "Founded SpaceX in 2002 and leads it as CEO and chief engineer — the first private company to send humans to orbit and to land and reuse orbital-class rockets.",
              impact: "Drove down the cost of access to space; SpaceX now launches the majority of the world's payload to orbit.",
              skills: [
                { name: "aerospace", category: "domain" },
                { name: "rocket propulsion", category: "domain" },
                { name: "manufacturing", category: "domain" }
              ],
              competencies: ["company building", "first-principles engineering"]
            }
          ]
        }
      ]
    },
    {
      id: "tesla",
      role_title: "CEO & Product Architect",
      company: "Tesla",
      company_domain: "tesla.com",
      company_initial: "T",
      dates: "2004 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "electric_car",
              domain: "Automotive · Energy",
              scope: "industry",
              metric: { value: "most valuable", direction: "achieved", subject: "automaker" },
              action: "Leads Tesla as CEO — electric vehicles, batteries, and solar — turning EVs from niche to mainstream.",
              impact: "Tesla became the world's most valuable automaker and accelerated the global shift to electric vehicles.",
              skills: [
                { name: "electric vehicles", category: "domain" },
                { name: "manufacturing", category: "domain" },
                { name: "energy storage", category: "domain" }
              ],
              competencies: ["company building"]
            }
          ]
        }
      ]
    },
    {
      id: "xai",
      role_title: "Founder & CEO",
      company: "xAI",
      company_domain: "x.ai",
      company_initial: "X",
      dates: "2023 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "smart_toy",
              domain: "Artificial Intelligence",
              scope: "industry",
              action: "Founded xAI in 2023 to build artificial intelligence; its assistant, Grok, is trained in part on real-time data from X.",
              impact: "Entered the frontier-AI race alongside OpenAI and Google.",
              skills: [
                { name: "artificial intelligence", category: "domain" },
                { name: "LLMs", category: "domain" }
              ],
              competencies: ["zero-to-one"]
            }
          ]
        }
      ]
    },
    {
      id: "paypal",
      role_title: "Co-founder",
      company: "X.com → PayPal",
      company_domain: "paypal.com",
      company_initial: "P",
      dates: "1999 — 2002",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "payments",
              domain: "Fintech · Payments",
              scope: "industry",
              metric: { value: "$1.5B", direction: "achieved", subject: "PayPal sale" },
              action: "Co-founded X.com, an online bank that merged with Confinity to become PayPal.",
              impact: "Sold to eBay for $1.5B — one of the first mainstream online-payment platforms.",
              skills: [
                { name: "payments", category: "domain" },
                { name: "software", category: "programming" }
              ],
              competencies: ["zero-to-one"]
            }
          ]
        }
      ]
    },
    {
      id: "zip2",
      role_title: "Founder",
      company: "Zip2",
      company_initial: "Z",
      dates: "1995 — 1999",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "public",
              domain: "Internet · Software",
              scope: "company-wide",
              metric: { value: "$307M", direction: "achieved", subject: "Compaq sale" },
              action: "Founded Zip2, an early web-software and city-guide company, with his brother Kimbal.",
              impact: "Sold to Compaq for $307M — the first exit that seeded everything after.",
              skills: [
                { name: "software", category: "programming" },
                { name: "web", category: "programming" }
              ],
              competencies: ["founder"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "starship",
      name: "Starship",
      tagline: "SpaceX · Chief Engineer",
      dates: "2019 — Present",
      is_active: true,
      domain: "spacex.com",
      initial: "S",
      best_metric: "largest rocket ever",
      description: "Leads development of Starship, a fully reusable super-heavy launch vehicle designed to carry people to the Moon and Mars.",
      impact: "The largest and most powerful rocket ever built; selected for NASA's Artemis crewed lunar landings.",
      skills: [
        { name: "aerospace", category: "domain" },
        { name: "rocket propulsion", category: "domain" }
      ],
      link: { url: "https://www.spacex.com/vehicles/starship/", label: "View on SpaceX" }
    },
    {
      id: "starlink",
      name: "Starlink",
      tagline: "SpaceX",
      dates: "2019 — Present",
      is_active: true,
      domain: "starlink.com",
      initial: "S",
      best_metric: "1000s of satellites",
      description: "Built Starlink, a low-Earth-orbit satellite constellation delivering broadband internet worldwide.",
      impact: "Largest satellite constellation ever deployed; internet access for remote regions and disaster zones.",
      skills: [
        { name: "satellites", category: "domain" },
        { name: "systems engineering", category: "domain" }
      ],
      link: { url: "https://www.starlink.com", label: "View on Starlink" }
    },
    {
      id: "neuralink",
      name: "Neuralink",
      tagline: "Founder",
      dates: "2016 — Present",
      is_active: true,
      initial: "N",
      best_metric: "first human implants",
      description: "Co-founded Neuralink to build implantable brain-computer interfaces.",
      impact: "First human implants restoring digital control to paralyzed patients.",
      skills: [
        { name: "robotics", category: "domain" },
        { name: "systems engineering", category: "domain" }
      ],
      link: { url: "https://neuralink.com", label: "View on Neuralink" }
    },
    {
      id: "boring",
      name: "The Boring Company",
      tagline: "Founder",
      dates: "2016 — Present",
      is_active: true,
      initial: "B",
      description: "Founded The Boring Company to dig tunnels for fast urban transit.",
      impact: "Operating passenger loop tunnels in Las Vegas.",
      skills: [
        { name: "tunneling", category: "domain" }
      ],
      link: { url: "https://www.boringcompany.com", label: "View on The Boring Company" }
    },
    {
      id: "openai",
      name: "OpenAI (co-founder)",
      tagline: "Co-founder",
      dates: "2015 — 2018",
      is_active: false,
      domain: "openai.com",
      initial: "O",
      description: "Co-founded OpenAI in 2015 as a nonprofit AI research lab; departed its board in 2018.",
      impact: "Seeded one of the most influential AI labs in the world.",
      skills: [
        { name: "artificial intelligence", category: "domain" }
      ]
    }
  ],

  skills: {
    order: ["Domain", "Programming", "Methods", "Interpersonal", "Analytical"],
    radar: [
      { axis: "Technical Depth", score: 4, source: "NVCA", inDemand: false },
      { axis: "Zero-to-One Building", score: 4, source: "NVCA", inDemand: false },
      { axis: "Market Foresight", score: 4, source: "NVCA", inDemand: false },
      { axis: "Operational Scaling", score: 3, source: "NVCA", inDemand: false },
      { axis: "Org Building", score: 3, source: "CCL", inDemand: false },
      { axis: "Public Influence", score: 4, source: "CCL", inDemand: false },
      { axis: "Learning Agility", score: 3, source: "CCL", inDemand: false }
    ],
    categories: {
      "Domain": {
        category: "domain",
        items: [
          { name: "aerospace engineering", level: 4, years: 24 },
          { name: "rocket propulsion", level: 4, years: 24 },
          { name: "electric vehicles", level: 4, years: 22 },
          { name: "manufacturing", level: 4, years: 22 },
          { name: "artificial intelligence", level: 3, years: 11 },
          { name: "satellites", level: 4, years: 18 },
          { name: "autonomy / self-driving", level: 3, years: 12 },
          { name: "energy storage", level: 3, years: 18 },
          { name: "robotics", level: 3, years: 10 },
          { name: "tunneling", level: 3, years: 10 },
          { name: "payments", level: 3, years: 27 },
          { name: "systems engineering", level: 4, years: 24 }
        ]
      },
      "Programming": {
        category: "programming",
        items: [
          { name: "software architecture", level: 3, years: 30 },
          { name: "first-principles design", level: 4, years: 30 },
          { name: "simulation", level: 3, years: 20 }
        ]
      },
      "Methods": {
        category: "methods",
        items: [
          { name: "rapid iteration", level: 4, years: 27 },
          { name: "vertical integration", level: 4, years: 22 },
          { name: "design-for-manufacture", level: 4, years: 22 },
          { name: "cost engineering", level: 4, years: 24 }
        ]
      },
      "Interpersonal": {
        category: "interpersonal",
        items: [
          { name: "recruiting", level: 4, years: 27 },
          { name: "team leadership", level: 4, years: 27 },
          { name: "public communication", level: 4, years: 20 },
          { name: "vision-setting", level: 4, years: 27 }
        ]
      },
      "Analytical": {
        category: "analytical",
        items: [
          { name: "physics", level: 4, years: 30 },
          { name: "first-principles reasoning", level: 4, years: 30 },
          { name: "risk analysis", level: 3, years: 24 }
        ]
      }
    }
  },

  education: [
    {
      id: "upenn",
      degree_line: "BS Physics · BS Economics (Wharton)",
      institution: "University of Pennsylvania",
      institution_domain: "upenn.edu",
      institution_initial: "P",
      dates: "1992 — 1997"
    },
    {
      id: "queens",
      degree_line: "Physics & Business (transferred)",
      institution: "Queen's University, Kingston",
      institution_domain: "queensu.ca",
      institution_initial: "Q",
      dates: "1990 — 1992"
    }
  ],

  certifications: [
    {
      id: "x-most-followed",
      name: "Most-followed account on X",
      issuer: "X / Twitter",
      issuer_initial: "X",
      date: null
    },
    {
      id: "time-poy",
      name: "TIME — Person of the Year",
      issuer: "TIME",
      issuer_domain: "time.com",
      issuer_initial: "T",
      date: "2021"
    },
    {
      id: "frs",
      name: "Fellow of the Royal Society (FRS)",
      issuer: "Royal Society",
      issuer_domain: "royalsociety.org",
      issuer_initial: "R",
      date: "2018"
    }
  ],

  resume: {
    contact_line_parts: {
      location: "Austin, TX",
      links: [
        { label: "X",      url: "https://x.com/elonmusk" },
        { label: "SpaceX", url: "https://www.spacex.com" }
      ]
    },
    summary: "Founder and CEO across aerospace, automotive, and AI. Built SpaceX into the first private company to fly humans to orbit and Tesla into the world's most valuable automaker, after early exits with Zip2 ($307M) and PayPal ($1.5B). Founder of xAI, Neuralink, and The Boring Company.",
    experience: [
      {
        role_title: "CEO & Chief Engineer",
        company: "SpaceX",
        dates: "2002 — Present",
        bullets: [
          { text: "Founded SpaceX and lead it as CEO and chief engineer — the first private company to send humans to orbit and to land and reuse orbital-class rockets.", tag: "1st private crew" },
          { text: "Built Starlink, a low-Earth-orbit constellation of thousands of satellites delivering broadband internet to remote and underserved regions worldwide.", tag: "1000s of satellites" }
        ]
      },
      {
        role_title: "CEO & Product Architect",
        company: "Tesla",
        dates: "2004 — Present",
        bullets: [
          { text: "Lead Tesla as CEO across electric vehicles, batteries, and solar, turning EVs from niche to mainstream and accelerating the global shift to electric.", tag: "most valuable automaker" }
        ]
      },
      {
        role_title: "Founder & CEO",
        company: "xAI",
        dates: "2023 — Present",
        bullets: [
          { text: "Founded xAI to build frontier artificial intelligence; its assistant, Grok, is trained in part on real-time data from X.", tag: "Grok" }
        ]
      },
      {
        role_title: "Co-founder",
        company: "X.com → PayPal",
        dates: "1999 — 2002",
        bullets: [
          { text: "Co-founded X.com, an online bank that merged with Confinity to become PayPal, one of the first mainstream online-payment platforms.", tag: "$1.5B to eBay" }
        ]
      },
      {
        role_title: "Founder",
        company: "Zip2",
        dates: "1995 — 1999",
        bullets: [
          { text: "Founded Zip2, an early web-software and city-guide company, with his brother Kimbal.", tag: "$307M to Compaq" }
        ]
      }
    ],
    education: [
      {
        degree_line: "BS Physics · BS Economics (Wharton)",
        institution: "University of Pennsylvania",
        dates: "1992 — 1997"
      },
      {
        degree_line: "Physics & Business (transferred)",
        institution: "Queen's University, Kingston",
        dates: "1990 — 1992"
      }
    ],
    skills_line: "Aerospace Engineering, Rocket Propulsion, Electric Vehicles, Manufacturing, Systems Engineering, Satellites, Artificial Intelligence, First-Principles Design, Rapid Iteration, Vertical Integration, Team Leadership, Physics"
  },

  timeline: [
    { id: "queens", type: "education", date_start: "1990-09", date_end: "1992-05",
      label: "Physics & Business @ Queen's", org: "Queen's University",
      domain: "queensu.ca", metric: "transferred to Penn",
      skills: ["physics"],
      pane: "education", anchor: "tl-queens" },
    { id: "upenn", type: "education", date_start: "1992-09", date_end: "1997-05",
      label: "BS Physics & Economics @ Penn", org: "University of Pennsylvania",
      domain: "upenn.edu", metric: "dual degree",
      skills: ["physics", "economics"],
      pane: "education", anchor: "tl-upenn" },
    { id: "zip2", type: "experience", date_start: "1995-01", date_end: "1999-02",
      label: "Founder @ Zip2", org: "Zip2",
      domain: null, metric: "$307M to Compaq",
      skills: ["software", "web"],
      pane: "experience", anchor: "tl-zip2" },
    { id: "paypal", type: "experience", date_start: "1999-03", date_end: "2002-10",
      label: "Co-founder @ X.com / PayPal", org: "PayPal",
      domain: "paypal.com", metric: "$1.5B to eBay",
      skills: ["payments", "software"],
      pane: "experience", anchor: "tl-paypal" },
    { id: "spacex", featured: true, type: "experience", date_start: "2002-05", date_end: null,
      label: "CEO & Chief Engineer @ SpaceX", org: "SpaceX",
      domain: "spacex.com", metric: "first private crew to orbit",
      skills: ["aerospace", "rocket propulsion", "manufacturing"],
      pane: "experience", anchor: "tl-spacex" },
    { id: "tesla", featured: true, type: "experience", date_start: "2004-02", date_end: null,
      label: "CEO & Product Architect @ Tesla", org: "Tesla",
      domain: "tesla.com", metric: "world's most valuable automaker",
      skills: ["electric vehicles", "manufacturing"],
      pane: "experience", anchor: "tl-tesla" },
    { id: "openai", type: "project", date_start: "2015-12", date_end: "2018-02",
      label: "Co-founder @ OpenAI", org: "OpenAI",
      domain: "openai.com", metric: null,
      skills: ["artificial intelligence"],
      pane: "projects", anchor: "tl-openai" },
    { id: "neuralink", type: "project", date_start: "2016-07", date_end: null,
      label: "Founder @ Neuralink", org: "Neuralink",
      domain: null, metric: "brain-computer interfaces",
      skills: ["robotics", "neurotech"],
      pane: "projects", anchor: "tl-neuralink" },
    { id: "boring", type: "project", date_start: "2016-12", date_end: null,
      label: "Founder @ The Boring Company", org: "The Boring Company",
      domain: null, metric: null,
      skills: ["tunneling"],
      pane: "projects", anchor: "tl-boring" },
    { id: "frs", type: "certification", date_start: "2018-01", date_end: "2018-01",
      label: "Fellow of the Royal Society", org: "Royal Society",
      domain: "royalsociety.org", metric: null,
      skills: [],
      pane: "certifications", anchor: "tl-frs" },
    { id: "starlink", type: "project", date_start: "2019-05", date_end: null,
      label: "Starlink @ SpaceX", org: "SpaceX",
      domain: "starlink.com", metric: "1000s of satellites",
      skills: ["satellites", "systems engineering"],
      pane: "projects", anchor: "tl-starlink" },
    { id: "starship", featured: true, type: "project", date_start: "2019-06", date_end: null,
      label: "Starship @ SpaceX", org: "SpaceX",
      domain: "spacex.com", metric: "largest rocket ever built",
      skills: ["aerospace", "rocket propulsion"],
      pane: "projects", anchor: "tl-starship" },
    { id: "time-poy", type: "certification", date_start: "2021-12", date_end: "2021-12",
      label: "TIME Person of the Year", org: "TIME",
      domain: "time.com", metric: null,
      skills: [],
      pane: "certifications", anchor: "tl-time-poy" },
    { id: "xai", featured: true, type: "experience", date_start: "2023-03", date_end: null,
      label: "Founder @ xAI", org: "xAI",
      domain: "x.ai", metric: "Grok",
      skills: ["artificial intelligence", "LLMs"],
      pane: "experience", anchor: "tl-xai" },
    { id: "x-most-followed", type: "certification", date_start: "2024-01", date_end: "2024-01",
      label: "Most-followed account on X", org: "X / Twitter",
      domain: null, metric: null,
      skills: [],
      pane: "certifications", anchor: "tl-x-most-followed" }
  ],

  social: [
    { platform: "x", pinned: true, url: "https://x.com/elonmusk/status/1585841080431321088", caption: "the bird is freed" },
    { platform: "x", pinned: true, url: "https://x.com/elonmusk/status/2000795931160240227", caption: "Occupy Mars" },
    { platform: "x", url: "https://x.com/elonmusk/status/2030202126282973682", caption: "Starship V3 first flight soon" },
    { platform: "x", url: "https://x.com/elonmusk/status/1946763642231500856", caption: "Making Baby Grok for kids" },
    { platform: "x", url: "https://x.com/elonmusk/status/1586104694421659648", caption: "Comedy is now legal" },
    { platform: "x", url: "https://x.com/elonmusk/status/1649050306943266819", caption: "Starship test launch congrats" },
    { platform: "x", title: "Posts on X", url: "https://x.com/elonmusk", caption: "Posts on X" }
  ],

  traveler: "rocket"
};
