/* ============================================================
   ISAP FORUM 2026 — APPLICATION SCRIPT
   Modules: 1 DATA · 2 THEME · 3 PAGE INIT · 4 HEADER/MENU ·
   5 COUNTDOWN · 6 RENDERERS · 7 FORMS · 8 SHARE · 9 UI · 10 INIT
============================================================ */

/* ============================================================
   MODULE 1 — CMS-READY DATA STORE
   In production, replace these objects with API/CMS responses.
   Renderers only read from ISAP_DATA and always honour the
   `status` field (publication gate).
============================================================ */
const ISAP_DATA = {

  /* ---------- Event ---------- */
  event: {
    name: "ISAP Forum 2026",
    fullName: "Information Systems Academics and Practitioners’ Forum",
    theme: "Public Sector Identification Systems for Socioeconomic Development: The Ghana Experience and Way Forward",
    /* One-day event — Wednesday, 7 October 2026, 08:00 GMT */
    startUTC: "2026-10-07T08:00:00Z",
    endUTC: "2026-10-07T17:00:00Z",
    dateLabel: "Wednesday, 7 October 2026",
    venue: "UPSA Auditorium",
    institution: "University of Professional Studies, Accra",
    country: "Ghana",
    shareUrl: "https://isapforum.upsa.edu.gh/" /* placeholder until production domain is set */
  },

  /* ---------- Programme ----------
     Schema mirrors the future CMS record:
     time (indicative), category, title, description, speaker,
     organisation, speakerRole, moderator, biography, image, status */
  programme: [
    {
      time: "08:00", category: "logistics", title: "Registration & Arrival of Participants",
      description: "Badge collection and networking at the UPSA Auditorium foyer.",
      speaker: "", organisation: "", speakerRole: "", moderator: "", biography: "", status: "confirmed"
    },
    {
      time: "09:00", category: "opening", title: "Opening Session",
      description: "Welcome address, opening prayers and forum/institutional remarks.",
      speaker: "Host & Institutional Remarks", organisation: "University of Professional Studies, Accra",
      speakerRole: "Forum / Institutional Remarks", moderator: "", biography: "", status: "confirmed"
    },
    {
      time: "09:30", category: "keynote", title: "Keynote Address",
      description: "Public Sector Identification Systems for Socioeconomic Development: The Ghana Experience and Way Forward.",
      speaker: "Prof. Kenneth Agyemang Attafuah", organisation: "To be published",
      speakerRole: "Keynote Speaker", moderator: "",
      biography: "Full biographical details will be published once confirmed by the speaker’s office.", status: "confirmed"
    },
    {
      time: "10:45", category: "logistics", title: "Tea Break & Networking",
      description: "", speaker: "", organisation: "", speakerRole: "", moderator: "", biography: "", status: "confirmed"
    },
    {
      time: "11:15", category: "session", title: "Session 1 — Evolution and Current State of Public Sector Identification Systems in Ghana",
      description: "Two presentations: (i) Government and Regulatory Perspectives; (ii) Industry and Practitioner Perspectives.",
      speaker: "To be announced", organisation: "To be announced", speakerRole: "Session Speakers",
      moderator: "To be announced", biography: "", status: "tba"
    },
    {
      time: "12:45", category: "logistics", title: "Cultural Performance / Interlude",
      description: "A celebration of Ghanaian culture.", speaker: "", organisation: "", speakerRole: "", moderator: "", biography: "", status: "confirmed"
    },
    {
      time: "13:15", category: "logistics", title: "Lunch & Networking",
      description: "", speaker: "", organisation: "", speakerRole: "", moderator: "", biography: "", status: "confirmed"
    },
    {
      time: "14:15", category: "panel", title: "Expert Panel Discussion — Academia, Policy and Practitioner Perspectives",
      description: "A multi-stakeholder panel interrogating the forum theme from research, policy and implementation viewpoints.",
      speaker: "To be announced", organisation: "Panel composition to be announced", speakerRole: "Panellists",
      moderator: "To be announced", biography: "", status: "tba"
    },
    {
      time: "15:45", category: "panel", title: "Audience Engagement / Open Forum",
      description: "An open session for questions, experiences and contributions from all participants.",
      speaker: "", organisation: "", speakerRole: "", moderator: "To be announced", biography: "", status: "confirmed"
    },
    {
      time: "16:30", category: "closing", title: "Key Recommendations / Way Forward",
      description: "Rapporteur’s synthesis of the day’s recommendations for Ghana’s public identification ecosystem.",
      speaker: "To be announced", organisation: "", speakerRole: "Rapporteur", moderator: "", biography: "", status: "confirmed"
    },
    {
      time: "16:50", category: "closing", title: "Closing Session",
      description: "Vote of thanks and closing remarks.",
      speaker: "To be announced", organisation: "University of Professional Studies, Accra",
      speakerRole: "Closing Remarks", moderator: "", biography: "", status: "confirmed"
    }
  ],

  /* ---------- Speakers ----------
     Publication pipeline: invited → confirmed → published.
     ONLY status:"published" records are rendered publicly. */
  speakers: [
    {
      id: "attafuah", name: "Prof. Kenneth Agyemang Attafuah",
      title: "To be published", organisation: "To be published",
      role: "Keynote Speaker", session: "Keynote Address",
      biography: "Full biographical details will be published on this page once confirmed by the speaker’s office.",
      image: "", linkedin: "", status: "published"
    },

    /* —— DEMO RECORDS: illustrate the CMS pipeline. These are
       intentionally NOT rendered because their status is not "published".
       Delete or replace with real CMS data later. ——
    { id: "demo-invited", name: "[Sample — Invited Speaker]", title: "", organisation: "",
      role: "Session Speaker", session: "Session 1", biography: "", image: "", linkedin: "", status: "invited" },
    { id: "demo-confirmed", name: "[Sample — Confirmed, awaiting publication approval]", title: "", organisation: "",
      role: "Panellist", session: "Expert Panel Discussion", biography: "", image: "", linkedin: "", status: "confirmed" }
    */
  ],

  /* ---------- Partners ----------
     Categories are never mixed. Only status:"published" records
     appear publicly; draft/approved records stay hidden. */
  partnerCategories: [
    {
      key: "participating", name: "Participating Institutions",
      blurb: "Public institutions and stakeholder groups across Ghana’s identification ecosystem expected to take part in the forum."
    },
    {
      key: "supporting", name: "Supporting Institutions",
      blurb: "Institutions formally supporting the forum. Listings appear here after approval for publication."
    },
    {
      key: "partners", name: "Partners",
      blurb: "Organisations in formal partnership with ISAP Forum. Listings appear here after approval for publication."
    },
    {
      key: "sponsors", name: "Sponsors",
      blurb: "Organisations whose sponsorship has been accepted and approved for publication."
    }
  ],
  partners: [
    { name: "National Identification Authority", abbr: "NIA", category: "participating", description: "National identity registration", website: "", status: "published" },
    { name: "Electoral Commission", abbr: "EC", category: "participating", description: "Voter identification", website: "", status: "published" },
    { name: "National Health Insurance Authority", abbr: "NHIA", category: "participating", description: "Health insurance membership", website: "", status: "published" },
    { name: "Social Security and National Insurance Trust", abbr: "SSNIT", category: "participating", description: "Social security records", website: "", status: "published" },
    { name: "Passport Office", abbr: "GPO", category: "participating", description: "Travel documents", website: "", status: "published" },
    { name: "National Information Technology Agency", abbr: "NITA", category: "participating", description: "Government ICT infrastructure", website: "", status: "published" },
    { name: "Cyber Security Authority", abbr: "CSA", category: "participating", description: "Cybersecurity regulation", website: "", status: "published" },
    { name: "Data Protection Commission", abbr: "DPC", category: "participating", description: "Data protection oversight", website: "", status: "published" },
    { name: "National Communications Authority", abbr: "NCA", category: "participating", description: "Communications regulation", website: "", status: "published" },
    { name: "Telecommunications Organisations", abbr: "TEL", category: "participating", description: "Industry representatives", website: "", status: "published" },
    { name: "Financial Institutions & Banking", abbr: "FIN", category: "participating", description: "Banking representatives", website: "", status: "published" },
    { name: "Technology Organisations", abbr: "TEC", category: "participating", description: "Technology industry", website: "", status: "published" },
    { name: "Development Organisations", abbr: "DEV", category: "participating", description: "Development partners", website: "", status: "published" },
    { name: "Academic Institutions", abbr: "ACA", category: "participating", description: "Universities and research", website: "", status: "published" },

    /* —— DEMO RECORDS: sponsorship pipeline examples — never rendered
       until status becomes "published". ——
    { name: "[Sample — sponsorship proposed]", abbr: "SPN", category: "sponsors", description: "", website: "", status: "draft" },
    { name: "[Sample — sponsorship accepted, awaiting publication]", abbr: "SPN", category: "sponsors", description: "", website: "", status: "approved" }
    */
  ],

  /* ---------- News ----------
     Each article has a slug used for routing (article.html?slug=<slug>).
     Swap this array for API/CMS responses in production. */
  news: [
    {
      slug: "what-to-expect-at-isap-forum-2026", title: "What to Expect at ISAP Forum 2026",
      date: "2026-10-01", category: "Forum", author: "ISAP Secretariat", status: "published",
      excerpt: "A keynote, perspective sessions, an expert panel and an open forum — your guide to the forum day.",
      content: [
        "ISAP Forum 2026 is a one-day, in-person forum structured around Ghana’s public sector identification systems. Here is what the day will hold.",
        "Participants can expect an opening session with institutional remarks; a keynote address by Prof. Kenneth Agyemang Attafuah; Session 1 on the evolution and current state of public sector identification systems in Ghana, featuring government, regulatory, industry and practitioner perspectives; a cultural interlude; an expert panel discussion on academia, policy and practitioner perspectives; an open forum for audience engagement; and a closing session with key recommendations and the way forward.",
        "Beyond the formal programme, the forum is an opportunity to meet the people shaping Ghana’s digital identity landscape. Come prepared with questions, experiences and ideas — the open forum is your session."
      ]
    },
    {
      slug: "one-week-to-go", title: "One Week to Go",
      date: "2026-09-30", category: "Countdown", author: "ISAP Secretariat", status: "published",
      excerpt: "One week remains before ISAP Forum 2026. Here is what participants should know before arriving at the UPSA Auditorium.",
      content: [
        "One week remains before ISAP Forum 2026. The forum holds on Wednesday, 7 October 2026 at the UPSA Auditorium, University of Professional Studies, Accra.",
        "Registered participants are encouraged to arrive early for badge collection. The indicative programme, including session times, is available on the Programme page and will be updated as final confirmations are received.",
        "Registration remains open until the available capacity is reached. If you are yet to register, please do so through the Register page and share the forum with colleagues who should be part of this national conversation."
      ]
    },
    {
      slug: "meet-the-panel", title: "Meet the Panel",
      date: "2026-09-22", category: "Speakers", author: "ISAP Secretariat", status: "published",
      excerpt: "The expert panel will bring academia, policy and practice into one conversation. Panelist profiles will appear as they are confirmed.",
      content: [
        "The Expert Panel Discussion is one of the most anticipated sessions of ISAP Forum 2026. It will bring together voices from academia, policy and practice to interrogate the forum theme from multiple angles.",
        "Panellists are being drawn from institutions that develop, regulate, operate, use and study Ghana’s public identification systems — ensuring that the conversation is grounded in real implementation experience as well as research.",
        "In line with our publication policy, panelist profiles will appear on the Speakers & Panel page only after confirmation has been received and approved for publication. Watch this space."
      ]
    },
    {
      slug: "participating-institutions", title: "Participating Institutions",
      date: "2026-09-18", category: "Forum", author: "ISAP Secretariat", status: "published",
      excerpt: "Institutions across Ghana’s identification ecosystem are expected at the forum — from identity registration to data protection.",
      content: [
        "ISAP Forum 2026 is convening institutions from across Ghana’s public identification ecosystem — from identity registration and elections to health insurance, social security, travel documents, cybersecurity and data protection.",
        "The institutions listed on our Partners page appear under the category of participating institutions. This reflects their expected engagement with the forum’s subject matter and does not imply sponsorship or any other commercial arrangement.",
        "We are grateful to every institution making time to dialogue on the future of identification in Ghana. Organisational participation details will continue to be updated as confirmations are received."
      ]
    },
    {
      slug: "three-weeks-to-isap-forum-2026", title: "Three Weeks to ISAP Forum 2026",
      date: "2026-09-16", category: "Countdown", author: "ISAP Secretariat", status: "published",
      excerpt: "With three weeks to go, preparations at UPSA are intensifying as the forum approaches.",
      content: [
        "With three weeks to go, preparations for ISAP Forum 2026 are intensifying. The programme structure is being finalised with confirmed and invited speakers, and arrangements at the UPSA Auditorium are well under way.",
        "Participants can expect a keynote address, perspective sessions from government, regulatory and industry viewpoints, an expert panel discussion and an open forum for audience engagement.",
        "If you have not yet registered, now is a good time to do so. Registration takes only a few minutes and helps the organisers plan seating, materials and catering for the day."
      ]
    },
    {
      slug: "why-public-identification-systems-matter-to-ghana", title: "Why Public Identification Systems Matter to Ghana",
      date: "2026-09-10", category: "Insights", author: "ISAP Secretariat", status: "published",
      excerpt: "From the bank counter to the polling station, identification systems quietly shape who can participate in modern life.",
      content: [
        "Identification systems are among the quiet foundations of modern society. They determine how easily a citizen can open a bank account, register for health insurance, claim a pension, travel, vote or access social protection.",
        "In Ghana, multiple public institutions operate identification systems for different public functions. Digitisation has expanded coverage and convenience, while also raising important questions about integration, interoperability, cybersecurity, data protection and public trust.",
        "These are precisely the questions ISAP Forum 2026 will bring to one table. When identification works well — securely, inclusively and with respect for privacy — it becomes an engine of socioeconomic development. When it fails, the most vulnerable feel it first."
      ]
    },
    {
      slug: "meet-our-keynote-speaker", title: "Meet Our Keynote Speaker",
      date: "2026-09-05", category: "Speakers", author: "ISAP Secretariat", status: "published",
      excerpt: "ISAP Forum 2026 is honoured to announce Prof. Kenneth Agyemang Attafuah as Keynote Speaker for the forum.",
      content: [
        "ISAP Forum 2026 is honoured to announce Prof. Kenneth Agyemang Attafuah as the Keynote Speaker for this year’s forum.",
        "Prof. Attafuah will deliver the keynote address on the forum theme, reflecting on Ghana’s experience with public sector identification systems and the way forward for the country’s digital identity ecosystem.",
        "The keynote speaker’s full profile, including title, organisation and biographical details, will be published on the Speakers & Panel page as soon as it has been confirmed. We look forward to a rich and forward-looking address."
      ]
    },
    {
      slug: "anticipate-isap-forum-2026", title: "Anticipate ISAP Forum 2026",
      date: "2026-08-10", category: "Forum", author: "ISAP Secretariat", status: "published",
      excerpt: "What is being prepared for Ghana’s multi-stakeholder conversation on digital identity? A first look at the thinking behind the forum.",
      content: [
        "Ghana’s public identification landscape has grown from a collection of sector-specific systems — national identity, voter registration, health insurance, social security, passports and more — into an increasingly connected digital identity environment.",
        "ISAP Forum 2026 is being designed as the national platform where that journey is examined honestly: what has worked, what remains difficult, and what the next phase of integration, interoperability and inclusion should look like.",
        "Over the coming weeks, this page will share confirmed speakers, the detailed programme and practical information for participants. We encourage institutions and individuals to register early and be part of the conversation."
      ]
    },
    {
      slug: "isap-forum-2026-announced", title: "ISAP Forum 2026 Announced",
      date: "2026-06-15", category: "Announcements", author: "ISAP Secretariat", status: "published",
      excerpt: "The University of Professional Studies, Accra announces ISAP Forum 2026 — a national conversation on public sector identification systems.",
      content: [
        "The University of Professional Studies, Accra (UPSA) has announced the Information Systems Academics and Practitioners’ Forum — ISAP Forum 2026 — holding on Wednesday, 7 October 2026 at the UPSA Auditorium.",
        "The theme for the 2026 forum is “Public Sector Identification Systems for Socioeconomic Development: The Ghana Experience and Way Forward.” The forum will examine how Ghana’s public identification systems have evolved, how they support service delivery and development, and how the ecosystem can be strengthened.",
        "ISAP Forum 2026 will bring together government institutions, regulators, industry leaders, academics, researchers, students and civil society. Registration is open to all interested participants through this website."
      ]
    }
  ],

  /* ---------- Resources ----------
     status: "available" | "soon" | "post-event" */
  resources: [
    {
      title: "Event Information Sheet", type: "Document", phase: "pre", date: "Updated Sep 2026", status: "available",
      description: "Date, venue, arrival and participation details for ISAP Forum 2026.", file: "isap-2026-event-information.txt"
    },
    {
      title: "Tentative Programme", type: "PDF", phase: "pre", date: "Sep 2026", status: "soon",
      description: "Indicative structure of the forum day. The final programme will be published after confirmation."
    },
    {
      title: "Forum Background Note", type: "PDF", phase: "pre", date: "Sep 2026", status: "soon",
      description: "Approved background material on Ghana’s public identification ecosystem for participants."
    },
    {
      title: "Selected ISAP Publications", type: "Collection", phase: "pre", date: "2026", status: "soon",
      description: "Curated academic publications from the ISAP community."
    },
    {
      title: "Final Programme", type: "PDF", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "The confirmed programme of ISAP Forum 2026 as delivered."
    },
    {
      title: "Speaker Presentations", type: "Slides", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "Presentation decks shared by speakers, with approval."
    },
    {
      title: "Forum Communiqué", type: "PDF", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "The official outcome statement of the forum."
    },
    {
      title: "Policy Brief", type: "PDF", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "Key recommendations distilled for policymakers."
    },
    {
      title: "Event Report", type: "PDF", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "Full report of proceedings, discussions and outcomes."
    },
    {
      title: "Photographs", type: "Gallery", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "Official photography from the forum day."
    },
    {
      title: "Video Recordings", type: "Video", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "Recorded sessions, published with speakers’ approval."
    },
    {
      title: "Media Coverage", type: "Links", phase: "post", date: "After 7 Oct 2026", status: "post-event",
      description: "Press and media coverage of ISAP Forum 2026."
    }
  ]
};

