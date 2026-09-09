/* ==================================================================
   HLLC FLOOR COMPETITION — ALL DATA LIVES HERE
   ══════════════════════════════════════════════

   THIS IS THE ONLY FILE YOU NEED TO EDIT.

   To post new points:
     1. Add lines to the AWARDS list below (newest at the top).
     2. Change SEASON.updated to today's date.
     3. Save, refresh the page. Done.

   Standings, ranks, ties, category breakdowns, the activity log and
   every statistic are worked out from AWARDS automatically. You never
   add up a total by hand, and nothing can fall out of sync.
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
   `residents` is the roster size. It is the denominator for the
   percentage categories (floor meetings, iConvos), so keep it current.
   `nickname` is flavour only — rename or blank them freely.
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
   CATEGORIES — the Fall 2026 scoring rules.

   There are two kinds of event, and they are scored differently on
   purpose:

     SHARED events — every HLLC floor is invited. A genuine contest,
       so every resident who signs in is worth a point, uncapped.

     FLOOR events — only your own floor is invited, so there is nobody
       to compete against. iConvos and floor meetings are ranked on the
       PERCENTAGE of your floor that took part, top three only. Your
       RA's own programming is scored on a THRESHOLD LADDER, which
       rewards real turnout without letting a floor win the year by
       running more events than everyone else.

   `kind` drives how the site explains the category to residents.
   ------------------------------------------------------------------ */
const CATEGORIES = [
  { id: "attendance",  name: "Shared HLLC Events",     icon: "\u{1F31F}", kind: "per-person",
    award: "1 per resident",
    desc: "Every resident of your floor who signs in at an HLLC event is one point. No cap, no placement — turn out and you score." },

  { id: "meetings",    name: "Floor Meetings",         icon: "\u{1F465}", kind: "percentage",
    award: "40 / 30 / 20",
    desc: "Ranked on the percentage of your floor that comes to its own meeting. Top three score. A percentage, so a 48-resident floor is not at a disadvantage." },

  { id: "iconvos",     name: "iConvos",                icon: "\u{1F4AC}", kind: "percentage",
    award: "100 / 75 / 50",
    desc: "Ranked on the percentage of your floor that completes an iConvo with their RA. Top three score." },

  { id: "programming", name: "Floor Programming",      icon: "\u{1F389}", kind: "threshold",
    award: "5 / 10 / 20 / 30",
    desc: "Your RA's own floor events, scored on how many residents turn up: 5+ earns 5, 10+ earns 10, 20+ earns 20, 30+ earns 30. Capped at 30 so nobody wins on volume alone." },

  { id: "community",   name: "Community Initiatives",  icon: "\u{1F30C}", kind: "judged",
    award: "60 / 45 / 30",
    desc: "RA-run initiatives judged against the other floors by the Honors LLC staff." },

  { id: "notes",       name: "Notes for Introduction", icon: "\u{1F4DD}", kind: "per-person",
    award: "1 each",
    desc: "One point for every introduction note a resident returns." },

  { id: "clean",       name: "Cleanest Floor",         icon: "\u{2728}",  kind: "weekly",
    award: "25 / week",
    desc: "Awarded each week to the floor the building service workers name cleanest." },

  { id: "nominations", name: "Resident Nominations",   icon: "\u{1F3C6}", kind: "flat",
    award: "10 each",
    desc: "Ten points for every approved nomination from the resident nomination form. No cap." },
];

