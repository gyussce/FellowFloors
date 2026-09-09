/* ==================================================================
   HLLC FLOOR COMPETITION — ALL DATA LIVES HERE
   ══════════════════════════════════════════════

   THIS IS THE ONLY FILE YOU NEED TO EDIT.

   To post a new week:
     1. Add lines to the AWARDS list below (newest at the top).
     2. Change SEASON.updated to today's date.
     3. Save, refresh the page. Done.

   Standings, ranks, ties, category breakdowns, the activity log and
   every statistic are all worked out from AWARDS automatically.
   You never add up a total by hand, and nothing can fall out of sync.
   ================================================================== */

const SEASON = {
  name: "HLLC Floor Competition",
  term: "Fall 2026",
  tagline: "Wardall is Out of This World",
  starts: "2026-08-17",
  ends: "2026-12-18",
  updated: "2026-09-09",   // <-- bump this when you post new points
};

/* ------------------------------------------------------------------
   FLOORS
   `residents` is the roster size — it is the denominator for every
   turnout and completion percentage, so keep it current.
   `nickname` is just flavour; rename or blank them freely.
   ------------------------------------------------------------------ */
const FLOORS = [
  { number: 6,  ra: "Abo",      residents: 50, nickname: "The Sixth Sense", color: "#E84A27" },
  { number: 7,  ra: "Rediet",   residents: 52, nickname: "Lucky Seven",     color: "#FF6B47" },
  { number: 8,  ra: "Berenice", residents: 51, nickname: "Infinity Floor",  color: "#FFB347" },
  { number: 9,  ra: "Cameron",  residents: 50, nickname: "Cloud Nine",      color: "#4A90D9" },
  { number: 10, ra: "Eva",      residents: 51, nickname: "Perfect Ten",     color: "#50C878" },
  { number: 11, ra: "Tyler",    residents: 52, nickname: "The Eleven",      color: "#9B59B6" },
  { number: 12, ra: "Noelle",   residents: 48, nickname: "Top Floor",       color: "#E67E22" },
];

/* ------------------------------------------------------------------
   CATEGORIES — the confirmed Fall 2026 scoring rules.
   `award` is shown to residents so the rules stay public.
   ------------------------------------------------------------------ */
const CATEGORIES = [
  { id: "attendance",  name: "Event Attendance",       icon: "\u{1F31F}", award: "10 / 6 / 2",
    desc: "Placement by the share of your floor that turns out to HLLC events. RAs are not counted." },
  { id: "meetings",    name: "Floor Meetings",         icon: "\u{1F465}", award: "10 / 6 / 2",
    desc: "Placement by turnout percentage at your own floor meeting." },
  { id: "community",   name: "Community Initiatives",  icon: "\u{1F30C}", award: "15 / 13 / 11",
    desc: "RA-run initiatives, judged against the other floors." },
  { id: "iconvos",     name: "iConvos",                icon: "\u{1F4AC}", award: "15 / 13 / 11",
    desc: "Placement by iConvo completion percentage across the floor." },
  { id: "notes",       name: "Notes for Introduction", icon: "\u{1F4DD}", award: "10 / 8 / 6",
    desc: "Introduction notes returned by residents." },
  { id: "clean",       name: "Cleanest Floor",         icon: "\u{2728}",  award: "5 / week",
    desc: "Awarded each week to the floor the building service workers name cleanest." },
  { id: "nominations", name: "Resident Nominations",   icon: "\u{1F3C6}", award: "5 each",
    desc: "Five points per approved nomination from the resident nomination form." },
];

/* ------------------------------------------------------------------
   AWARDS — the whole competition, newest first.

   { date, floor, cat, pts, place, note }
     date  "YYYY-MM-DD"
     floor 6-12
     cat   an id from CATEGORIES above
     pts   points awarded (0 is fine — it still shows the result)
     place 1, 2, 3 … or null for flat awards. Tied floors share a place.
     note  the one line residents read. Say what earned it.
   ------------------------------------------------------------------ */