/* ============================================================
   MODULE 9 (utilities, defined first) — ICONS / TOAST / HELPERS
============================================================ */
const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (sel, ctx) => (ctx || document).querySelector(sel);
const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

const IC = {
  calendar: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  pin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  landmark: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2L3 7h18l-9-5z"/></svg>',
  user: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.9-3.6 3.7-5.5 7-5.5s6.1 1.9 7 5.5"/></svg>',
  org: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7h3M8 11h3M8 15h3M15 7h1M15 11h1M15 15h1M4 21h16"/></svg>',
  mic: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/></svg>',
  arrow: '<svg class="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  download: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>',
  lock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><circle cx="12" cy="16" r="1.3"/></svg>',
  doc: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
  slides: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4"/></svg>',
  video: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10.5l5-3v9l-5-3"/></svg>',
  image: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.8"/><path d="M21 15l-5.5-5.5L6 19"/></svg>',
  collection: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/></svg>',
  links: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4.2 4.2 0 0 0 6 0l3-3a4.24 4.24 0 0 0-6-6l-1.5 1.5"/><path d="M14 10a4.2 4.2 0 0 0-6 0l-3 3a4.24 4.24 0 0 0 6 6l1.5-1.5"/></svg>'
};
const resIcon = t => ({ PDF: IC.doc, Document: IC.doc, Slides: IC.slides, Video: IC.video, Gallery: IC.image, Collection: IC.collection, Links: IC.links }[t] || IC.doc);