/* ------------------------------------------------------------------
   AWARDS — the whole competition, newest first.

   { date, floor, cat, pts, place, note, reached }
     date    "YYYY-MM-DD"
     floor   6-12
     cat     an id from CATEGORIES above
     pts     points awarded (0 is fine — it still shows the result)
     place   1, 2, 3 … for the percentage and judged categories.
             null for per-person, threshold and flat awards.
             Tied floors share a place AND the points.
     note    the one line residents read. Usually the event name.
     reached OPTIONAL but fill it in whenever you have a headcount.
             The site turns it into "20 of 51 · 39.2%" with a bar, so a
             floor that showed up and missed the top three still has
             its effort on the page instead of a bare zero.

   For a SHARED event, pts and reached are the same number.
   For a FLOOR MEETING, reached is the headcount and pts is 40/30/20.
   For FLOOR PROGRAMMING, reached is the headcount and pts is the
   threshold it clears.
   ------------------------------------------------------------------ */
const AWARDS = [

  // 2026-09-04  Resumes & Chipotle
  { date: "2026-09-04", floor: 9, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Resumes & Chipotle" },
  { date: "2026-09-04", floor: 10, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Resumes & Chipotle" },
  { date: "2026-09-04", floor: 12, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Resumes & Chipotle" },
  { date: "2026-09-04", floor: 6, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Resumes & Chipotle" },
  { date: "2026-09-04", floor: 7, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Resumes & Chipotle" },
  { date: "2026-09-04", floor: 11, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Resumes & Chipotle" },
  // 2026-09-04  World Sexual Health Day Tabling — no sign-ins recorded
  // 2026-09-03  Study & Snacks
  { date: "2026-09-03", floor: 7, cat: "attendance", pts: 10, place: null, reached: 10,
    note: "Study & Snacks" },
  { date: "2026-09-03", floor: 8, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Study & Snacks" },
  { date: "2026-09-03", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Study & Snacks" },
  { date: "2026-09-03", floor: 9, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Study & Snacks" },
  { date: "2026-09-03", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Study & Snacks" },
  { date: "2026-09-03", floor: 11, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Study & Snacks" },
  // 2026-08-30  Picnic on the Quad
  { date: "2026-08-30", floor: 9, cat: "attendance", pts: 9, place: null, reached: 9,
    note: "Picnic on the Quad" },
  { date: "2026-08-30", floor: 7, cat: "attendance", pts: 6, place: null, reached: 6,
    note: "Picnic on the Quad" },
  { date: "2026-08-30", floor: 6, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Picnic on the Quad" },
  { date: "2026-08-30", floor: 10, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Picnic on the Quad" },
  { date: "2026-08-30", floor: 11, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Picnic on the Quad" },
  { date: "2026-08-30", floor: 12, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Picnic on the Quad" },
  // 2026-08-24  S'mores Night
  { date: "2026-08-24", floor: 7, cat: "attendance", pts: 20, place: null, reached: 20,
    note: "S'mores Night" },
  { date: "2026-08-24", floor: 6, cat: "attendance", pts: 13, place: null, reached: 13,
    note: "S'mores Night" },
  { date: "2026-08-24", floor: 9, cat: "attendance", pts: 9, place: null, reached: 9,
    note: "S'mores Night" },
  { date: "2026-08-24", floor: 10, cat: "attendance", pts: 9, place: null, reached: 9,
    note: "S'mores Night" },
  { date: "2026-08-24", floor: 11, cat: "attendance", pts: 8, place: null, reached: 8,
    note: "S'mores Night" },
  { date: "2026-08-24", floor: 12, cat: "attendance", pts: 8, place: null, reached: 8,
    note: "S'mores Night" },
  { date: "2026-08-24", floor: 8, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "S'mores Night" },
  // 2026-08-24  First Day of School Photos
  { date: "2026-08-24", floor: 6, cat: "attendance", pts: 10, place: null, reached: 10,
    note: "First Day of School Photos" },
  { date: "2026-08-24", floor: 9, cat: "attendance", pts: 10, place: null, reached: 10,
    note: "First Day of School Photos" },
  { date: "2026-08-24", floor: 11, cat: "attendance", pts: 7, place: null, reached: 7,
    note: "First Day of School Photos" },
  { date: "2026-08-24", floor: 12, cat: "attendance", pts: 7, place: null, reached: 7,
    note: "First Day of School Photos" },
  { date: "2026-08-24", floor: 8, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "First Day of School Photos" },
  { date: "2026-08-24", floor: 7, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "First Day of School Photos" },
  { date: "2026-08-24", floor: 10, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "First Day of School Photos" },
  // 2026-08-20  Grainger James Scholar Lunch with Marie-Pierre
  { date: "2026-08-20", floor: 9, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Grainger James Scholar Lunch with Marie-Pierre" },
  { date: "2026-08-20", floor: 11, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Grainger James Scholar Lunch with Marie-Pierre" },
  { date: "2026-08-20", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Grainger James Scholar Lunch with Marie-Pierre" },
  { date: "2026-08-20", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Grainger James Scholar Lunch with Marie-Pierre" },
  { date: "2026-08-20", floor: 12, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Grainger James Scholar Lunch with Marie-Pierre" },
  { date: "2026-08-20", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Grainger James Scholar Lunch with Marie-Pierre" },
  // 2026-08-20  Speed Friending
  { date: "2026-08-20", floor: 6, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Speed Friending" },
  { date: "2026-08-20", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Speed Friending" },
  // 2026-08-20  Human BINGO
  { date: "2026-08-20", floor: 11, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Human BINGO" },
  // 2026-08-19  Glow in the Dark Capture the Flag — no sign-ins recorded
  // 2026-08-19  Karaoke & Ice Cream Social
  { date: "2026-08-19", floor: 7, cat: "attendance", pts: 9, place: null, reached: 9,
    note: "Karaoke & Ice Cream Social" },
  { date: "2026-08-19", floor: 8, cat: "attendance", pts: 8, place: null, reached: 8,
    note: "Karaoke & Ice Cream Social" },
  { date: "2026-08-19", floor: 9, cat: "attendance", pts: 8, place: null, reached: 8,
    note: "Karaoke & Ice Cream Social" },
  { date: "2026-08-19", floor: 11, cat: "attendance", pts: 8, place: null, reached: 8,
    note: "Karaoke & Ice Cream Social" },
  { date: "2026-08-19", floor: 6, cat: "attendance", pts: 6, place: null, reached: 6,
    note: "Karaoke & Ice Cream Social" },
  { date: "2026-08-19", floor: 12, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Karaoke & Ice Cream Social" },
  { date: "2026-08-19", floor: 10, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Karaoke & Ice Cream Social" },
  // 2026-08-19  Dinner with National & International Scholarships Pr
  { date: "2026-08-19", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Dinner with National & International Scholarships Program" },
  { date: "2026-08-19", floor: 9, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Dinner with National & International Scholarships Program" },
  { date: "2026-08-19", floor: 12, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Dinner with National & International Scholarships Program" },
  // 2026-08-19  T-shirt Tie Dye
  { date: "2026-08-19", floor: 7, cat: "attendance", pts: 16, place: null, reached: 16,
    note: "T-shirt Tie Dye" },
  { date: "2026-08-19", floor: 11, cat: "attendance", pts: 12, place: null, reached: 12,
    note: "T-shirt Tie Dye" },
  { date: "2026-08-19", floor: 12, cat: "attendance", pts: 11, place: null, reached: 11,
    note: "T-shirt Tie Dye" },
  { date: "2026-08-19", floor: 9, cat: "attendance", pts: 10, place: null, reached: 10,
    note: "T-shirt Tie Dye" },
  { date: "2026-08-19", floor: 10, cat: "attendance", pts: 8, place: null, reached: 8,
    note: "T-shirt Tie Dye" },
  { date: "2026-08-19", floor: 6, cat: "attendance", pts: 7, place: null, reached: 7,
    note: "T-shirt Tie Dye" },
  { date: "2026-08-19", floor: 8, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "T-shirt Tie Dye" },
  // 2026-08-19  Lunch with LAS Honors
  { date: "2026-08-19", floor: 7, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "Lunch with LAS Honors" },
  { date: "2026-08-19", floor: 10, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Lunch with LAS Honors" },
  { date: "2026-08-19", floor: 8, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Lunch with LAS Honors" },
  // 2026-08-19  Lunch with FAA Honors Staff — no sign-ins recorded
  // 2026-08-19  Yoga Class with Campus Rec
  { date: "2026-08-19", floor: 11, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Yoga Class with Campus Rec" },
  { date: "2026-08-19", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Yoga Class with Campus Rec" },
  { date: "2026-08-19", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Yoga Class with Campus Rec" },
  { date: "2026-08-19", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Yoga Class with Campus Rec" },
  { date: "2026-08-19", floor: 9, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Yoga Class with Campus Rec" },
  // 2026-08-19  Pot Painting & Succulent Planting
  { date: "2026-08-19", floor: 9, cat: "attendance", pts: 7, place: null, reached: 7,
    note: "Pot Painting & Succulent Planting" },
  { date: "2026-08-19", floor: 8, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "Pot Painting & Succulent Planting" },
  { date: "2026-08-19", floor: 11, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Pot Painting & Succulent Planting" },
  { date: "2026-08-19", floor: 12, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Pot Painting & Succulent Planting" },
  { date: "2026-08-19", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Pot Painting & Succulent Planting" },
  { date: "2026-08-19", floor: 6, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Pot Painting & Succulent Planting" },
  { date: "2026-08-19", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Pot Painting & Succulent Planting" },
  // 2026-08-18  Stations on Main Street at ISR — no sign-ins recorded
  // 2026-08-18  Dinner with HLLC Program Assistants — no sign-ins recorded
  // 2026-08-18  Speed Friending
  { date: "2026-08-18", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Speed Friending" },
  { date: "2026-08-18", floor: 10, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Speed Friending" },
  { date: "2026-08-18", floor: 9, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Speed Friending" },
  // 2026-08-17  Board Games & Crumbl Cookies
  { date: "2026-08-17", floor: 11, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Board Games & Crumbl Cookies" },
  { date: "2026-08-17", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Board Games & Crumbl Cookies" },
  { date: "2026-08-17", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Board Games & Crumbl Cookies" },
  { date: "2026-08-17", floor: 6, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Board Games & Crumbl Cookies" },
  { date: "2026-08-17", floor: 12, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Board Games & Crumbl Cookies" },
  // 2026-08-17  Dinner with HLLC Program Assistants
  { date: "2026-08-17", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Dinner with HLLC Program Assistants" },
  { date: "2026-08-17", floor: 11, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Dinner with HLLC Program Assistants" },
  // 2026-08-31  Pizza and Planes — Floor 11 only (threshold ladder)
  { date: "2026-08-31", floor: 11, cat: "programming", pts: 20, place: null, reached: 26,
    note: "Pizza and Planes — Tyler's floor event" },
  // 2026-08-20  Floor Meeting #1 — placement by turnout percentage
  { date: "2026-08-20", floor: 12, cat: "meetings", pts: 40, place: 1, reached: 37,
    note: "Floor Meeting #1" },
  { date: "2026-08-20", floor: 10, cat: "meetings", pts: 30, place: 2, reached: 34,
    note: "Floor Meeting #1" },
  { date: "2026-08-20", floor: 7, cat: "meetings", pts: 20, place: 3, reached: 34,
    note: "Floor Meeting #1 — tied for 3rd" },
  { date: "2026-08-20", floor: 11, cat: "meetings", pts: 20, place: 3, reached: 34,
    note: "Floor Meeting #1 — tied for 3rd" },
  { date: "2026-08-20", floor: 6, cat: "meetings", pts: 0, place: 5, reached: 31,
    note: "Floor Meeting #1" },
  { date: "2026-08-20", floor: 9, cat: "meetings", pts: 0, place: 6, reached: 29,
    note: "Floor Meeting #1" },
  { date: "2026-08-20", floor: 8, cat: "meetings", pts: 0, place: 7, reached: 20,
    note: "Floor Meeting #1" },

  /* ---- Week of Sept 8 ---- */
  { date: "2026-09-08", floor: 6, cat: "clean", pts: 25, place: null,
    note: "Cleanest floor of the week — named by the building service workers" },

];

/* ------------------------------------------------------------------
   NOTES_FOR_RESIDENTS — the counting rules, shown on the Scoring page.
   ------------------------------------------------------------------ */
const NOTES_FOR_RESIDENTS = [
  "Attendance is counted from Roompact sign-ins. Sign in at every event — if you are not scanned, your floor gets nothing for you, however many of you were there.",
  "The RA's own sign-in never counts toward their floor.",
  "Signing in twice at the same event counts once.",
  "Ties share the place and share the points. This competition runs all year, so there is nothing to break.",
  "Floor meetings and iConvos are scored on a percentage of your own roster, so a smaller floor is never at a disadvantage.",
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

/** Distinct scoring occasions — one event scored across 7 floors counts once. */
function totalEvents() {
  return new Set(AWARDS.map((a) => a.date + "|" + a.cat + "|" + (a.note || ""))).size;
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

/**
 * Awards grouped into the occasions they belong to, newest first.
 *
 * Keyed on date + category + note, not just date + category: several
 * different shared events happen on the same day (Aug 19 had eight), and
 * each deserves its own block in the log rather than being merged.
 */
function buildOccasions() {
  const map = new Map();
  for (const a of AWARDS) {
    const key = a.date + "|" + a.cat + "|" + (a.note || "");
    if (!map.has(key)) {
      map.set(key, { date: a.date, cat: a.cat, title: a.note || "", rows: [] });
    }
    map.get(key).rows.push(a);
  }
  const list = [...map.values()];
  // Within an occasion: by place if it is a placement category, else by points.
  list.forEach((o) =>
    o.rows.sort((x, y) =>
      x.place || y.place ? (x.place || 99) - (y.place || 99) : y.pts - x.pts,
    ),
  );
  list.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return list;
}

/** How many distinct results have been posted. */
function occasionCount() {
  return buildOccasions().length;
}

/* ------------------------------------------------------------------
   Helpers for the "how points work" explainer on the home page.
   ------------------------------------------------------------------ */

/** Categories that have never been scored — still completely open. */
function uncontestedCategories() {
  return CATEGORIES.filter((c) => !AWARDS.some((a) => a.cat === c.id));
}

/** Whole weeks left in the season, floored at 0. */
function weeksRemaining() {
  const end = new Date(SEASON.ends + "T00:00:00");
  return Math.max(0, Math.floor((end - Date.now()) / (86400000 * 7)));
}

/** Cleanliness is the one category with a known cadence, so it can be projected. */
function cleanlinessStillToCome() {
  const clean = categoryById("clean");
  const per = clean ? Number(String(clean.award).match(/\d+/)[0]) : 0;
  return weeksRemaining() * per;
}

/** How many residents of a floor took part in a given award, if recorded. */
function reachedFor(award) {
  if (typeof award.reached !== "number") return null;
  const f = getFloor(award.floor);
  if (!f || !f.residents) return null;
  return { came: award.reached, of: f.residents, pct: (award.reached / f.residents) * 100 };
}

/** Total recorded participation for a floor — used to show effort next to points. */
function participationFor(floorNum) {
  const rows = AWARDS.filter((a) => a.floor === floorNum && typeof a.reached === "number");
  if (!rows.length) return null;
  const f = getFloor(floorNum);
  const best = Math.max(...rows.map((r) => r.reached));
  return {
    results: rows.length,
    best: best,
    of: f.residents,
    bestPct: (best / f.residents) * 100,
  };
}
