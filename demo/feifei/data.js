/* data.js — the SINGLE SOURCE OF TRUTH for this portfolio (schema_version 2).
   ONE global, classic script — no type=module, no fetch(), no import (file://
   law). index.html loads this BEFORE portfolio.js, so window.HOPE_DATA exists
   when the renderers run. portfolio.js renders every visible surface from this
   object; index.html ships only a static SEO-stamped shell.

   DEMO PERSONA — Fei-Fei Li. REAL public figure · PUBLIC career data only ·
   illustrative sample. NOT affiliated with or endorsed by Dr. Li. Contact info
   is public-handle-only (website + public LinkedIn/X); no private email/phone.

   NO-HEX RULE: this file carries SEMANTIC values ONLY (category/level/band
   tokens). portfolio.js resolves them to CSS vars at render. Zero raw hex here.
   SEG-COLOR = LEVEL TIER: a skill's level (1..4) drives lit-seg count AND seg
   color tier; category drives ONLY the header ledge color. */
window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Fei-Fei Li",
    headline: "AI Scientist · Co-founder & CEO, World Labs",
    og_description: "The computer scientist behind ImageNet — the dataset that sparked the deep-learning revolution. Stanford professor, co-director of Stanford HAI, and co-founder & CEO of World Labs.",
    summary_short: "I build AI that understands the visual world. I created ImageNet, co-direct Stanford's Human-Centered AI Institute, and now lead World Labs on spatial intelligence.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 96, band: "high" },
      skills:         { pct: 88, band: "mid"  },
      education:      { pct: 98, band: "high" },
      certifications: { pct: 82, band: "mid"  },
      projects:       { pct: 92, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "Stanford, CA",
    links: [
      { kind: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/fei-fei-li-4541247/", resume: true },
      { kind: "x",        label: "X",        url: "https://x.com/drfeifei", resume: false },
      { kind: "website",  label: "World Labs", url: "https://www.worldlabs.ai/", resume: true }
    ],
    summary: "The computer scientist behind ImageNet — the dataset that sparked the deep-learning revolution. Sequoia Professor at Stanford and co-director of its Human-Centered AI Institute, ex-Chief Scientist of AI/ML at Google Cloud, and now co-founder & CEO of World Labs. Physics at Princeton, PhD at Caltech. Often called the \"godmother of AI\".",
    stats: { skills: 20, roles: 5, contributions: 5 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "image",       value: "ImageNet",   label: "the dataset behind modern AI" },
      { icon: "database",    value: "14M",        label: "hand-labeled images in ImageNet" },
      { icon: "school",      value: "Stanford HAI", label: "founding co-director" },
      { icon: "diversity_3", value: "AI4ALL",     label: "co-founder, broadening AI access" }
    ],
    interests: ["computer vision", "human-centered AI", "AI in healthcare", "cognitive science", "AI education"]
  },

  experience: [
    {
      id: "worldlabs",
      role_title: "Co-founder & CEO",
      company: "World Labs",
      company_domain: "worldlabs.ai",
      company_initial: "W",
      dates: "2024 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "deployed_code",
              domain: "Spatial Intelligence",
              scope: "industry",
              metric: { value: "Frontier", direction: "achieved", subject: "large world models" },
              action: "Co-founded World Labs to build “large world models” — AI that understands and generates 3D space, not just pixels and text.",
              impact: "Reached a multi-billion-dollar valuation within months on the bet that spatial intelligence is AI's next frontier.",
              skills: [
                { name: "spatial intelligence", category: "domain" },
                { name: "computer vision", category: "domain" },
                { name: "deep learning", category: "domain" }
              ],
              competencies: ["company building"]
            }
          ]
        }
      ]
    },
    {
      id: "stanford",
      role_title: "Sequoia Professor & Co-Director, HAI",
      company: "Stanford University",
      company_domain: "stanford.edu",
      company_initial: "S",
      dates: "2009 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 1 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "dataset",
              domain: "Computer Vision · Datasets",
              scope: "industry",
              metric: { value: "14M", direction: "up", subject: "ImageNet images" },
              action: "Built ImageNet (2009), a 14-million-image dataset and challenge that catalyzed deep learning; co-founded Stanford's Human-Centered AI Institute (HAI).",
              impact: "ImageNet enabled the breakthroughs — AlexNet onward — behind modern AI.",
              skills: [
                { name: "computer vision", category: "domain" },
                { name: "machine learning", category: "domain" },
                { name: "AI ethics", category: "methods" }
              ],
              competencies: ["foundational research", "institution building"]
            }
          ]
        }
      ]
    },
    {
      id: "googlecloud",
      role_title: "VP & Chief Scientist, AI/ML",
      company: "Google Cloud",
      company_domain: "cloud.google.com",
      company_initial: "G",
      dates: "2017 — 2018",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "cloud",
              domain: "Applied AI",
              scope: "company-wide",
              action: "On sabbatical from Stanford, served as VP at Google and Chief Scientist of AI/ML at Google Cloud.",
              impact: "Brought research-grade AI to enterprise cloud products.",
              skills: [
                { name: "machine learning", category: "domain" },
                { name: "AI strategy", category: "domain" }
              ],
              competencies: ["applied AI"]
            }
          ]
        }
      ]
    },
    {
      id: "sail",
      role_title: "Director, Stanford AI Lab (SAIL)",
      company: "Stanford University",
      company_domain: "stanford.edu",
      company_initial: "S",
      dates: "2013 — 2018",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 0 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "school",
              domain: "AI Research · Leadership",
              scope: "department",
              action: "Directed the Stanford Artificial Intelligence Laboratory and co-founded AI4ALL to widen access to AI education.",
              impact: "Mentored a generation of AI researchers and pushed for inclusive AI.",
              skills: [
                { name: "research leadership", category: "interpersonal" },
                { name: "AI education", category: "methods" }
              ],
              competencies: ["mentorship"]
            }
          ]
        }
      ]
    },
    {
      id: "princeton",
      role_title: "Assistant Professor",
      company: "Princeton University",
      company_domain: "princeton.edu",
      company_initial: "P",
      dates: "2007 — 2009",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "biotech",
              domain: "Computer Vision",
              scope: "team",
              action: "Began her faculty career in computer vision, the work that led directly to ImageNet.",
              impact: "Laid the groundwork for large-scale visual recognition.",
              skills: [
                { name: "computer vision", category: "domain" },
                { name: "cognitive science", category: "domain" }
              ],
              competencies: ["research"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "imagenet",
      name: "ImageNet",
      tagline: "Stanford / Princeton · Lead",
      dates: "2009 — Present",
      is_active: true,
      domain: "image-net.org",
      initial: "I",
      best_metric: "14M images",
      description: "Created ImageNet and its annual challenge — the dataset and benchmark that proved deep learning at scale.",
      impact: "Catalyzed the deep-learning era (AlexNet, 2012); one of the most influential datasets in AI.",
      skills: [
        { name: "computer vision", category: "domain" },
        { name: "datasets / benchmarks", category: "domain" }
      ],
      link: { url: "https://www.image-net.org/", label: "View ImageNet" }
    },
    {
      id: "ai4all",
      name: "AI4ALL",
      tagline: "Co-founder",
      dates: "2017 — Present",
      is_active: true,
      domain: "ai-4-all.org",
      initial: "A",
      description: "Co-founded the nonprofit AI4ALL to bring AI education to underrepresented students.",
      impact: "Pipeline programs at universities across North America.",
      skills: [
        { name: "AI education", category: "methods" },
        { name: "AI ethics", category: "methods" }
      ],
      link: { url: "https://ai-4-all.org/", label: "View AI4ALL" }
    },
    {
      id: "hai",
      name: "Stanford HAI",
      tagline: "Co-Director",
      dates: "2019 — Present",
      is_active: true,
      domain: "hai.stanford.edu",
      initial: "H",
      description: "Co-founded and co-directs Stanford's Human-Centered AI Institute, advancing AI that benefits humanity.",
      impact: "A leading voice on AI policy and ethics.",
      skills: [
        { name: "AI ethics", category: "methods" },
        { name: "research leadership", category: "interpersonal" }
      ],
      link: { url: "https://hai.stanford.edu/", label: "View Stanford HAI" }
    }
  ],

  skills: {
    order: ["Domain", "Programming", "Methods", "Interpersonal"],
    categories: {
      "Domain": {
        category: "domain",
        items: [
          { name: "computer vision", level: 4, years: 22 },
          { name: "deep learning", level: 4, years: 18 },
          { name: "machine learning", level: 4, years: 22 },
          { name: "artificial intelligence", level: 4, years: 22 },
          { name: "spatial intelligence", level: 3, years: 3 },
          { name: "datasets / benchmarks", level: 4, years: 18 },
          { name: "cognitive neuroscience", level: 3, years: 20 },
          { name: "AI ethics", level: 3, years: 10 }
        ]
      },
      "Programming": {
        category: "programming",
        items: [
          { name: "Python", level: 4, years: 22 },
          { name: "MATLAB", level: 3, years: 20 },
          { name: "C++", level: 3, years: 18 },
          { name: "PyTorch", level: 3, years: 8 }
        ]
      },
      "Methods": {
        category: "methods",
        items: [
          { name: "research direction", level: 4, years: 18 },
          { name: "large-scale data", level: 4, years: 18 },
          { name: "experimental design", level: 4, years: 22 },
          { name: "human-centered AI", level: 4, years: 10 }
        ]
      },
      "Interpersonal": {
        category: "interpersonal",
        items: [
          { name: "research leadership", level: 4, years: 16 },
          { name: "mentorship", level: 4, years: 18 },
          { name: "science communication", level: 4, years: 12 },
          { name: "AI education / inclusion", level: 4, years: 8 }
        ]
      }
    }
  },

  education: [
    {
      id: "phd-caltech",
      degree_line: "Doctor of Philosophy (PhD), Electrical Engineering",
      institution: "California Institute of Technology",
      institution_domain: "caltech.edu",
      institution_initial: "C",
      dates: "2000 — 2005"
    },
    {
      id: "ba-princeton",
      degree_line: "Bachelor of Arts (B.A.), Physics (High Honors)",
      institution: "Princeton University",
      institution_domain: "princeton.edu",
      institution_initial: "P",
      dates: "Graduated 1999"
    }
  ],

  certifications: [
    {
      id: "worlds-i-see",
      name: "Author — “The Worlds I See”",
      issuer: "Memoir on AI & curiosity",
      issuer_initial: "B",
      date: "2023"
    },
    {
      id: "nae",
      name: "National Academy of Engineering",
      issuer: "Elected member",
      issuer_domain: "nae.edu",
      issuer_initial: "N",
      date: null
    },
    {
      id: "amacad",
      name: "American Academy of Arts & Sciences",
      issuer: "Elected fellow",
      issuer_domain: "amacad.org",
      issuer_initial: "A",
      date: null
    }
  ],

  resume: {
    contact_line_parts: {
      location: "Stanford, CA",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/fei-fei-li-4541247/" },
        { label: "World Labs", url: "https://www.worldlabs.ai/" }
      ]
    },
    summary: "AI scientist and entrepreneur whose work defined modern computer vision. Created ImageNet, the dataset and benchmark that catalyzed the deep-learning era; co-directs Stanford's Human-Centered AI Institute and leads World Labs on spatial intelligence. Known for pairing frontier research with a human-centered, inclusive view of AI.",
    experience: [
      {
        role_title: "Co-founder & CEO",
        company: "World Labs",
        dates: "2024 — Present",
        bullets: [
          { text: "Co-founded World Labs to build large world models — AI that understands and generates 3D space, not just pixels and text.", tag: "spatial intelligence" },
          { text: "Set the company's technical direction on the bet that spatial intelligence is AI's next frontier.", tag: "multi-billion valuation" }
        ]
      },
      {
        role_title: "Sequoia Professor & Co-Director, HAI",
        company: "Stanford University",
        dates: "2009 — Present",
        bullets: [
          { text: "Built ImageNet, a hand-labeled image dataset and annual challenge that catalyzed deep learning across the field.", tag: "14M images" },
          { text: "Co-founded and co-directs Stanford's Human-Centered AI Institute, advancing AI research and policy that benefits humanity.", tag: "Stanford HAI" }
        ]
      },
      {
        role_title: "VP & Chief Scientist, AI/ML",
        company: "Google Cloud",
        dates: "2017 — 2018",
        bullets: [
          { text: "On sabbatical from Stanford, led AI/ML science for Google Cloud, bringing research-grade AI to enterprise products.", tag: "enterprise AI" }
        ]
      },
      {
        role_title: "Director, Stanford AI Lab (SAIL)",
        company: "Stanford University",
        dates: "2013 — 2018",
        bullets: [
          { text: "Directed the Stanford Artificial Intelligence Laboratory and co-founded AI4ALL to widen access to AI education.", tag: "AI4ALL" }
        ]
      },
      {
        role_title: "Assistant Professor",
        company: "Princeton University",
        dates: "2007 — 2009",
        bullets: [
          { text: "Began her faculty career in computer vision, laying the groundwork for large-scale visual recognition.", tag: "computer vision" }
        ]
      }
    ],
    education: [
      {
        degree_line: "Doctor of Philosophy (PhD), Electrical Engineering",
        institution: "California Institute of Technology",
        dates: "2000 — 2005"
      },
      {
        degree_line: "Bachelor of Arts (B.A.), Physics (High Honors)",
        institution: "Princeton University",
        dates: "Graduated 1999"
      }
    ],
    skills_line: "Computer Vision, Deep Learning, Machine Learning, Artificial Intelligence, Spatial Intelligence, Datasets / Benchmarks, Human-Centered AI, AI Ethics, Python, PyTorch, Research Leadership, Mentorship, Science Communication"
  },

  timeline: [
    {
      id: "worldlabs",
      type: "experience",
      date_start: "2024-01",
      date_end: null,
      label: "Co-founder & CEO @ World Labs",
      org: "World Labs",
      domain: "worldlabs.ai",
      metric: "spatial intelligence",
      skills: ["spatial intelligence", "computer vision", "deep learning"],
      pane: "experience",
      anchor: "tl-worldlabs",
      featured: true
    },
    {
      id: "stanford",
      type: "experience",
      date_start: "2009-01",
      date_end: null,
      label: "Professor & Co-Director, HAI @ Stanford",
      org: "Stanford University",
      domain: "stanford.edu",
      metric: "14M ImageNet images",
      skills: ["computer vision", "machine learning", "AI ethics"],
      pane: "experience",
      anchor: "tl-stanford",
      featured: true
    },
    {
      id: "googlecloud",
      type: "experience",
      date_start: "2017-01",
      date_end: "2018-09",
      label: "VP & Chief Scientist @ Google Cloud",
      org: "Google Cloud",
      domain: "cloud.google.com",
      metric: null,
      skills: ["machine learning", "AI strategy"],
      pane: "experience",
      anchor: "tl-googlecloud"
    },
    {
      id: "sail",
      type: "experience",
      date_start: "2013-01",
      date_end: "2018-12",
      label: "Director, Stanford AI Lab (SAIL)",
      org: "Stanford University",
      domain: "stanford.edu",
      metric: null,
      skills: ["research leadership", "AI education"],
      pane: "experience",
      anchor: "tl-sail"
    },
    {
      id: "princeton",
      type: "experience",
      date_start: "2007-01",
      date_end: "2009-01",
      label: "Assistant Professor @ Princeton",
      org: "Princeton University",
      domain: "princeton.edu",
      metric: null,
      skills: ["computer vision", "cognitive science"],
      pane: "experience",
      anchor: "tl-princeton"
    },
    {
      id: "hai",
      type: "project",
      date_start: "2019-01",
      date_end: null,
      label: "Stanford HAI (co-director)",
      org: "Stanford University",
      domain: "hai.stanford.edu",
      metric: null,
      skills: ["AI ethics", "research leadership"],
      pane: "projects",
      anchor: "tl-hai"
    },
    {
      id: "ai4all",
      type: "project",
      date_start: "2017-01",
      date_end: null,
      label: "AI4ALL (co-founder)",
      org: "AI4ALL",
      domain: "ai-4-all.org",
      metric: null,
      skills: ["AI education", "AI ethics"],
      pane: "projects",
      anchor: "tl-ai4all"
    },
    {
      id: "imagenet",
      type: "project",
      date_start: "2009-01",
      date_end: null,
      label: "ImageNet (creator)",
      org: "Stanford / Princeton",
      domain: "image-net.org",
      metric: "14M images",
      skills: ["computer vision", "datasets / benchmarks"],
      pane: "projects",
      anchor: "tl-imagenet",
      featured: true
    },
    {
      id: "worlds-i-see",
      type: "certification",
      date_start: "2023-11",
      date_end: "2023-11",
      label: "Author — “The Worlds I See”",
      org: null,
      domain: null,
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-worlds-i-see"
    },
    {
      id: "nae",
      type: "certification",
      date_start: null,
      date_end: null,
      label: "National Academy of Engineering",
      org: "National Academy of Engineering",
      domain: "nae.edu",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-nae"
    },
    {
      id: "amacad",
      type: "certification",
      date_start: null,
      date_end: null,
      label: "American Academy of Arts & Sciences",
      org: "American Academy of Arts & Sciences",
      domain: "amacad.org",
      metric: null,
      skills: [],
      pane: "certifications",
      anchor: "tl-amacad"
    },
    {
      id: "phd-caltech",
      type: "education",
      date_start: "2000-09",
      date_end: "2005-06",
      label: "PhD, Electrical Engineering @ Caltech",
      org: "California Institute of Technology",
      domain: "caltech.edu",
      metric: null,
      skills: ["computer vision", "machine learning"],
      pane: "education",
      anchor: "tl-phd-caltech"
    },
    {
      id: "ba-princeton",
      type: "education",
      date_start: "1995-09",
      date_end: "1999-06",
      label: "B.A. Physics (High Honors) @ Princeton",
      org: "Princeton University",
      domain: "princeton.edu",
      metric: null,
      skills: [],
      pane: "education",
      anchor: "tl-ba-princeton"
    }
  ],

  social: [
    { platform: "x",        pinned: true,  url: "https://x.com/drfeifei/status/1834584286932181300", caption: "Why I started World Labs" },
    { platform: "linkedin", pinned: true,  url: "https://www.linkedin.com/posts/fei-fei-li-4541247_creativity-is-intelligence-having-fun-activity-7394423779482898432-9_H5", caption: "Marble, now for everyone" },
    { platform: "x",        url: "https://x.com/drfeifei/status/1988653475526590786", caption: "Creativity is intelligence having fun" },
    { platform: "x",        url: "https://x.com/drfeifei/status/1987891813387292725", caption: "My essay on spatial world models" },
    { platform: "linkedin", url: "https://www.linkedin.com/posts/fei-fei-li-4541247_making-improvements-one-step-at-a-time-for-activity-7447340471347216384-ZbYp", caption: "Improving Marble, step by step" },
    { platform: "link",     url: "https://www.worldlabs.ai/about", caption: "World Labs — spatial intelligence" },
    { platform: "youtube",  url: "https://www.youtube.com/watch?v=40riCqvRoMs", caption: "TED: teaching computers to see" }
  ],

  traveler: "footprints"
};