const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

function toast(msg) {
  const t = $('#toast');
  t.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M12 11v5"/></svg><span>' + esc(msg) + '</span>';
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 3800);
}

function downloadBlob(filename, text, type) {
  const blob = new Blob([text], { type: type || 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 400);
}

/* ============================================================
   MODULE 2 — THEME (localStorage-persisted light/dark mode)
============================================================ */
const Theme = {
  btn: null,
  init() {
    this.btn = $('#themeToggle');
    this.sync();
    this.btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('isap-theme', next); } catch (e) { /* private mode */ }
      this.sync();
      /* repaint QR placeholder with new palette if visible */
      const qc = $('#qrCanvas');
      if (qc && qc.dataset.ref) drawQrPlaceholder(qc, qc.dataset.ref);
    });
  },
  sync() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.btn.setAttribute('aria-pressed', String(dark));
    this.btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    const tc = $('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', dark ? '#070919' : '#00004E');
  }
};

/* ============================================================
   MODULE 3 — PAGE INIT (multi-page replacement for the SPA router)
   Each page declares itself on <body data-page="…"> and main.js
   runs the matching renderer.
   index.html · about.html · forum.html · programme.html ·
   speakers.html · partners.html · news.html · article.html?slug=<slug>
   · resources.html · register.html · contact.html
============================================================ */
const Pages = {
  init() {
    const page = document.body.dataset.page || 'home';
    switch (page) {
      case 'home': Renderers.home(); break;
      case 'forum': Renderers.eventInfo('forumEventInfo', true); break;
      case 'programme': Renderers.programmePage(); break;
      case 'speakers': Renderers.speakersPage(); break;
      case 'partners': Renderers.partnersPage(); break;
      case 'news': Renderers.newsPage(); break;
      case 'article': this.article(); break;
      case 'resources': Renderers.resourcesPage(); break;
      case 'register': Renderers.eventInfo('registerEventInfo', true); break;
      /* 'about' and 'contact' are static pages — nothing to render. */
    }
    Reveal.scan();
  },
  /* article.html?slug=… → single news article (publication-gated, CMS-ready) */
  article() {
    const slug = new URLSearchParams(location.search).get('slug');
    const art = ISAP_DATA.news.find(a => a.slug === slug && a.status === 'published');
    if (!art) { window.location.replace('news.html'); return; }
    document.title = art.title + ' | ISAP Forum 2026';
    const d = document.querySelector('meta[name="description"]'); if (d) d.setAttribute('content', art.excerpt);
    const og = document.querySelector('meta[property="og:title"]'); if (og) og.setAttribute('content', art.title);
    const od = document.querySelector('meta[property="og:description"]'); if (od) od.setAttribute('content', art.excerpt);
    Renderers.article(art);
  }
};

