/* data.js — SINGLE SOURCE OF TRUTH for this portfolio (spec §A, schema_version 2).
   ONE global, classic script (file:// law — no module/fetch/import). index.html
   loads this BEFORE portfolio.js so window.HOPE_DATA exists when renderers run.

   PERSONA: Dario Amodei — REAL public figure · PUBLIC career data only ·
   ILLUSTRATIVE sample. Not affiliated with or endorsed by the named person or
   companies. No private contact info: public website/handles only (email/phone
   omitted). Career content transcoded faithfully from the founder's existing
   curated demo (agenthope-site/demo/index.html · data-persona="dario").

   NO-HEX RULE (canon §10): semantic values ONLY — category/level/band tokens;
   portfolio.js resolves them to var(--token) at render. Zero raw hex here. */

window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Dario Amodei",
    headline: "Co-founder & CEO, Anthropic · AI safety",
    og_description: "Co-founder and CEO of Anthropic, the AI-safety lab behind the Claude models. Formerly VP of Research at OpenAI, where he led GPT-2 and GPT-3 and co-developed the scaling laws and RLHF.",
    summary_short: "I lead Anthropic, the AI-safety lab behind Claude. Formerly led GPT-2 and GPT-3 research at OpenAI and co-developed the scaling laws — from speech research to a frontier AI lab.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 95, band: "high" },
      skills:         { pct: 90, band: "high" },
      education:      { pct: 96, band: "high" },
      certifications: { pct: 82, band: "mid"  },
      projects:       { pct: 93, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "San Francisco, CA",
    summary: "Co-founder & CEO of Anthropic, the AI-safety lab behind the Claude models. Formerly VP of Research at OpenAI, where he led GPT-2 and GPT-3 and co-developed the scaling laws and RLHF. Physics at Stanford, biophysics PhD at Princeton — from speech research to a frontier AI lab.",
    links: [
      { kind: "website",  label: "Website",  url: "https://www.darioamodei.com", resume: true },
      { kind: "x",        label: "X",        url: "https://x.com/DarioAmodei",    resume: false },
      { kind: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/anthropicresearch/", resume: true }
    ],
    stats: { skills: 27, roles: 4, contributions: 5 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "psychology",   value: "Claude", label: "creator of Anthropic's Claude models" },
      { icon: "trending_up",  value: "$60B+",  label: "Anthropic valuation" },
      { icon: "shield",       value: "RSP",    label: "pioneered the Responsible Scaling Policy" },
      { icon: "description",  value: "GPT-3",  label: "co-led the landmark paper at OpenAI" }
    ],
    interests: ["AI safety", "interpretability", "scaling laws", "computational neuroscience", "physics"]
  },

  experience: [
    {
      id: "anthropic",
      role_title: "Co-founder & CEO",
      company: "Anthropic",
      company_domain: "anthropic.com",
      company_initial: "A",
      dates: "2021 — Present",
      is_current: true,
      contribution_count: 2,
      kpis: { ic: 1, lead: 1, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "policy",
              domain: "Policy · Responsible Scaling",
              scope: "industry",
              action: "Authored the Responsible Scaling Policy and made interpretability and alignment first-class research priorities.",
              impact: "The RSP became a template other frontier labs adopted for their own safety commitments.",
              skills: [
                { name: "AI policy", category: "methods" },
                { name: "interpretability", category: "domain" }
              ],
              competencies: ["safety frameworks"]
            }
          ]
        },
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "groups",
              domain: "Frontier AI · Safety",
              scope: "industry",
              metric: { value: "Claude", direction: "achieved", subject: "model family" },
              action: "Founded Anthropic in 2021 to build reliable, interpretable, and steerable AI — and grew it into a frontier lab shipping the Claude family of models.",
              impact: "Claude became one of the most widely used AI assistants; Anthropic now sits among the handful of frontier AI labs.",
              skills: [
                { name: "AI safety", category: "domain" },
                { name: "research leadership", category: "interpersonal" },
                { name: "Constitutional AI", category: "domain" }
              ],
              competencies: ["frontier research", "org building"]
            }
          ]
        }
      ]
    },
    {
      id: "openai",
      role_title: "VP of Research",
      company: "OpenAI",
      company_domain: "openai.com",
      company_initial: "O",
      dates: "2016 — 2020",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "model_training",
              domain: "Large Language Models",
              scope: "industry",
              metric: { value: "175B", direction: "up", subject: "GPT-3 params" },
              action: "Led the research behind GPT-2 and GPT-3 and co-developed the scaling laws that defined modern LLM training.",
              impact: "GPT-3 set the template for today's large language models.",
              skills: [
                { name: "deep learning", category: "domain" },
                { name: "scaling laws", category: "domain" },
                { name: "RLHF", category: "domain" }
              ],
              competencies: ["frontier research"]
            }
          ]
        }
      ]
    },
    {
      id: "google-brain",
      role_title: "Senior Research Scientist",
      company: "Google Brain",
      company_domain: "research.google",
      company_initial: "G",
      dates: "2015 — 2016",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "shield",
              domain: "AI Safety Research",
              scope: "industry",
              action: "Co-authored “Concrete Problems in AI Safety,” framing a research agenda for safe machine-learning systems.",
              impact: "Became one of the most-cited AI-safety papers of the era.",
              skills: [
                { name: "AI safety", category: "domain" },
                { name: "research", category: "analytical" }
              ],
              competencies: ["agenda-setting"]
            }
          ]
        }
      ]
    },
    {
      id: "baidu",
      role_title: "Research Scientist",
      company: "Baidu — Silicon Valley AI Lab",
      company_domain: "baidu.com",
      company_initial: "B",
      dates: "2014 — 2015",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "graphic_eq",
              domain: "Speech Recognition",
              scope: "company-wide",
              action: "Worked under Andrew Ng on Deep Speech, applying end-to-end deep learning to large-scale speech recognition.",
              impact: "Deep Speech showed deep learning could beat traditional, hand-built speech pipelines.",
              skills: [
                { name: "speech recognition", category: "domain" },
                { name: "deep learning", category: "domain" }
              ],
              competencies: ["applied ML"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "claude",
      name: "Claude",
      tagline: "Anthropic · Co-founder & CEO",
      dates: "2023 — Present",
      is_active: true,
      domain: "anthropic.com",
      initial: "A",
      best_metric: "Live",
      description: "Led the lab building Claude — a family of frontier AI assistants designed to be helpful, honest, and safe.",
      impact: "Claude 3 and 4 model families adopted across consumer and enterprise; Constitutional AI used to align model behavior at scale.",
      skills: [
        { name: "large language models", category: "domain" },
        { name: "AI safety", category: "domain" }
      ],
      link: { url: "https://www.anthropic.com/claude", label: "Visit" }
    },
    {
      id: "constitutional-ai",
      name: "Constitutional AI",
      tagline: "Anthropic · Research",
      dates: "2022 — Present",
      is_active: true,
      domain: "anthropic.com",
      initial: "A",
      best_metric: "industry method",
      description: "Co-developed Constitutional AI — training models to follow a written set of principles instead of relying only on human feedback.",
      impact: "Reduced reliance on human red-teaming for harmful outputs; widely cited as an alignment technique.",
      skills: [
        { name: "Constitutional AI", category: "domain" },
        { name: "alignment", category: "domain" }
      ],
      link: { url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback", label: "Read the paper" }
    },
    {
      id: "rsp",
      name: "Responsible Scaling Policy",
      tagline: "Anthropic · Policy",
      dates: "2023",
      is_active: false,
      initial: "R",
      best_metric: "adopted as template",
      description: "Authored the Responsible Scaling Policy — capability thresholds that gate model deployment on safety evidence.",
      impact: "Adopted as a template by other frontier AI labs.",
      skills: [
        { name: "AI policy", category: "methods" },
        { name: "AI safety", category: "domain" }
      ],
      link: { url: "https://www.anthropic.com/news/anthropics-responsible-scaling-policy", label: "Read the policy" }
    }
  ],

  skills: {
    order: ["AI & Safety", "Programming", "Research", "Analytical", "Leadership"],
    radar: [
      { axis: "Machine Learning", score: 4, source: "SFIA 9", inDemand: true },
      { axis: "AI Safety & Ethics", score: 4, source: "SFIA 9", inDemand: true },
      { axis: "Formal Research", score: 4, source: "SFIA 9", inDemand: false },
      { axis: "Tech Foresight", score: 3, source: "SFIA 9", inDemand: false },
      { axis: "Strategic Planning", score: 3, source: "SFIA 9", inDemand: false },
      { axis: "Org Building", score: 3, source: "SFIA 9", inDemand: false }
    ],
    categories: {
      "AI & Safety": {
        category: "domain",
        items: [
          { name: "AI safety", level: 4, years: 10 },
          { name: "large language models", level: 4, years: 9 },
          { name: "deep learning", level: 4, years: 11 },
          { name: "scaling laws", level: 4, years: 8 },
          { name: "RLHF", level: 4, years: 8 },
          { name: "interpretability", level: 3, years: 7 },
          { name: "alignment", level: 3, years: 7 },
          { name: "Constitutional AI", level: 3, years: 4 },
          { name: "reinforcement learning", level: 3, years: 9 },
          { name: "speech recognition", level: 3, years: 11 }
        ]
      },
      "Programming": {
        category: "programming",
        items: [
          { name: "Python", level: 4, years: 14 },
          { name: "PyTorch", level: 4, years: 8 },
          { name: "TensorFlow", level: 3, years: 9 },
          { name: "NumPy", level: 4, years: 12 },
          { name: "CUDA", level: 2, years: 7 }
        ]
      },
      "Research": {
        category: "methods",
        items: [
          { name: "research direction", level: 4, years: 9 },
          { name: "experimental design", level: 4, years: 12 },
          { name: "AI policy", level: 3, years: 5 },
          { name: "scaling experiments", level: 4, years: 8 },
          { name: "safety evaluation", level: 3, years: 6 }
        ]
      },
      "Analytical": {
        category: "analytical",
        items: [
          { name: "statistical analysis", level: 4, years: 13 },
          { name: "computational neuroscience", level: 3, years: 12 },
          { name: "model analysis", level: 4, years: 8 }
        ]
      },
      "Leadership": {
        category: "interpersonal",
        items: [
          { name: "research leadership", level: 4, years: 9 },
          { name: "organization building", level: 3, years: 5 },
          { name: "technical writing", level: 4, years: 12 },
          { name: "public communication", level: 3, years: 5 }
        ]
      }
    }
  },

  education: [
    {
      id: "phd-princeton",
      degree_line: "PhD, Biophysics",
      institution: "Princeton University",
      institution_domain: "princeton.edu",
      institution_initial: "P",
      dates: "2006 — 2011"
    },
    {
      id: "bs-stanford",
      degree_line: "BS, Physics",
      institution: "Stanford University",
      institution_domain: "stanford.edu",
      institution_initial: "S",
      dates: "Graduated 2006"
    }
  ],

  certifications: [
    {
      id: "loving-grace",
      name: "Author — “Machines of Loving Grace”",
      issuer: "Essay on AI's potential upside",
      issuer_initial: "M",
      date: "2024"
    },
    {
      id: "time100",
      name: "TIME100 — Most Influential People",
      issuer: "TIME",
      issuer_domain: "time.com",
      issuer_initial: "T",
      date: "2023 & 2024"
    },
    {
      id: "rlhf",
      name: "Co-inventor — RLHF",
      issuer: "Reinforcement Learning from Human Feedback",
      issuer_initial: "R",
      date: null
    }
  ],

  resume: {
    contact_line_parts: {
      location: "San Francisco, CA",
      links: [
        { label: "Website",  url: "https://www.darioamodei.com" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/anthropicresearch/" }
      ]
    },
    summary: "AI researcher and executive with over a decade building and leading deep-learning research. Co-founder & CEO of Anthropic, the AI-safety lab behind Claude. Formerly VP of Research at OpenAI, where he led GPT-2 and GPT-3 and co-developed the scaling laws and RLHF.",
    experience: [
      {
        role_title: "Co-founder & CEO",
        company: "Anthropic",
        dates: "2021 — Present",
        bullets: [
          { text: "Founded Anthropic to build reliable, interpretable, and steerable AI, growing it into a frontier lab shipping the Claude family of models.", tag: "Claude" },
          { text: "Authored the Responsible Scaling Policy, making interpretability and alignment first-class research priorities.", tag: "RSP" }
        ]
      },
      {
        role_title: "VP of Research",
        company: "OpenAI",
        dates: "2016 — 2020",
        bullets: [
          { text: "Led the research behind GPT-2 and GPT-3 and co-developed the scaling laws that defined modern LLM training.", tag: "175B params" }
        ]
      },
      {
        role_title: "Senior Research Scientist",
        company: "Google Brain",
        dates: "2015 — 2016",
        bullets: [
          { text: "Co-authored “Concrete Problems in AI Safety,” framing a research agenda for safe machine-learning systems.", tag: "AI safety" }
        ]
      },
      {
        role_title: "Research Scientist",
        company: "Baidu — Silicon Valley AI Lab",
        dates: "2014 — 2015",
        bullets: [
          { text: "Worked under Andrew Ng on Deep Speech, applying end-to-end deep learning to large-scale speech recognition.", tag: "Deep Speech" }
        ]
      }
    ],
    education: [
      {
        degree_line: "PhD, Biophysics",
        institution: "Princeton University",
        dates: "2006 — 2011"
      },
      {
        degree_line: "BS, Physics",
        institution: "Stanford University",
        dates: "Graduated 2006"
      }
    ],
    skills_line: "AI Safety, Large Language Models, Deep Learning, Scaling Laws, RLHF, Interpretability, Alignment, Constitutional AI, Python, PyTorch, Research Direction, AI Policy, Technical Writing"
  },

  timeline: [
    {
      id: "anthropic",
      type: "experience",
      date_start: "2021-01",
      date_end: null,
      label: "Co-founder & CEO @ Anthropic",
      org: "Anthropic",
      domain: "anthropic.com",
      metric: "Claude",
      skills: ["AI safety", "research leadership", "Constitutional AI"],
      pane: "experience",
      anchor: "tl-anthropic",
      featured: true
    },
    {
      id: "openai",
      type: "experience",
      date_start: "2016-01",
      date_end: "2020-12",
      label: "VP of Research @ OpenAI",
      org: "OpenAI",
      domain: "openai.com",
      metric: "GPT-3",
      skills: ["deep learning", "scaling laws", "RLHF"],
      pane: "experience",
      anchor: "tl-openai",
      featured: true
    },
    {
      id: "google-brain",
      type: "experience",
      date_start: "2015-01",
      date_end: "2016-01",
      label: "Sr. Research Scientist @ Google Brain",
      org: "Google Brain",
      domain: "research.google",
      metric: "AI safety",
      skills: ["AI safety", "research"],
      pane: "experience",
      anchor: "tl-google-brain"
    },
    {
      id: "baidu",
      type: "experience",
      date_start: "2014-01",
      date_end: "2015-01",
      label: "Research Scientist @ Baidu SVAIL",
      org: "Baidu",
      domain: "baidu.com",
      metric: "Deep Speech",
      skills: ["speech recognition", "deep learning"],
      pane: "experience",
      anchor: "tl-baidu"
    },
    {
      id: "claude",
      type: "project",
      date_start: "2023-01",
      date_end: null,
      label: "Claude (Anthropic)",
      org: "Anthropic",
      domain: "anthropic.com",
      metric: "Live",
      skills: ["large language models", "AI safety"],
      pane: "projects",
      anchor: "tl-claude",
      featured: true
    },
    {
      id: "constitutional-ai",
      type: "project",
      date_start: "2022-01",
      date_end: null,
      label: "Constitutional AI (research)",
      org: "Anthropic",
      domain: "anthropic.com",
      metric: "industry method",
      skills: ["Constitutional AI", "alignment"],
      pane: "projects",
      anchor: "tl-constitutional-ai"
    },
    {
      id: "rsp",
      type: "project",
      date_start: "2023-09",
      date_end: "2023-09",
      label: "Responsible Scaling Policy",
      org: "Anthropic",
      domain: "anthropic.com",
      metric: "adopted as template",
      skills: ["AI policy", "AI safety"],
      pane: "projects",
      anchor: "tl-rsp"
    },
    {
      id: "phd-princeton",
      type: "education",
      date_start: "2006-09",
      date_end: "2011-06",
      label: "PhD, Biophysics",
      org: "Princeton University",
      domain: "princeton.edu",
      metric: null,
      skills: ["computational neuroscience", "biophysics"],
      pane: "education",
      anchor: "tl-phd-princeton"
    },
    {
      id: "bs-stanford",
      type: "education",
      date_start: "2002-09",
      date_end: "2006-06",
      label: "BS, Physics",
      org: "Stanford University",
      domain: "stanford.edu",
      metric: null,
      skills: [],
      pane: "education",
      anchor: "tl-bs-stanford"
    },
    {
      id: "loving-grace",
      type: "certification",
      date_start: "2024-10",
      date_end: "2024-10",
      label: "Author — “Machines of Loving Grace”",
      org: null,
      domain: null,
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-loving-grace"
    },
    {
      id: "time100",
      type: "certification",
      date_start: "2024-09",
      date_end: "2024-09",
      label: "TIME100 — Most Influential",
      org: "TIME",
      domain: "time.com",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-time100"
    },
    {
      id: "rlhf",
      type: "certification",
      date_start: "2017-01",
      date_end: "2017-01",
      label: "Co-inventor — RLHF",
      org: null,
      domain: null,
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-rlhf"
    }
  ],

  traveler: "footprints",

  social: [
    { platform: "x", pinned: true, url: "https://x.com/DarioAmodei/status/1844830404064288934", caption: "My essay: Machines of Loving Grace" },
    { platform: "x", pinned: true, url: "https://x.com/DarioAmodei/status/1915515160607023391", caption: "Why we must understand AI" },
    { platform: "x", url: "https://x.com/DarioAmodei/status/2064781775247950326", caption: "New essay on AI policy" },
    { platform: "x", url: "https://x.com/DarioAmodei/status/1977010693460443151", caption: "Met PM Modi on AI in India" },
    { platform: "x", url: "https://x.com/DarioAmodei/status/2015833046327402527", caption: "The Adolescence of Technology" },
    { platform: "link", url: "https://www.darioamodei.com/essay/machines-of-loving-grace", caption: "Essay: how AI could help us" },
    { platform: "x", url: "https://x.com/DarioAmodei", caption: "Posts on X" },
    { platform: "link", url: "https://www.darioamodei.com", caption: "Website" }
  ]
};
