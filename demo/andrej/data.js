/* data.js — SINGLE SOURCE OF TRUTH for this portfolio (spec §A, schema_version 2).
   ONE global, classic script (file:// law — no module/fetch/import). index.html
   loads this BEFORE portfolio.js so window.HOPE_DATA exists when renderers run.

   PERSONA: Andrej Karpathy — REAL public figure · PUBLIC career data only ·
   ILLUSTRATIVE sample. Not affiliated with or endorsed by the named person or
   companies. No private contact info: public website/handles only (email/phone
   omitted). Career content transcoded faithfully from the founder's existing
   curated demo (agenthope-site/demo/index.html · data-persona="andrej").

   NO-HEX RULE (canon §10): semantic values ONLY — category/level/band tokens;
   portfolio.js resolves them to var(--token) at render. Zero raw hex here. */

window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Andrej Karpathy",
    headline: "AI Engineer & Educator · Anthropic (ex-Tesla, OpenAI)",
    og_description: "One of the most recognized AI engineers and educators — founding member of OpenAI, former Senior Director of AI at Tesla (Autopilot vision), now on Anthropic's pre-training team. From nanoGPT to teaching the world to build neural nets.",
    summary_short: "I build and teach the AI everyone is learning from. Founding member of OpenAI, led the Autopilot vision team at Tesla, and taught hundreds of thousands through Zero-to-Hero and CS231n.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 96, band: "high" },
      skills:         { pct: 92, band: "high" },
      education:      { pct: 95, band: "high" },
      certifications: { pct: 84, band: "mid"  },
      projects:       { pct: 94, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "San Francisco, CA",
    summary: "One of the most recognized AI engineers and educators. A founding member of OpenAI and former Senior Director of AI at Tesla, where he led the Autopilot vision team — now on Anthropic's pre-training team. PhD at Stanford under Fei-Fei Li, where he created CS231n. From char-rnn and nanoGPT to teaching the world to build neural nets.",
    links: [
      { kind: "website",  label: "Website",  url: "https://karpathy.ai/", resume: true },
      { kind: "github",   label: "GitHub",   url: "https://github.com/karpathy", resume: true },
      { kind: "x",        label: "X",        url: "https://x.com/karpathy", resume: false },
      { kind: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/andrej-karpathy-9a650716/", resume: true }
    ],
    stats: { skills: 25, roles: 5, contributions: 5 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "directions_car", value: "1M+",     label: "cars running Tesla Autopilot vision" },
      { icon: "smart_display",  value: "millions", label: "learners on Zero-to-Hero" },
      { icon: "star",           value: "40k+",     label: "GitHub stars on nanoGPT" },
      { icon: "school",         value: "800k+",    label: "CS231n lecture views" }
    ],
    interests: ["deep learning", "neural networks", "AI education", "autonomous driving", "open source"]
  },

  experience: [
    {
      id: "anthropic",
      role_title: "Member of Technical Staff · Pre-training",
      company: "Anthropic",
      company_domain: "anthropic.com",
      company_initial: "A",
      dates: "2026 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "model_training",
              domain: "Frontier AI · Model Training",
              scope: "company-wide",
              action: "Joined Anthropic's pre-training team in 2026 — using Claude to accelerate the research that builds the next generation of Claude.",
              impact: "Brought a decade of model-training expertise to a frontier lab.",
              skills: [
                { name: "large language models", category: "domain" },
                { name: "model training", category: "methods" },
                { name: "deep learning", category: "domain" }
              ],
              competencies: ["frontier research"]
            }
          ]
        }
      ]
    },
    {
      id: "eureka",
      role_title: "Founder",
      company: "Eureka Labs",
      company_domain: "eurekalabs.ai",
      company_initial: "E",
      dates: "2024 — 2026",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "school",
              domain: "AI · Education",
              scope: "industry",
              metric: { value: "Zero→Hero", direction: "achieved", subject: "open course" },
              action: "Founded Eureka Labs to build an AI-native school — courses paired with an AI teaching assistant — and created the open “Neural Networks: Zero to Hero” curriculum.",
              impact: "Taught hundreds of thousands to build neural networks and LLMs from scratch.",
              skills: [
                { name: "AI education", category: "domain" },
                { name: "large language models", category: "domain" }
              ],
              competencies: ["teaching", "building"]
            }
          ]
        }
      ]
    },
    {
      id: "openai-rs",
      role_title: "Research Scientist",
      company: "OpenAI",
      company_domain: "openai.com",
      company_initial: "O",
      dates: "2023 — 2024",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "smart_toy",
              domain: "Large Language Models",
              scope: "company-wide",
              action: "Rejoined OpenAI to work on GPT-class large language models.",
              impact: "A second tour at the lab he helped found.",
              skills: [
                { name: "large language models", category: "domain" },
                { name: "deep learning", category: "domain" }
              ],
              competencies: ["research"]
            }
          ]
        }
      ]
    },
    {
      id: "tesla",
      role_title: "Senior Director of AI",
      company: "Tesla",
      company_domain: "tesla.com",
      company_initial: "T",
      dates: "2017 — 2022",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "directions_car",
              domain: "Autonomous Driving · Vision",
              scope: "industry",
              metric: { value: "1M+", direction: "up", subject: "cars" },
              action: "Hired by Elon Musk to lead Tesla's computer-vision team — built the neural networks and data engine behind Autopilot / Full Self-Driving, and popularized the idea of “Software 2.0.”",
              impact: "Shipped vision-based autonomy to over a million cars.",
              skills: [
                { name: "computer vision", category: "domain" },
                { name: "autonomous driving", category: "domain" },
                { name: "neural networks", category: "domain" }
              ],
              competencies: ["applied AI at scale"]
            }
          ]
        }
      ]
    },
    {
      id: "openai-founding",
      role_title: "Founding Member & Research Scientist",
      company: "OpenAI",
      company_domain: "openai.com",
      company_initial: "O",
      dates: "2015 — 2017",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "groups",
              domain: "Deep Learning · RL",
              scope: "industry",
              action: "A founding member of OpenAI — alongside Elon Musk, Greg Brockman, Ilya Sutskever, and Sam Altman — working on deep reinforcement learning and generative models.",
              impact: "Helped launch one of the most influential AI labs in the world.",
              skills: [
                { name: "reinforcement learning", category: "domain" },
                { name: "generative models", category: "domain" }
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
      id: "nanogpt",
      name: "nanoGPT",
      tagline: "GitHub · Author",
      dates: "2022 — Present",
      is_active: true,
      domain: "github.com",
      initial: "G",
      best_metric: "40k+ stars",
      description: "A minimal, readable codebase for training and fine-tuning medium-sized GPTs — the reference many learn LLMs from.",
      impact: "One of the most-starred LLM repos on GitHub; spawned countless forks and courses.",
      skills: [
        { name: "large language models", category: "domain" },
        { name: "model training", category: "methods" }
      ],
      link: { url: "https://github.com/karpathy/nanoGPT", label: "View on GitHub" }
    },
    {
      id: "zero-to-hero",
      name: "Neural Networks: Zero to Hero",
      tagline: "YouTube · Educator",
      dates: "2022 — Present",
      is_active: true,
      domain: "youtube.com",
      initial: "Y",
      best_metric: "millions of views",
      description: "A free video course building neural nets and LLMs from scratch — micrograd → makemore → GPT.",
      impact: "Made deep learning approachable to a global audience.",
      skills: [
        { name: "AI education", category: "domain" },
        { name: "neural networks", category: "domain" }
      ],
      link: { url: "https://www.youtube.com/watch?v=VMj-3S1tku0", label: "Watch on YouTube" }
    },
    {
      id: "micrograd",
      name: "micrograd",
      tagline: "GitHub · Author",
      dates: "2020",
      is_active: false,
      domain: "github.com",
      initial: "G",
      description: "A tiny scalar-valued autograd engine and neural-net library — built to teach how backpropagation really works.",
      impact: "A favorite teaching tool for understanding gradients.",
      skills: [
        { name: "neural networks", category: "domain" },
        { name: "teaching", category: "interpersonal" }
      ],
      link: { url: "https://github.com/karpathy/micrograd", label: "View on GitHub" }
    },
    {
      id: "cs231n",
      name: "CS231n",
      tagline: "Stanford · Instructor",
      dates: "2015 — 2016",
      is_active: false,
      domain: "stanford.edu",
      initial: "S",
      best_metric: "800k+ lecture views",
      description: "Co-designed with Fei-Fei Li and taught Stanford's first deep-learning course — Convolutional Neural Networks for Visual Recognition.",
      impact: "A foundational course for a generation of AI practitioners.",
      skills: [
        { name: "computer vision", category: "domain" },
        { name: "teaching", category: "interpersonal" }
      ],
      link: { url: "https://cs231n.github.io/", label: "Visit course site" }
    }
  ],

  skills: {
    order: ["Domain", "Programming", "Methods", "Interpersonal", "Analytical"],
    categories: {
      "Domain": {
        category: "domain",
        items: [
          { name: "deep learning", level: 4, years: 15 },
          { name: "neural networks", level: 4, years: 15 },
          { name: "computer vision", level: 4, years: 14 },
          { name: "large language models", level: 4, years: 9 },
          { name: "autonomous driving", level: 4, years: 8 },
          { name: "reinforcement learning", level: 3, years: 11 },
          { name: "generative models", level: 4, years: 11 },
          { name: "AI education", level: 4, years: 4 },
          { name: "natural language processing", level: 3, years: 12 }
        ]
      },
      "Programming": {
        category: "programming",
        items: [
          { name: "Python", level: 4, years: 15 },
          { name: "PyTorch", level: 4, years: 9 },
          { name: "C / CUDA", level: 3, years: 10 },
          { name: "JavaScript", level: 3, years: 12 },
          { name: "NumPy", level: 4, years: 14 }
        ]
      },
      "Methods": {
        category: "methods",
        items: [
          { name: "model training", level: 4, years: 12 },
          { name: "research", level: 4, years: 14 },
          { name: "data engineering", level: 4, years: 8 },
          { name: "curriculum design", level: 4, years: 10 },
          { name: "evals", level: 3, years: 8 }
        ]
      },
      "Interpersonal": {
        category: "interpersonal",
        items: [
          { name: "technical writing", level: 4, years: 14 },
          { name: "teaching", level: 4, years: 11 },
          { name: "open-source community", level: 4, years: 13 },
          { name: "science communication", level: 4, years: 10 }
        ]
      },
      "Analytical": {
        category: "analytical",
        items: [
          { name: "mathematics", level: 4, years: 16 },
          { name: "experimental design", level: 4, years: 14 }
        ]
      }
    }
  },

  education: [
    {
      id: "phd-stanford",
      degree_line: "PhD, Computer Science",
      institution: "Stanford University · Stanford Vision Lab",
      institution_domain: "stanford.edu",
      institution_initial: "S",
      dates: "2011 — 2015"
    },
    {
      id: "bsc-toronto",
      degree_line: "BSc, Computer Science & Physics",
      institution: "University of Toronto (MSc, UBC)",
      institution_domain: "utoronto.ca",
      institution_initial: "T",
      dates: "Graduated 2009"
    }
  ],

  certifications: [
    {
      id: "vibe-coding",
      name: "Coined “vibe coding”",
      issuer: "Popularized the term",
      issuer_initial: "V",
      date: "2025"
    },
    {
      id: "time100",
      name: "TIME100 AI — Most Influential",
      issuer: "TIME",
      issuer_domain: "time.com",
      issuer_initial: "T",
      date: "2024"
    },
    {
      id: "software-2",
      name: "Author — “Software 2.0”",
      issuer: "Influential essay on ML-driven software",
      issuer_initial: "S",
      date: "2017"
    }
  ],

  resume: {
    contact_line_parts: {
      location: "San Francisco, CA",
      links: [
        { label: "Website",  url: "https://karpathy.ai/" },
        { label: "GitHub",   url: "https://github.com/karpathy" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/andrej-karpathy-9a650716/" }
      ]
    },
    summary: "AI engineer and educator with a decade-plus building and teaching deep learning. Founding member of OpenAI, former Senior Director of AI at Tesla leading the Autopilot vision team, now on Anthropic's pre-training team. Author of nanoGPT and micrograd, and instructor for CS231n and Neural Networks: Zero to Hero.",
    experience: [
      {
        role_title: "Member of Technical Staff · Pre-training",
        company: "Anthropic",
        dates: "2026 — Present",
        bullets: [
          { text: "Joined Anthropic's pre-training team, bringing a decade of model-training expertise to a frontier lab.", tag: "frontier AI" }
        ]
      },
      {
        role_title: "Founder",
        company: "Eureka Labs",
        dates: "2024 — 2026",
        bullets: [
          { text: "Founded an AI-native school pairing courses with an AI teaching assistant.", tag: "AI-native school" },
          { text: "Created the open Neural Networks: Zero to Hero curriculum, teaching hundreds of thousands to build neural nets from scratch.", tag: "Zero→Hero" }
        ]
      },
      {
        role_title: "Research Scientist",
        company: "OpenAI",
        dates: "2023 — 2024",
        bullets: [
          { text: "Rejoined OpenAI to work on GPT-class large language models.", tag: "GPT" }
        ]
      },
      {
        role_title: "Senior Director of AI",
        company: "Tesla",
        dates: "2017 — 2022",
        bullets: [
          { text: "Led the computer-vision team building the neural networks and data engine behind Autopilot / Full Self-Driving.", tag: "1M+ cars" },
          { text: "Popularized the idea of Software 2.0 — programs learned from data rather than written by hand.", tag: "Software 2.0" }
        ]
      },
      {
        role_title: "Founding Member & Research Scientist",
        company: "OpenAI",
        dates: "2015 — 2017",
        bullets: [
          { text: "A founding member of OpenAI, working on deep reinforcement learning and generative models.", tag: "founding team" }
        ]
      }
    ],
    education: [
      {
        degree_line: "PhD, Computer Science",
        institution: "Stanford University",
        dates: "2011 — 2015"
      },
      {
        degree_line: "BSc, Computer Science & Physics",
        institution: "University of Toronto",
        dates: "Graduated 2009"
      }
    ],
    skills_line: "Deep Learning, Neural Networks, Computer Vision, Large Language Models, Model Training, Python, PyTorch, C / CUDA, NumPy, Research, Curriculum Design, Technical Writing, Mathematics"
  },

  timeline: [
    {
      id: "anthropic",
      type: "experience",
      date_start: "2026-01",
      date_end: null,
      label: "MTS · Pre-training @ Anthropic",
      org: "Anthropic",
      domain: "anthropic.com",
      metric: "frontier AI",
      skills: ["large language models", "model training", "deep learning"],
      pane: "experience",
      anchor: "tl-anthropic",
      featured: true
    },
    {
      id: "eureka",
      type: "experience",
      date_start: "2024-01",
      date_end: "2026-01",
      label: "Founder @ Eureka Labs",
      org: "Eureka Labs",
      domain: "eurekalabs.ai",
      metric: "Zero→Hero",
      skills: ["AI education", "large language models"],
      pane: "experience",
      anchor: "tl-eureka",
      featured: true
    },
    {
      id: "openai-rs",
      type: "experience",
      date_start: "2023-01",
      date_end: "2024-01",
      label: "Research Scientist @ OpenAI",
      org: "OpenAI",
      domain: "openai.com",
      metric: "GPT",
      skills: ["large language models", "deep learning"],
      pane: "experience",
      anchor: "tl-openai-rs"
    },
    {
      id: "tesla",
      type: "experience",
      date_start: "2017-01",
      date_end: "2022-12",
      label: "Sr. Director of AI @ Tesla",
      org: "Tesla",
      domain: "tesla.com",
      metric: "1M+ cars",
      skills: ["computer vision", "autonomous driving", "neural networks"],
      pane: "experience",
      anchor: "tl-tesla",
      featured: true
    },
    {
      id: "openai-founding",
      type: "experience",
      date_start: "2015-01",
      date_end: "2017-01",
      label: "Founding Member @ OpenAI",
      org: "OpenAI",
      domain: "openai.com",
      metric: "founding team",
      skills: ["reinforcement learning", "generative models"],
      pane: "experience",
      anchor: "tl-openai-founding"
    },
    {
      id: "nanogpt",
      type: "project",
      date_start: "2022-01",
      date_end: null,
      label: "nanoGPT (author)",
      org: "GitHub",
      domain: "github.com",
      metric: "40k+ stars",
      skills: ["large language models", "model training"],
      pane: "projects",
      anchor: "tl-nanogpt",
      featured: true
    },
    {
      id: "zero-to-hero",
      type: "project",
      date_start: "2022-01",
      date_end: null,
      label: "Zero to Hero (educator)",
      org: "YouTube",
      domain: "youtube.com",
      metric: "millions of views",
      skills: ["AI education", "neural networks"],
      pane: "projects",
      anchor: "tl-zero-to-hero"
    },
    {
      id: "micrograd",
      type: "project",
      date_start: "2020-01",
      date_end: "2020-12",
      label: "micrograd (author)",
      org: "GitHub",
      domain: "github.com",
      metric: null,
      skills: ["neural networks", "teaching"],
      pane: "projects",
      anchor: "tl-micrograd"
    },
    {
      id: "cs231n",
      type: "project",
      date_start: "2015-01",
      date_end: "2016-06",
      label: "CS231n (instructor)",
      org: "Stanford",
      domain: "stanford.edu",
      metric: "800k+ lecture views",
      skills: ["computer vision", "teaching"],
      pane: "projects",
      anchor: "tl-cs231n"
    },
    {
      id: "phd-stanford",
      type: "education",
      date_start: "2011-09",
      date_end: "2015-06",
      label: "PhD, Computer Science",
      org: "Stanford University",
      domain: "stanford.edu",
      metric: null,
      skills: ["computer vision", "deep learning"],
      pane: "education",
      anchor: "tl-phd-stanford"
    },
    {
      id: "bsc-toronto",
      type: "education",
      date_start: "2005-09",
      date_end: "2009-06",
      label: "BSc, CS & Physics",
      org: "University of Toronto",
      domain: "utoronto.ca",
      metric: null,
      skills: [],
      pane: "education",
      anchor: "tl-bsc-toronto"
    },
    {
      id: "vibe-coding",
      type: "certification",
      date_start: "2025-02",
      date_end: "2025-02",
      label: "Coined “vibe coding”",
      org: null,
      domain: null,
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-vibe-coding"
    },
    {
      id: "time100",
      type: "certification",
      date_start: "2024-09",
      date_end: "2024-09",
      label: "TIME100 AI — Most Influential",
      org: "TIME",
      domain: "time.com",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-time100"
    },
    {
      id: "software-2",
      type: "certification",
      date_start: "2017-11",
      date_end: "2017-11",
      label: "Author — “Software 2.0”",
      org: null,
      domain: null,
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-software-2"
    }
  ],

  traveler: "footprints",

  social: [
    { platform: "x", pinned: true, url: "https://x.com/karpathy/status/1886192184808149383", caption: "Coining \"vibe coding\"" },
    { platform: "x", pinned: true, url: "https://x.com/karpathy/status/1613250487838707712", caption: "Announcing nanoGPT" },
    { platform: "x", url: "https://x.com/karpathy/status/1977755427569111362", caption: "Releasing nanochat repo" },
    { platform: "x", url: "https://x.com/karpathy/status/1937902205765607626", caption: "On context engineering" },
    { platform: "x", url: "https://x.com/karpathy/status/1899876370492383450", caption: "Writing content for LLMs" },
    { platform: "linkedin", url: "https://www.linkedin.com/posts/andrej-karpathy-9a650716_tesla-tsla-autopilot-activity-6891853901331623936-rg9r", caption: "Hiring for Tesla AI team" },
    { platform: "gist", url: "https://github.com/karpathy/nanoGPT", caption: "nanoGPT: train GPTs simply" },
    { platform: "gist", url: "https://github.com/karpathy/nanochat", caption: "nanochat: ChatGPT for $100" },
    { platform: "youtube", url: "https://www.youtube.com/watch?v=LCEmiRjPEtQ", caption: "Software Is Changing (Again)" }
  ]
};