/* ============================================================
   MODULE 4 — HEADER / MOBILE MENU
============================================================ */
const Menu = {
  el: null, btn: null, lastFocus: null,
  init() {
    this.el = $('#mobileMenu'); this.btn = $('#hamburger');
    const close = $('#mmClose');
    this.btn.addEventListener('click', () => this.isOpen() ? this.close() : this.open());
    close.addEventListener('click', () => { this.close(); this.btn.focus(); });
    $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => this.close()));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && this.isOpen()) { this.close(); this.btn.focus(); } });
    /* lightweight focus trap */
    this.el.addEventListener('keydown', e => {
      if (e.key !== 'Tab') return;
      const f = $$('a[href], button', this.el).filter(x => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    /* header shadow + back-to-top */
    const header = $('#siteHeader'), bt = $('#backTop');
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
      bt.classList.toggle('show', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    bt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }));
    this.initMore();
  },
  /* Desktop "More" dropdown: click to toggle; hover open is CSS-driven.
     Closes on outside click, item selection, or Escape. */
  initMore() {
    const dd = document.getElementById('navMore');
    if (!dd) return;
    const btn = document.getElementById('navMoreBtn');
    const open = () => { dd.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); };
    const close = () => { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    this.closeMore = close;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      dd.classList.contains('open') ? close() : open();
    });
    dd.querySelectorAll('.dropdown-link').forEach(a => a.addEventListener('click', close));
    document.addEventListener('click', e => { if (!dd.contains(e.target)) close(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && dd.classList.contains('open')) { close(); btn.focus(); }
    });
  },
  isOpen() { return this.el.classList.contains('open'); },
  open() {
    this.lastFocus = document.activeElement;
    this.el.classList.add('open'); this.el.setAttribute('aria-hidden', 'false');
    this.btn.setAttribute('aria-expanded', 'true'); this.btn.setAttribute('aria-label', 'Close menu');
    document.documentElement.classList.add('lock');
    setTimeout(() => $('#mmClose').focus(), 120);
  },
  close(instant) {
    if (!this.isOpen()) return;
    this.el.classList.remove('open'); this.el.setAttribute('aria-hidden', 'true');
    this.btn.setAttribute('aria-expanded', 'false'); this.btn.setAttribute('aria-label', 'Open menu');
    document.documentElement.classList.remove('lock');
    if (this.lastFocus && !instant) this.lastFocus.focus();
  }
};