const AWARDS = [

  /* ---- Week of Sept 8 ---- */
  { date: "2026-09-08", floor: 6,  cat: "clean", pts: 5, place: null,
    note: "Cleanest floor of the week — named by the building service workers" },

  /* ---- Orientation & August events, Aug 17 - Sep 4 ----
     22 HLLC community events scored as ONE cumulative turnout figure.
     Scoring 22 events separately at 10/6/2 would put up to 190 points
     on attendance against roughly 60 for every other category all
     semester, and attendance would swallow the competition.
     Ranked by average turnout = check-ins / (roster x 22).           */
  { date: "2026-09-04", floor: 7,  cat: "attendance", pts: 10, place: 1,
    note: "Orientation & August events — 82 check-ins, 7.17% average turnout, 34 of 52 residents reached" },
  { date: "2026-09-04", floor: 9,  cat: "attendance", pts: 6,  place: 2,
    note: "Orientation & August events — 66 check-ins, 6.00% average turnout, 26 of 50 residents reached" },
  { date: "2026-09-04", floor: 11, cat: "attendance", pts: 2,  place: 3,
    note: "Orientation & August events — 58 check-ins, 5.07% average turnout, 20 of 52 residents reached" },
  { date: "2026-09-04", floor: 6,  cat: "attendance", pts: 0,  place: 4,
    note: "Orientation & August events — 54 check-ins, 4.91% average turnout, 24 of 50 residents reached" },
  { date: "2026-09-04", floor: 12, cat: "attendance", pts: 0,  place: 5,
    note: "Orientation & August events — 42 check-ins, 3.98% average turnout, 20 of 48 residents reached" },
  { date: "2026-09-04", floor: 10, cat: "attendance", pts: 0,  place: 6,
    note: "Orientation & August events — 38 check-ins, 3.39% average turnout, 21 of 51 residents reached" },
  { date: "2026-09-04", floor: 8,  cat: "attendance", pts: 0,  place: 7,
    note: "Orientation & August events — 37 check-ins, 3.30% average turnout, 21 of 51 residents reached" },

  /* ---- Floor Meeting #1, Aug 20 ---- */
  { date: "2026-08-20", floor: 12, cat: "meetings", pts: 10, place: 1,
    note: "Floor Meeting #1 — 37 of 48 residents (77.1%)" },
  { date: "2026-08-20", floor: 10, cat: "meetings", pts: 6,  place: 2,
    note: "Floor Meeting #1 — 34 of 51 residents (66.7%)" },
  { date: "2026-08-20", floor: 7,  cat: "meetings", pts: 2,  place: 3,
    note: "Floor Meeting #1 — 34 of 52 residents (65.4%) — tied for 3rd" },
  { date: "2026-08-20", floor: 11, cat: "meetings", pts: 2,  place: 3,
    note: "Floor Meeting #1 — 34 of 52 residents (65.4%) — tied for 3rd" },
  { date: "2026-08-20", floor: 6,  cat: "meetings", pts: 0,  place: 5,
    note: "Floor Meeting #1 — 31 of 50 residents (62.0%)" },
  { date: "2026-08-20", floor: 9,  cat: "meetings", pts: 0,  place: 6,
    note: "Floor Meeting #1 — 29 of 50 residents (58.0%)" },
  { date: "2026-08-20", floor: 8,  cat: "meetings", pts: 0,  place: 7,
    note: "Floor Meeting #1 — 20 of 51 residents (39.2%)" },

];

/* ------------------------------------------------------------------
   MILESTONES — plain notes for the About page. Optional.
   ------------------------------------------------------------------ */
const NOTES_FOR_RESIDENTS = [
  "Attendance is counted from Roompact sign-ins. Sign in at every event — if you are not scanned, your floor gets nothing for you.",
  "The RA's own sign-in never counts toward their floor.",
  "Duplicate sign-ins at the same event count once.",
  "Ties share the place and share the points. This competition runs all year, so there is nothing to break.",
];

/* ==================================================================
   DERIVED — nothing below here needs editing.
   ================================================================== */

function getFloor(num) {
  return FLOORS.find((f) => f.number === num);
}

function floorLabel(num) {
  return "FLOOR " + String(num).padStart(2, "0");
}

function categoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}

/** Total for one floor: the sum of its awards. Never stored. */
function totalScore(floorNum) {
  return AWARDS.filter((a) => a.floor === floorNum)
    .reduce((sum, a) => sum + a.pts, 0);
}

/** Per-category totals for one floor, in CATEGORIES order. */
function breakdownFor(floorNum) {
  return CATEGORIES.map((c) => ({
    id: c.id,
    name: c.name,
    points: AWARDS.filter((a) => a.floor === floorNum && a.cat === c.id)
      .reduce((sum, a) => sum + a.pts, 0),
  }));
}

/** Standings, highest first. Tied floors share a rank. */
function buildStandings() {
  const rows = FLOORS.map((f) => ({
    ...f,
    score: totalScore(f.number),
    entries: AWARDS.filter((a) => a.floor === f.number && a.pts > 0).length,
    categoryBreakdown: breakdownFor(f.number),
  }));

  rows.sort((a, b) => b.score - a.score || a.number - b.number);

  const top = rows.length ? rows[0].score : 0;
  let rank = 0;
  let previous = null;
  rows.forEach((row, i) => {
    if (row.score !== previous) {
      rank = i + 1;
      previous = row.score;
    }
    row.rank = rank;
    row.meter = top > 0 ? row.score / top : 0;
  });

  const counts = {};
  rows.forEach((r) => { counts[r.rank] = (counts[r.rank] || 0) + 1; });
  rows.forEach((r) => { r.isTied = counts[r.rank] > 1; });

  return rows;
}

function totalPointsAwarded() {
  return AWARDS.reduce((sum, a) => sum + a.pts, 0);
}

/** Distinct scoring occasions — an event scored across 7 floors counts once. */
function totalEvents() {
  return new Set(AWARDS.map((a) => a.date + "|" + a.cat)).size;
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d)
    .toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function daysIntoSeason() {
  const start = new Date(SEASON.starts + "T00:00:00");
  const days = Math.floor((Date.now() - start) / 86400000);
  return Math.max(0, days);
}

/** Awards grouped into the occasions they belong to, newest first. */
function buildOccasions() {
  const map = new Map();
  for (const a of AWARDS) {
    const key = a.date + "|" + a.cat;
    if (!map.has(key)) map.set(key, { date: a.date, cat: a.cat, rows: [] });
    map.get(key).rows.push(a);
  }
  const list = [...map.values()];
  list.forEach((o) => o.rows.sort((x, y) => (x.place || 99) - (y.place || 99)));
  list.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return list;
}
