/* data.js — SINGLE SOURCE OF TRUTH for this portfolio (spec §A · schema_version 2).
   ONE global, classic script — no type=module, no fetch(), no import (file:// law).
   index.html loads this BEFORE portfolio.js, so window.HOPE_DATA exists when the
   renderers run. portfolio.js renders every visible surface from this object.

   PERSONA: Reshma Saujani — REAL public figure · PUBLIC career data only ·
   ILLUSTRATIVE demo sample. Not affiliated with or endorsed by Reshma Saujani.
   Contact uses public handles/website only; no private email/phone. */

window.HOPE_DATA = {
  schema_version: 2,

  meta: {
    name: "Reshma Saujani",
    headline: "Founder & CEO, Girls Who Code · Founder, Moms First",
    og_description: "Founder & CEO of Girls Who Code, which has reached 500K+ girls to close the gender gap in tech. Yale-trained lawyer, first Indian-American woman to run for U.S. Congress, and founder of Moms First.",
    summary_short: "I build movements that change who gets to belong. I founded Girls Who Code to close the gender gap in tech, and Moms First to fight for paid leave and childcare.",
    site_url: "",
    share_url: "",
    target_company: null,
    generation_date: "2026-06-24",
    confidence: {
      experience:     { pct: 96, band: "high" },
      skills:         { pct: 88, band: "mid"  },
      education:      { pct: 97, band: "high" },
      certifications: { pct: 85, band: "mid"  },
      projects:       { pct: 92, band: "high" }
    }
  },

  identity: {
    photo: "headshot.jpg",
    location: "New York, NY",
    links: [
      { kind: "linkedin",  label: "LinkedIn",  url: "https://www.linkedin.com/in/reshma-saujani", resume: true },
      { kind: "x",         label: "X",         url: "https://x.com/reshmasaujani", resume: false },
      { kind: "instagram", label: "Instagram", url: "https://www.instagram.com/reshmasaujani/", resume: false },
      { kind: "website",   label: "Website",   url: "https://www.reshmasaujani.com", resume: true }
    ],
    summary: "Founder & CEO of Girls Who Code, which has reached hundreds of thousands of girls to close the gender gap in tech. A Yale-trained lawyer and the first Indian-American woman to run for U.S. Congress, she later founded Moms First to fight for paid leave and childcare. Her message to a generation of girls: be brave, not perfect.",
    stats: { skills: 16, roles: 4, contributions: 4 }
  },

  overview: {
    show: true,
    headline_stats: [
      { icon: "code",              value: "Girls Who Code", label: "founder & CEO, 2012—2021" },
      { icon: "groups",            value: "500K+",          label: "girls reached worldwide" },
      { icon: "campaign",          value: "Moms First",     label: "founder, championing mothers" },
      { icon: "record_voice_over", value: "5M+",            label: "views on her TED talk" }
    ],
    interests: ["girls in STEM", "coding education", "gender equity", "activism", "writing"]
  },

  experience: [
    {
      id: "girlswhocode",
      role_title: "Founder & CEO",
      company: "Girls Who Code",
      company_domain: "girlswhocode.com",
      company_initial: "G",
      dates: "2012 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 1 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "code",
              domain: "Tech Education · Equity",
              scope: "industry",
              metric: { value: "500K+", direction: "achieved", subject: "girls reached" },
              action: "Founded Girls Who Code in 2012 to close the gender gap in technology — clubs, summer immersion, and college programs reaching hundreds of thousands of girls.",
              impact: "Helped change who learns to code in America.",
              skills: [
                { name: "nonprofit leadership", category: "interpersonal" },
                { name: "tech education",       category: "domain" },
                { name: "fundraising",          category: "methods" }
              ],
              competencies: ["movement building"]
            }
          ]
        }
      ]
    },
    {
      id: "momsfirst",
      role_title: "Founder",
      company: "Moms First (Marshall Plan for Moms)",
      company_domain: "momsfirst.us",
      company_initial: "M",
      dates: "2021 — Present",
      is_current: true,
      contribution_count: 1,
      kpis: { ic: 0, lead: 1, metric: 0 },
      groups: [
        {
          kind: "lead",
          contributions: [
            {
              num: 1,
              icon: "diversity_2",
              domain: "Advocacy · Care Policy",
              scope: "industry",
              action: "Launched the Marshall Plan for Moms — now Moms First — pushing for paid leave, affordable childcare, and pay equity.",
              impact: "Put the unpaid labor of mothers onto the national policy agenda.",
              skills: [
                { name: "advocacy",      category: "interpersonal" },
                { name: "public policy", category: "domain" }
              ],
              competencies: ["campaigning"]
            }
          ]
        }
      ]
    },
    {
      id: "nyc-public-advocate",
      role_title: "Deputy Public Advocate · Congressional Candidate",
      company: "City of New York",
      company_initial: "N",
      dates: "2010 — 2011",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "how_to_vote",
              domain: "Public Service",
              scope: "company-wide",
              action: "Served as Deputy Public Advocate for New York City; in 2010 became the first Indian-American woman to run for U.S. Congress.",
              impact: "The school visits during that campaign sparked the idea for Girls Who Code.",
              skills: [
                { name: "public service", category: "domain" },
                { name: "organizing",     category: "methods" }
              ],
              competencies: ["public leadership"]
            }
          ]
        }
      ]
    },
    {
      id: "law-finance",
      role_title: "Attorney · Finance",
      company: "Law firms & funds",
      company_initial: "L",
      dates: "2002 — 2010",
      is_current: false,
      contribution_count: 1,
      kpis: { ic: 1, lead: 0, metric: 0 },
      groups: [
        {
          kind: "ic",
          contributions: [
            {
              num: 1,
              icon: "gavel",
              domain: "Law · Finance",
              scope: "company-wide",
              action: "Practiced law in finance and investments after Yale Law School.",
              impact: "The legal and policy foundation behind her later advocacy.",
              skills: [
                { name: "law",             category: "analytical" },
                { name: "policy analysis", category: "analytical" }
              ],
              competencies: ["analytical rigor"]
            }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "proj-girlswhocode",
      name: "Girls Who Code",
      tagline: "Founder & CEO",
      dates: "2012 — Present",
      is_active: true,
      domain: "girlswhocode.com",
      initial: "G",
      best_metric: "500K+ girls",
      description: "Built a nationwide network of clubs and summer programs teaching girls to code and to belong in tech.",
      impact: "Hundreds of thousands of alumni — reshaping the image of who programs.",
      skills: [
        { name: "tech education",       category: "domain" },
        { name: "nonprofit leadership", category: "interpersonal" }
      ],
      link: { url: "https://girlswhocode.com", label: "Visit Girls Who Code" }
    },
    {
      id: "proj-momsfirst",
      name: "Moms First",
      tagline: "Founder",
      dates: "2021 — Present",
      is_active: true,
      domain: "momsfirst.us",
      initial: "M",
      description: "Founded Moms First (formerly the Marshall Plan for Moms) to win paid leave, childcare, and pay equity.",
      impact: "Drove care policy into the national conversation.",
      skills: [
        { name: "advocacy",      category: "interpersonal" },
        { name: "public policy", category: "domain" }
      ],
      link: { url: "https://momsfirst.us", label: "Visit Moms First" }
    },
    {
      id: "proj-brave-not-perfect",
      name: "Brave, Not Perfect",
      tagline: "Author",
      dates: "2019",
      is_active: false,
      initial: "B",
      description: "Wrote the bestseller expanding her TED talk on raising girls to be brave rather than perfect.",
      impact: "A widely cited framework for women's leadership.",
      skills: [
        { name: "storytelling", category: "interpersonal" }
      ]
    }
  ],

  skills: {
    order: ["Leadership & Mission", "Programs & Fundraising", "Communication", "Law & Policy"],
    categories: {
      "Leadership & Mission": {
        category: "interpersonal",
        items: [
          { name: "nonprofit leadership", level: 4, years: 13 },
          { name: "tech education",       level: 4, years: 13 },
          { name: "public policy",        level: 4, years: 15 },
          { name: "advocacy",             level: 4, years: 15 },
          { name: "movement building",    level: 4, years: 13 },
          { name: "gender equity",        level: 4, years: 13 }
        ]
      },
      "Programs & Fundraising": {
        category: "methods",
        items: [
          { name: "fundraising",    level: 4, years: 13 },
          { name: "program design", level: 4, years: 13 },
          { name: "campaigns",      level: 3, years: 15 },
          { name: "organizing",     level: 3, years: 15 }
        ]
      },
      "Communication": {
        category: "interpersonal",
        items: [
          { name: "public speaking",    level: 4, years: 15 },
          { name: "leadership",         level: 4, years: 15 },
          { name: "storytelling",       level: 4, years: 13 },
          { name: "coalition building", level: 3, years: 13 }
        ]
      },
      "Law & Policy": {
        category: "analytical",
        items: [
          { name: "law",             level: 3, years: 12 },
          { name: "policy analysis", level: 3, years: 15 }
        ]
      }
    }
  },

  education: [
    {
      id: "yale-jd",
      degree_line: "Juris Doctor (J.D.), Law",
      institution: "Yale Law School",
      institution_domain: "yale.edu",
      institution_initial: "Y",
      dates: "Graduated 2002"
    },
    {
      id: "illinois-ba",
      degree_line: "Bachelor of Arts (B.A.), Political Science & Speech Communication",
      institution: "University of Illinois Urbana-Champaign",
      institution_domain: "illinois.edu",
      institution_initial: "I",
      dates: "Graduated 1997"
    }
  ],

  certifications: [
    {
      id: "bestselling-author",
      name: "Bestselling Author — “Brave, Not Perfect” / “Pay Up”",
      issuer: "Books on women & work",
      issuer_initial: "B",
      date: "2019"
    },
    {
      id: "forbes-power-women",
      name: "Forbes — Most Powerful Women",
      issuer: "Forbes",
      issuer_domain: "forbes.com",
      issuer_initial: "F",
      date: "2018"
    },
    {
      id: "ted-talk",
      name: "TED Talk — “Teach girls bravery, not perfection”",
      issuer: "TED",
      issuer_domain: "ted.com",
      issuer_initial: "T",
      date: "2016"
    }
  ],

  resume: {
    contact_line_parts: {
      location: "New York, NY",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/reshma-saujani" },
        { label: "Website",  url: "https://www.reshmasaujani.com" }
      ]
    },
    summary: "Founder & CEO of Girls Who Code, a movement that has reached more than 500,000 girls to close the gender gap in technology. A Yale-trained lawyer and the first Indian-American woman to run for U.S. Congress, who went on to found Moms First to win paid leave, childcare, and pay equity for mothers.",
    experience: [
      {
        role_title: "Founder & CEO",
        company: "Girls Who Code",
        dates: "2012 — Present",
        bullets: [
          { text: "Founded and scaled Girls Who Code from 20 students to a nationwide network of clubs, summer immersion, and college programs.", tag: "500K+ girls" },
          { text: "Built the fundraising and partnerships engine behind the largest movement to close the gender gap in tech.", tag: "national reach" }
        ]
      },
      {
        role_title: "Founder",
        company: "Moms First (Marshall Plan for Moms)",
        dates: "2021 — Present",
        bullets: [
          { text: "Launched the Marshall Plan for Moms — now Moms First — to put paid leave, childcare, and pay equity on the national agenda.", tag: "care policy" }
        ]
      },
      {
        role_title: "Deputy Public Advocate · Congressional Candidate",
        company: "City of New York",
        dates: "2010 — 2011",
        bullets: [
          { text: "Served as Deputy Public Advocate for New York City and became the first Indian-American woman to run for U.S. Congress.", tag: "first to run" }
        ]
      },
      {
        role_title: "Attorney · Finance",
        company: "Law firms & funds",
        dates: "2002 — 2010",
        bullets: [
          { text: "Practiced law in finance and investments after Yale Law School, building the legal and policy foundation for later advocacy.", tag: "8 years" }
        ]
      }
    ],
    education: [
      {
        degree_line: "Juris Doctor (J.D.), Law",
        institution: "Yale Law School",
        dates: "Graduated 2002"
      },
      {
        degree_line: "Bachelor of Arts (B.A.), Political Science & Speech Communication",
        institution: "University of Illinois Urbana-Champaign",
        dates: "Graduated 1997"
      }
    ],
    skills_line: "Nonprofit Leadership, Tech Education, Public Policy, Advocacy, Movement Building, Gender Equity, Fundraising, Program Design, Public Speaking, Storytelling, Coalition Building, Law, Policy Analysis"
  },

  timeline: [
    {
      id: "girlswhocode",
      type: "experience",
      date_start: "2012-01",
      date_end: null,
      label: "Founder & CEO @ Girls Who Code",
      org: "Girls Who Code",
      domain: "girlswhocode.com",
      metric: "500K+ girls reached",
      skills: ["nonprofit leadership", "tech education", "fundraising"],
      pane: "experience",
      anchor: "tl-girlswhocode",
      featured: true
    },
    {
      id: "momsfirst",
      type: "experience",
      date_start: "2021-01",
      date_end: null,
      label: "Founder @ Moms First",
      org: "Moms First",
      domain: "momsfirst.us",
      metric: "care policy on the agenda",
      skills: ["advocacy", "public policy"],
      pane: "experience",
      anchor: "tl-momsfirst",
      featured: true
    },
    {
      id: "nyc-public-advocate",
      type: "experience",
      date_start: "2010-01",
      date_end: "2011-12",
      label: "Deputy Public Advocate · Congress run",
      org: "City of New York",
      domain: null,
      metric: "first Indian-American woman to run",
      skills: ["public service", "organizing"],
      pane: "experience",
      anchor: "tl-nyc-public-advocate"
    },
    {
      id: "law-finance",
      type: "experience",
      date_start: "2002-01",
      date_end: "2010-12",
      label: "Attorney · Finance",
      org: "Law firms & funds",
      domain: null,
      metric: null,
      skills: ["law", "policy analysis"],
      pane: "experience",
      anchor: "tl-law-finance"
    },
    {
      id: "proj-girlswhocode",
      type: "project",
      date_start: "2012-01",
      date_end: null,
      label: "Girls Who Code (founder)",
      org: "Girls Who Code",
      domain: "girlswhocode.com",
      metric: "500K+ girls",
      skills: ["tech education", "nonprofit leadership"],
      pane: "projects",
      anchor: "tl-proj-girlswhocode",
      featured: true
    },
    {
      id: "proj-momsfirst",
      type: "project",
      date_start: "2021-01",
      date_end: null,
      label: "Moms First (founder)",
      org: "Moms First",
      domain: "momsfirst.us",
      metric: "care policy",
      skills: ["advocacy", "public policy"],
      pane: "projects",
      anchor: "tl-proj-momsfirst"
    },
    {
      id: "proj-brave-not-perfect",
      type: "project",
      date_start: "2019-01",
      date_end: "2019-12",
      label: "Brave, Not Perfect (author)",
      org: "Author",
      domain: null,
      metric: "bestseller",
      skills: ["storytelling"],
      pane: "projects",
      anchor: "tl-proj-brave-not-perfect"
    },
    {
      id: "bestselling-author",
      type: "certification",
      date_start: "2019-01",
      date_end: "2019-01",
      label: "Bestselling author",
      org: "Books on women & work",
      domain: null,
      metric: "“Brave, Not Perfect”",
      skills: ["storytelling"],
      pane: "certifications",
      anchor: "tl-bestselling-author"
    },
    {
      id: "forbes-power-women",
      type: "certification",
      date_start: "2018-01",
      date_end: "2018-01",
      label: "Forbes — Most Powerful Women",
      org: "Forbes",
      domain: "forbes.com",
      metric: null,
      skills: ["nonprofit leadership"],
      pane: "certifications",
      anchor: "tl-forbes-power-women"
    },
    {
      id: "ted-talk",
      type: "certification",
      date_start: "2016-01",
      date_end: "2016-01",
      label: "TED — bravery, not perfection",
      org: "TED",
      domain: "ted.com",
      metric: "5M+ views",
      skills: ["public speaking", "storytelling"],
      pane: "certifications",
      anchor: "tl-ted-talk"
    },
    {
      id: "yale-jd",
      type: "education",
      date_start: "1999-09",
      date_end: "2002-05",
      label: "J.D. @ Yale Law School",
      org: "Yale Law School",
      domain: "yale.edu",
      metric: null,
      skills: ["law", "policy analysis"],
      pane: "education",
      anchor: "tl-yale-jd"
    },
    {
      id: "illinois-ba",
      type: "education",
      date_start: "1993-09",
      date_end: "1997-05",
      label: "B.A. @ U. of Illinois",
      org: "University of Illinois Urbana-Champaign",
      domain: "illinois.edu",
      metric: null,
      skills: ["political science", "speech"],
      pane: "education",
      anchor: "tl-illinois-ba"
    }
  ],

  social: [
    { platform: "linkedin",  pinned: true, url: "https://www.linkedin.com/posts/reshma-saujani_in-2012-i-handpicked-20-girls-and-taught-activity-6782359692594171904-eJnX", caption: "From 20 girls to 300,000 coders" },
    { platform: "x",         pinned: true, url: "https://x.com/reshmasaujani/status/1573692989561446400", caption: "Our Girls Who Code books got banned" },
    { platform: "x",         url: "https://x.com/reshmasaujani/status/1573693612914667520", caption: "You cannot be what you cannot see" },
    { platform: "instagram", url: "https://www.instagram.com/reshmasaujani/reel/C2LJRiKJP60/", caption: "America is exceptionally bad at care" },
    { platform: "linkedin",  url: "https://www.linkedin.com/posts/reshma-saujani_momsequalpayday-activity-7097251945509253120-z8Ye", caption: "Moms' Equal Pay Day: 227 days behind" },
    { platform: "youtube",   url: "https://www.youtube.com/watch?v=fC9da6eqaqg", caption: "TED: teach girls bravery, not perfection" }
  ],

  traveler: "paper-plane"
};