/* ============================================================
   MODULE 5 — COUNTDOWN (target: 7 October 2026, 08:00 GMT)
============================================================ */
const Countdown = {
  target: new Date(ISAP_DATA.event.startUTC).getTime(),
  els: {},
  init() {
    if (!$('#cdDays')) return; /* countdown only exists on the home page */
    this.els = { d: $('#cdDays'), h: $('#cdHours'), m: $('#cdMins'), s: $('#cdSecs') };
    this.tick();
    setInterval(() => this.tick(), 1000);
  },
  set(el, val) {
    const v = String(val).padStart(2, '0');
    if (el.textContent !== v) {
      el.textContent = v;
      if (!REDUCED) { el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick'); }
    }
  },
  tick() {
    const diff = this.target - Date.now();
    if (diff <= 0) {
      $('#countdown').classList.add('is-over');
      document.body.classList.add('event-over');
      /* Post-event hero transition (spec §45): swap CTAs to archive mode */
      const reg = $('[data-hero-register]'), prog = $('[data-hero-programme]');
      if (reg && !reg.dataset.swapped) {
        reg.dataset.swapped = '1';
        reg.innerHTML = 'Explore ISAP — Research, Practice &amp; Policy ' + IC.arrow;
        reg.setAttribute('href', 'about.html');
        if (prog) {
          prog.innerHTML = 'View Resources &amp; Outcomes';
          prog.setAttribute('href', 'resources.html');
        }
      }
      return;
    }
    this.set(this.els.d, Math.floor(diff / 864e5));
    this.set(this.els.h, Math.floor(diff / 36e5) % 24);
    this.set(this.els.m, Math.floor(diff / 6e4) % 60);
    this.set(this.els.s, Math.floor(diff / 1e3) % 60);
  }
};

/* ============================================================
   MODULE 8 — SOCIAL SHARING (WhatsApp-first for mobile traffic)
============================================================ */
const Share = {
  row(title, url) {
    const t = encodeURIComponent(title), u = encodeURIComponent(url);
    let html = '<div class="share-row"><span class="lbl">Share</span>'
      + '<a class="share-btn share-btn--wa" target="_blank" rel="noopener" aria-label="Share on WhatsApp" href="https://wa.me/?text=' + t + '%20%E2%80%94%20' + u + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M8.8 8.7c.4 2.6 3 5.2 5.6 5.6l1.4-1.7-2.1-1.2-1 .8c-.8-.4-1.6-1.2-2-2l.8-1-1.2-2.1-1.5 1.6z"/></svg></a>'
      + '<a class="share-btn" target="_blank" rel="noopener" aria-label="Share on LinkedIn" href="https://www.linkedin.com/sharing/share-offsite/?url=' + u + '"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M7.2 10.2V17M7.2 7.2v.01M11.5 17v-4a2.4 2.4 0 0 1 4.8 0v4M11.5 10.2v1.6"/></svg></a>'
      + '<a class="share-btn" target="_blank" rel="noopener" aria-label="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + u + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h2.5V4.8H14c-2.2 0-3.5 1.4-3.5 3.6v1.8H8v3h2.5V20h3.2v-6.8h2.6l.5-3h-3.1V8.7c0-.5.2-.7.8-.7z"/></svg></a>'
      + '<a class="share-btn" target="_blank" rel="noopener" aria-label="Share on X" href="https://twitter.com/intent/tweet?url=' + u + '&text=' + t + '"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4h4.6l4 5.7L17.8 4H21l-6.9 7.6L21 20h-4.6l-4.2-6-4.9 6H4l7.2-8L4 4z"/></svg></a>';
    if (navigator.share) {
      html += '<button class="share-btn" type="button" aria-label="Share via device" data-share-title="' + esc(title) + '" data-share-url="' + esc(url) + '"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 12v7a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-7"/></svg></button>';
    }
    return html + '</div>';
  },
  bind(scope) {
    $$('[data-share-title]', scope || document).forEach(b => b.addEventListener('click', () => {
      navigator.share({ title: b.dataset.shareTitle, text: b.dataset.shareTitle, url: b.dataset.shareUrl }).catch(() => { });
    }));
  },
  articleUrl(slug) { return 'article.html?slug=' + slug; }
};

/* ============================================================
   MODULE 6 — RENDERERS (all honour CMS publication status)
============================================================ */
const Renderers = {
  /* Reusable event-information component (spec §49) */
  eventInfo(targetId, withActions) {
    const el = document.getElementById(targetId);
    if (!el || el.dataset.done) return;
    el.dataset.done = '1';
    const ev = ISAP_DATA.event;
    el.innerHTML =
      '<div class="event-info">' +
      '<div class="ei-row"><span class="ei-ic" aria-hidden="true">' + IC.calendar + '</span><div><strong>' + esc(ev.dateLabel) + '</strong><small>One-day national forum · 08:00 GMT start (indicative)</small></div></div>' +
      '<div class="ei-row"><span class="ei-ic" aria-hidden="true">' + IC.pin + '</span><div><strong>' + esc(ev.venue) + '</strong><small>Main campus, Accra</small></div></div>' +
      '<div class="ei-row"><span class="ei-ic" aria-hidden="true">' + IC.landmark + '</span><div><strong>' + esc(ev.institution) + '</strong><small>' + esc(ev.country) + '</small></div></div>' +
      (withActions ? '<div class="ei-actions">' +
        '<button class="btn btn-outline btn-sm" type="button" data-ics>' + IC.download + ' Add to Calendar</button>' +
        '<a class="btn btn-outline btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=' + encodeURIComponent(ev.name + ' — ' + ev.dateLabel + ' · ' + ev.venue + ' · ' + ev.shareUrl) + '">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M8.8 8.7c.4 2.6 3 5.2 5.6 5.6l1.4-1.7-2.1-1.2-1 .8c-.8-.4-1.6-1.2-2-2l.8-1-1.2-2.1-1.5 1.6z"/></svg> Share Event</a>' +
        '</div>' : '') +
      '</div>';
    $$('[data-ics]', el).forEach(b => b.addEventListener('click', addEventToCalendar));
  },

  /* Programme row builder (shared by home preview + programme page) */
  progRow(item, compact) {
    const statusPill = item.status === 'confirmed'
      ? '<span class="status status--confirmed">Confirmed</span>'
      : '<span class="status status--tba">To Be Announced</span>';
    const who = [];
    if (item.speaker) who.push('<span>' + IC.user + ' <span>' + (item.speaker === 'To be announced' ? '<span class="tba">Speaker — to be announced</span>' : '<b>' + esc(item.speaker) + '</b>') + (item.speakerRole ? ' <span style="color:var(--muted)">· ' + esc(item.speakerRole) + '</span>' : '') + '</span></span>');
    if (item.organisation && item.organisation.indexOf('To be') !== 0) who.push('<span>' + IC.org + ' <span>' + esc(item.organisation) + '</span></span>');
    if (item.moderator) who.push('<span>' + IC.mic + ' <span>Moderator: ' + (item.moderator === 'To be announced' ? '<span class="tba">to be announced</span>' : '<b>' + esc(item.moderator) + '</b>') + '</span></span>');
    return '<article class="prog-row reveal">' +
      '<div class="time-badge"><span class="t">' + esc(item.time) + '</span><small>indicative</small></div>' +
      '<div class="prog-main">' +
      '<span class="prog-cat">' + esc(catLabel(item.category)) + '</span>' +
      '<h3>' + esc(item.title) + ' ' + statusPill + '</h3>' +
      (item.description ? '<p class="prog-desc">' + esc(item.description) + '</p>' : '') +
      ((!compact && who.length) ? '<div class="prog-who">' + who.join('') + '</div>' : '') +
      '</div></article>';
  },

  home() {
    /* Event info */
    this.eventInfo('homeEventInfo', true);
    /* Featured speakers — published only */
    const hs = $('#homeSpeakers');
    if (hs && !hs.dataset.done) {
      hs.dataset.done = '1';
      hs.innerHTML = ISAP_DATA.speakers.filter(s => s.status === 'published').map(speakerCard).join('') +
        '<article class="card speaker-card--tease reveal"><div><div class="tease-ic" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.8 20c.8-3.3 3.3-5 6.2-5s5.4 1.7 6.2 5"/><circle cx="17.5" cy="9" r="2.6"/><path d="M17.2 15.6c2.3.4 3.7 1.8 4.2 4.4"/></svg></div>' +
        '<h3>More speakers to be announced</h3><p>Session speakers and the expert panel will be published here after confirmation.</p></div></article>';
    }
    /* Programme preview — highlight sessions only */
    const hp = $('#homeProgramme');
    if (hp && !hp.dataset.done) {
      hp.dataset.done = '1';
      const previewCats = ['opening', 'keynote', 'session', 'panel', 'closing'];
      hp.innerHTML = ISAP_DATA.programme
        .filter(p => previewCats.indexOf(p.category) !== -1)
        .slice(0, 6).map(p => this.progRow(p, true)).join('');
    }
    /* Latest news — three most recent */
    const hn = $('#homeNews');
    if (hn && !hn.dataset.done) {
      hn.dataset.done = '1';
      hn.innerHTML = ISAP_DATA.news.filter(n => n.status === 'published')
        .sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((n, i) => newsCard(n, i)).join('');
    }
  },

  programmePage() {
    const list = $('#programmeList'), bar = $('#progFilters');
    if (!list || !bar) return;
    const cats = [
      { key: 'all', label: 'All Sessions' }, { key: 'opening', label: 'Opening & Keynote' },
      { key: 'session', label: 'Sessions' }, { key: 'panel', label: 'Panel & Open Forum' },
      { key: 'logistics', label: 'Breaks & Interludes' }, { key: 'closing', label: 'Recommendations & Closing' }
    ];
    if (!bar.dataset.done) {
      bar.dataset.done = '1';
      bar.innerHTML = cats.map(c => '<button class="f-chip" type="button" data-cat="' + c.key + '" aria-pressed="' + (c.key === 'all') + '">' + c.label + '</button>').join('');
      bar.addEventListener('click', e => {
        const btn = e.target.closest('[data-cat]'); if (!btn) return;
        $$('[data-cat]', bar).forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        paint(btn.dataset.cat);
      });
    }
    function paint(cat) {
      const items = ISAP_DATA.programme.filter(p => cat === 'all'
        || (cat === 'opening' && (p.category === 'opening' || p.category === 'keynote'))
        || p.category === cat);
      list.innerHTML = items.map(p => Renderers.progRow(p, false)).join('');
      Reveal.scan();
    }
    /* reset filter state on every visit */
    $$('[data-cat]', bar).forEach((b, i) => b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false'));
    paint('all');
  },

  speakersPage() {
    const list = $('#speakersList');
    if (!list || list.dataset.done) return;
    list.dataset.done = '1';
    const published = ISAP_DATA.speakers.filter(s => s.status === 'published'); /* publication gate */
    list.innerHTML = published.map(speakerCard).join('') +
      '<article class="card speaker-card--tease reveal"><div><div class="tease-ic" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.9-3.6 3.7-5.5 7-5.5s6.1 1.9 7 5.5"/></svg></div>' +
      '<h3>Additional Speakers</h3><p>Keynote, session and panel speakers are published here once confirmed.</p></div></article>';
  },

  partnersPage() {
    const wrap = $('#partnersList');
    if (!wrap || wrap.dataset.done) return;
    wrap.dataset.done = '1';
    wrap.innerHTML = ISAP_DATA.partnerCategories.map(cat => {
      const items = ISAP_DATA.partners.filter(p => p.category === cat.key && p.status === 'published'); /* publication gate */
      const body = items.length
        ? '<div class="pt-grid">' + items.map(p =>
          '<div class="pt-tile reveal"><span class="pt-mark" aria-hidden="true">' + esc(p.abbr) + '</span><strong>' + esc(p.name) + '</strong><small>' + esc(p.description) + '</small>' +
          (p.website ? '<a class="mono" style="font-size:.68rem;color:var(--gold-ink)" href="' + esc(p.website) + '" target="_blank" rel="noopener">Website ↗</a>' : '<span class="mono" style="font-size:.64rem;color:var(--muted)">logo &amp; link pending approval</span>') +
          '</div>').join('') + '</div>'
        : '<div class="empty-state reveal"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>' +
        '<strong>To be announced</strong><span style="font-size:.85rem">' + esc(cat.name) + ' will be listed here once approved for publication.<br>Interested in this category? <a href="contact.html" style="border-bottom:1.5px solid var(--gold);font-weight:600">Contact the secretariat</a>.</span></div>';
      return '<div class="pt-cat reveal"><h2>' + esc(cat.name) + ' <span class="count">' + items.length + '</span></h2><p>' + esc(cat.blurb) + '</p>' + body + '</div>';
    }).join('');
  },

  newsPage() {
    if (!$('#newsSearch')) return; /* news controls exist only on news.html */
    const state = { q: '', cat: 'all', sort: 'newest' };
    const search = $('#newsSearch'), sort = $('#newsSort'), catBar = $('#newsCats'),
      list = $('#newsList'), count = $('#newsCount'), empty = $('#newsEmpty');
    const cats = ['all'].concat(Array.from(new Set(ISAP_DATA.news.map(n => n.category))));
    if (!catBar.dataset.done) {
      catBar.dataset.done = '1';
      catBar.innerHTML = cats.map(c => '<button class="f-chip" type="button" data-cat="' + esc(c) + '" aria-pressed="' + (c === 'all') + '">' + (c === 'all' ? 'All Categories' : esc(c)) + '</button>').join('');
      catBar.addEventListener('click', e => {
        const b = e.target.closest('[data-cat]'); if (!b) return;
        $$('[data-cat]', catBar).forEach(x => x.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true'); state.cat = b.dataset.cat; paint();
      });
    }
    function paint() {
      let items = ISAP_DATA.news.filter(n => n.status === 'published');
      if (state.cat !== 'all') items = items.filter(n => n.category === state.cat);
      if (state.q) items = items.filter(n => (n.title + ' ' + n.excerpt + ' ' + n.category).toLowerCase().indexOf(state.q) !== -1);
      items.sort((a, b) => state.sort === 'newest' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date));
      list.innerHTML = items.map((n, i) => newsCard(n, i)).join('');
      count.textContent = 'Showing ' + items.length + ' of ' + ISAP_DATA.news.filter(n => n.status === 'published').length + ' updates';
      empty.hidden = items.length > 0;
      Reveal.scan();
    }
    /* reset controls on every visit */
    search.value = ''; sort.value = 'newest';
    $$('[data-cat]', catBar).forEach((x, i) => x.setAttribute('aria-pressed', i === 0 ? 'true' : 'false'));
    search.oninput = () => { state.q = search.value.trim().toLowerCase(); paint(); };
    sort.onchange = () => { state.sort = sort.value; paint(); };
    const clearBtn = $('#newsClear');
    if (clearBtn && !clearBtn.dataset.done) {
      clearBtn.dataset.done = '1';
      clearBtn.addEventListener('click', () => {
        state.q = ''; state.cat = 'all'; search.value = '';
        $$('[data-cat]', catBar).forEach((x, i) => x.setAttribute('aria-pressed', i === 0 ? 'true' : 'false'));
        paint();
      });
    }
    paint();
  },

  article(art) {
    $('#articleCrumb').textContent = art.category;
    $('#articleTitle').textContent = art.title;
    $('#articleMeta').innerHTML =
      '<span class="chip chip--soft">' + esc(art.category) + '</span>' +
      '<span style="display:inline-flex;align-items:center;gap:.45rem">' + IC.calendar + ' ' + fmtDate(art.date) + '</span>' +
      '<span style="display:inline-flex;align-items:center;gap:.45rem">' + IC.user + ' ' + esc(art.author) + '</span>';
    const url = Share.articleUrl(art.slug);
    $('#articleShareTop').innerHTML = Share.row(art.title, url);
    $('#articleShareBottom').innerHTML = Share.row(art.title, url);
    $('#articleBody').innerHTML = art.content.map(p => '<p>' + esc(p) + '</p>').join('');
    /* neighbours */
    const pub = ISAP_DATA.news.filter(n => n.status === 'published').sort((a, b) => b.date.localeCompare(a.date));
    const idx = pub.findIndex(n => n.slug === art.slug);
    const more = [pub[idx - 1], pub[idx + 1]].filter(Boolean).slice(0, 2);
    $('#articleMore').innerHTML = more.map((n, i) => newsCard(n, i)).join('');
    Share.bind($('#view-article'));
    Reveal.scan();
  },

  resourcesPage() {
    const paint = (phase, targetId, grid) => {
      const el = document.getElementById(targetId);
      if (!el || el.dataset.done) return;
      el.dataset.done = '1';
      el.innerHTML = ISAP_DATA.resources.filter(r => r.phase === phase).map(r => {
        const locked = r.status !== 'available';
        const action = r.status === 'available'
          ? '<button class="btn btn-navy btn-sm" type="button" data-res="' + esc(r.file) + '">' + IC.download + ' Download</button>'
          : r.status === 'soon'
            ? '<button class="btn btn-outline btn-sm is-pending" type="button" data-soon>' + IC.lock + ' Coming Soon</button>'
            : '<button class="btn btn-outline btn-sm is-pending" type="button" data-soon>' + IC.lock + ' After 7 Oct 2026</button>';
        return '<article class="card res-card reveal' + (locked ? ' res-lock' : '') + '">' +
          '<div class="res-top"><span class="res-ic" aria-hidden="true">' + resIcon(r.type) + '</span><div><span class="res-meta">' + esc(r.type) + ' · ' + esc(r.date) + '</span><h3>' + esc(r.title) + '</h3></div></div>' +
          '<p>' + esc(r.description) + '</p>' + action + '</article>';
      }).join('');
      $$('[data-res]', el).forEach(b => b.addEventListener('click', () => {
        downloadBlob(b.dataset.res, eventInfoText(), 'text/plain;charset=utf-8');
        toast('Download started — ISAP 2026 Event Information Sheet.');
      }));
      $$('[data-soon]', el).forEach(b => b.addEventListener('click', () => toast('This resource will be published here once approved.')));
    };
    paint('pre', 'resPre');
    paint('post', 'resPost');
  }
};

function catLabel(c) {
  return { logistics: 'Break / Networking', opening: 'Opening', keynote: 'Keynote', session: 'Session', panel: 'Panel / Forum', closing: 'Closing' }[c] || c;
}

function speakerCard(s) {
  const initials = s.name.replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, '').split(/\s+/).map(w => w[0]).slice(0, 3).join('').toUpperCase();
  return '<article class="card speaker-card reveal">' +
    '<div class="portrait" aria-hidden="true">' +
    '<svg class="fp-arc" viewBox="0 0 200 200" fill="none" stroke="#FFB606" stroke-width="1.2"><circle cx="100" cy="105" r="28" stroke-dasharray="55 24"/><circle cx="100" cy="105" r="50" stroke-dasharray="95 40"/><circle cx="100" cy="105" r="72" stroke-dasharray="140 58"/><circle cx="100" cy="105" r="94" stroke-dasharray="185 76"/></svg>' +
    (s.image ? '<img src="' + esc(s.image) + '" alt="Portrait of ' + esc(s.name) + '" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">' : '<span class="initials">' + esc(initials) + '</span>') +
    '<span class="role-tag">' + esc(s.role) + '</span>' +
    '</div>' +
    '<div class="speaker-body">' +
    '<h3>' + esc(s.name) + '</h3>' +
    '<div class="spk-row">' + IC.mic + ' <span><b>' + esc(s.session) + '</b></span></div>' +
    '<div class="spk-row">' + IC.user + ' <span>Title: <b>' + esc(s.title || 'To be published') + '</b></span></div>' +
    '<div class="spk-row">' + IC.org + ' <span>Organisation: <b>' + esc(s.organisation || 'To be published') + '</b></span></div>' +
    (s.linkedin ? '<a class="link-more" href="' + esc(s.linkedin) + '" target="_blank" rel="noopener">LinkedIn profile ↗</a>' : '<div class="spk-row" style="color:var(--muted);font-size:.78rem"><span class="mono" style="letter-spacing:.08em">LINKEDIN · PENDING APPROVAL</span></div>') +
    '<p class="spk-bio">' + esc(s.biography) + '</p>' +
    '</div></article>';
}

/* Generated brand-pattern thumbnails for news (no external images — fast on mobile data) */
function newsThumb(n, i) {
  const palettes = [
    ['#0E0F58', '#FFB606'], ['#05063A', '#FFB606'], ['#12136A', '#FFC22E'], ['#00004E', '#FFB606']
  ];
  const [bg, ac] = palettes[i % palettes.length];
  const patterns = [
    '<g stroke="' + ac + '" stroke-width="1.4" opacity=".5" fill="none"><circle cx="520" cy="60" r="34" stroke-dasharray="60 26"/><circle cx="520" cy="60" r="58" stroke-dasharray="100 42"/><circle cx="520" cy="60" r="82" stroke-dasharray="150 60"/><circle cx="520" cy="60" r="106" stroke-dasharray="200 80"/></g>',
    '<g stroke="' + ac + '" stroke-width="1" opacity=".42"><path d="M0 40h640M0 90h640M0 140h640M0 190h640M120 0v220M320 0v220M520 0v220"/></g><g fill="' + ac + '" opacity=".9"><circle cx="320" cy="90" r="5"/><circle cx="120" cy="140" r="4"/><circle cx="520" cy="40" r="4"/></g><g stroke="' + ac + '" stroke-width="1.2" opacity=".6" stroke-dasharray="4 6"><path d="M120 140L320 90l200-50"/></g>',
    '<g fill="' + ac + '" opacity=".16"><rect x="40" y="30" width="90" height="90" rx="14"/><rect x="470" y="110" width="120" height="120" rx="18"/></g><g stroke="' + ac + '" stroke-width="1.4" opacity=".6" fill="none"><path d="M60 170c60-80 140-80 200-30s160 50 240-40"/><path d="M60 190c60-80 140-80 200-30s160 50 240-40" opacity=".5"/></g>',
    '<g stroke="' + ac + '" stroke-width="1" opacity=".35"><path d="M40 0v220M140 0v220M240 0v220M340 0v220M440 0v220M540 0v220"/></g><g fill="none" stroke="' + ac + '" stroke-width="1.6" opacity=".75"><rect x="430" y="36" width="150" height="100" rx="10" stroke-dasharray="10 7"/><path d="M446 52h14M446 66h14"/></g>'
  ];
  const p = patterns[i % patterns.length];
  return '<svg viewBox="0 0 640 344" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Decorative pattern for ' + esc(n.title) + '">' +
    '<rect width="640" height="344" fill="' + bg + '"/>' + p +
    '<text x="40" y="300" font-family="Space Grotesk,sans-serif" font-size="120" font-weight="700" fill="#fff" opacity=".07">' + esc(n.category.charAt(0)) + '</text>' +
    '<rect x="0" y="332" width="640" height="12" fill="' + ac + '" opacity=".85"/></svg>';
}

function newsCard(n, i) {
  return '<article class="card news-card reveal">' +
    '<a class="news-thumb" href="article.html?slug=' + esc(n.slug) + '" tabindex="-1" aria-hidden="true">' + newsThumb(n, i) + '<span class="news-tag">' + esc(n.category) + '</span></a>' +
    '<div class="news-body">' +
    '<span class="news-date">' + IC.calendar + ' ' + fmtDate(n.date) + ' · ' + esc(n.author) + '</span>' +
    '<h3><a href="article.html?slug=' + esc(n.slug) + '">' + esc(n.title) + '</a></h3>' +
    '<p class="news-ex">' + esc(n.excerpt) + '</p>' +
    '<a class="link-more" href="article.html?slug=' + esc(n.slug) + '">Read more ' + IC.arrow + '</a>' +
    '</div></article>';
}

/* ============================================================
   MODULE 7 — FORMS (client-side validation, demo persistence)
============================================================ */
const Forms = {
  mark(field, bad) {
    field.closest('.field').classList.toggle('invalid', bad);
    field.setAttribute('aria-invalid', String(bad));
  },
  check(field) {
    const v = field.value.trim();
    let ok = true;
    if (field.required && !v) ok = false;
    else if (v && field.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    else if (v && field.type === 'tel') ok = /^[+\d][\d\s\-()]{7,}$/.test(v) && (v.replace(/\D/g, '').length >= 9);
    else if (field.minLength > 0 && v && v.length < field.minLength) ok = false;
    else if (field.id === 'ctMsg' && v.length < 20) ok = false;
    this.mark(field, !ok);
    return ok;
  },
  wire(form, onSubmit) {
    const fields = $$('input, select, textarea', form);
    fields.forEach(f => f.addEventListener('blur', () => { if (f.value || f.classList.contains('touched')) this.check(f); f.classList.add('touched'); }));
    form.addEventListener('submit', e => {
      e.preventDefault();
      let firstBad = null;
      fields.forEach(f => {
        if (f.closest('.field') && f.closest('.field').hidden) return; /* skip hidden conditional fields */
        if (!this.check(f) && !firstBad) firstBad = f;
      });
      if (firstBad) { firstBad.focus(); toast('Please review the highlighted fields.'); return; }
      onSubmit(form);
    });
  },
  init() {
    /* ---- Registration (register.html only) ---- */
    const regForm = $('#regForm');
    if (regForm) {
      const cat = $('#regCat'), sid = $('#studentIdField'), sidInput = $('#regStudentId');
      cat.addEventListener('change', () => {
        const isStudent = cat.value === 'Student';
        sid.hidden = !isStudent;
        sidInput.required = isStudent;
        if (!isStudent) this.mark(sidInput, false);
      });
      this.wire(regForm, form => {
        const ref = makeRef();
        const rec = { ref: ref, at: new Date().toISOString() };
        new FormData(form).forEach((v, k) => { rec[k] = v; });
        try {
          const all = JSON.parse(localStorage.getItem('isap-registrations') || '[]');
          all.push(rec); localStorage.setItem('isap-registrations', JSON.stringify(all));
        } catch (e) { /* storage unavailable */ }
        form.hidden = true;
        $('#regFormCard > h2').hidden = true;
        $('#regFormCard > p').hidden = true;
        $('#regRef').textContent = ref;
        const qc = $('#qrCanvas'); qc.dataset.ref = ref; drawQrPlaceholder(qc, ref);
        const panel = $('#regSuccess');
        panel.classList.add('show');
        panel.focus();
      });
      $('#regIcs').addEventListener('click', addEventToCalendar);
      $('#regShare').addEventListener('click', () => {
        const ev = ISAP_DATA.event;
        window.open('https://wa.me/?text=' + encodeURIComponent('I just registered for ' + ev.name + ' — ' + ev.dateLabel + ', ' + ev.venue + '. Join me! ' + ev.shareUrl), '_blank', 'noopener');
      });
      $('#regAgain').addEventListener('click', () => {
        $('#regSuccess').classList.remove('show');
        $('#regFormCard > h2').hidden = false;
        $('#regFormCard > p').hidden = false;
        const f = $('#regForm'); f.hidden = false; f.reset();
        $('#studentIdField').hidden = true;
        $$('.field.invalid', f).forEach(x => x.classList.remove('invalid'));
        $('#regName').focus();
      });
    } /* end registration block */

    /* ---- Contact (contact.html only) ---- */
    const ctForm = $('#contactForm');
    if (ctForm) {
      const ctCard = ctForm.closest('.form-card');
      this.wire(ctForm, () => {
        $('#ctRef').textContent = 'ISAP-MSG-' + Math.random().toString(36).slice(2, 7).toUpperCase();
        ctForm.hidden = true;
        $('h2', ctCard).hidden = true;
        ctCard.querySelector(':scope > p').hidden = true;
        const p = $('#contactSuccess'); p.classList.add('show'); p.focus();
      });
      $('#ctAgain').addEventListener('click', () => {
        $('#contactSuccess').classList.remove('show');
        $('h2', ctCard).hidden = false;
        ctCard.querySelector(':scope > p').hidden = false;
        ctForm.hidden = false; ctForm.reset();
        $('#ctName').focus();
      });
    } /* end contact block */
  }
};

/* Registration reference: ISAP-2026-XXXXXX
   (A future backend replaces this with a guaranteed-unique ID.) */
function makeRef() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return 'ISAP-2026-' + s;
}

/* Placeholder QR (deterministic pattern seeded from the reference).
   Replace drawQrPlaceholder() with a real QR library / backend-issued
   code when the check-in system is integrated. */
function drawQrPlaceholder(canvas, seed) {
  const ctx = canvas.getContext('2d');
  const size = 25, scale = canvas.width / size;
  const dark = getComputedStyle(document.documentElement).getPropertyValue('--navy').trim() || '#00004E';
  const gold = getComputedStyle(document.documentElement).getPropertyValue('--gold').trim() || '#FFB606';
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  const rnd = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) / 4294967296); };
  ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  const finder = (x, y) => {
    ctx.fillStyle = dark; ctx.fillRect(x * scale, y * scale, 7 * scale, 7 * scale);
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect((x + 1) * scale, (y + 1) * scale, 5 * scale, 5 * scale);
    ctx.fillStyle = dark; ctx.fillRect((x + 2) * scale, (y + 2) * scale, 3 * scale, 3 * scale);
  };
  const inFinder = (x, y) => (x < 8 && y < 8) || (x > size - 9 && y < 8) || (x < 8 && y > size - 9);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    if (inFinder(x, y)) continue;
    if (rnd() < 0.46) { ctx.fillStyle = rnd() < 0.08 ? gold : dark; ctx.fillRect(x * scale, y * scale, scale, scale); }
  }
  finder(0, 0); finder(size - 7, 0); finder(0, size - 7);
}

/* Calendar (.ics) download — works fully offline/frontend */
function addEventToCalendar() {
  const ev = ISAP_DATA.event;
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ISAP Forum//UPSA//EN', 'BEGIN:VEVENT',
    'UID:isap-forum-2026@upsa.edu.gh', 'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
    'DTSTART:' + ev.startUTC.replace(/[-:]/g, '').replace('.000', ''),
    'DTEND:' + ev.endUTC.replace(/[-:]/g, '').replace('.000', ''),
    'SUMMARY:' + ev.name + ' — ' + ev.theme,
    'LOCATION:' + ev.venue + '\\, ' + ev.institution + '\\, Ghana',
    'DESCRIPTION:One-day national forum on public sector identification systems for socioeconomic development. Register: ' + ev.shareUrl,
    'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  downloadBlob('isap-forum-2026.ics', ics, 'text/calendar;charset=utf-8');
  toast('Calendar file downloaded — see you on 7 October 2026!');
}

function eventInfoText() {
  const ev = ISAP_DATA.event;
  return [
    'ISAP FORUM 2026 — EVENT INFORMATION SHEET',
    '==========================================',
    ev.fullName,
    '',
    'Theme: ' + ev.theme,
    'Date:  ' + ev.dateLabel + ' (one-day forum)',
    'Venue: ' + ev.venue + ', ' + ev.institution + ', ' + ev.country,
    '',
    'Hosted by the Department of Information Technology Studies,',
    'Faculty of IT and Communication Studies, UPSA.',
    '',
    'Register: ' + ev.shareUrl + 'register.html',
    'Programme times are indicative until the final programme is published.'
  ].join('\n');
}

/* ============================================================
   MODULE 10 — SCROLL REVEAL / MARQUEE / INIT
============================================================ */
const Reveal = {
  io: null,
  init() {
    if (REDUCED) {
      /* reduced-motion: CSS already forces opacity:1/transform:none */
      this.scan = () => { };
      this.heroEntrance();
      return;
    }
    if (!('IntersectionObserver' in window)) {
      this.scan = () => $$('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
      this.heroEntrance();
      return;
    }
    this.io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        /* data-stagger="0"|"1"|"2"|… sets a CSS transition-delay based on --reveal-stagger */
        const idx = el.dataset.stagger;
        if (idx != null) el.style.transitionDelay = (parseFloat(idx) * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reveal-stagger'))) + 's';
        el.classList.add('revealed');
        this.io.unobserve(el);              /* reveal once only (§20) */
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -8% 0px' });
    /* Auto-apply reveal-scale-up + stagger to cards/rows inside grid containers
       that already carry .reveal — avoids hundreds of manual data-stagger attrs */
    this.autoStagger();
    this.heroEntrance();
  },
  autoStagger() {
    const gridSel = '.grid,.stake-grid,.prog,.num-list,.pt-grid,.obj-grid';
    $$(gridSel).forEach(grid => {
      const items = $$(':scope > .reveal:not([data-stagger]),:scope > .card:not([data-stagger]),:scope > article:not([data-stagger]),:scope > .stake:not([data-stagger]),:scope > .prog-row:not([data-stagger]):scope > li:not([data-stagger])', grid);
      items.forEach((el, i) => {
        if (!el.classList.contains('reveal')) el.classList.add('reveal');
        if (!el.classList.contains('reveal-scale-up') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right'))
          el.classList.add('reveal-scale-up');
        el.dataset.stagger = i;
      });
    });
  },
  /* Hero: single orchestrated stagger that plays once per page load (§5).
     Marked via data-hero-child="<delay_in_seconds>" */
  heroEntrance() {
    const hero = $('.hero');
    if (!hero) return;
    $$('[data-hero-child]', hero).forEach(el => {
      const delay = parseFloat(el.dataset.heroChild || '0');
      setTimeout(() => el.classList.add('done'), REDUCED ? 0 : 80 + delay * 1000);
    });
  },
  scan() {
    if (!this.io) {
      $$('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
      return;
    }
    $$('.reveal:not(.revealed)').forEach(el => this.io.observe(el));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Menu.init();
  Countdown.init();
  Forms.init();
  Reveal.init();

  /* Marquee: duplicate content for a seamless loop (home page only) */
  const track = $('#marqueeTrack');
  if (track) track.innerHTML += track.innerHTML;

  Pages.init();
  Share.bind(document);
});
