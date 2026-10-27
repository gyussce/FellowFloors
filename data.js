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
  updated: "2026-10-27",   // <-- bump this when you post new points
};

/* ------------------------------------------------------------------
   FLOORS
   `residents` is the roster size. It is the denominator for the
   turnout displays and percentage categories, so keep it current.
   `nickname` is flavour only — rename or blank them freely.
   ------------------------------------------------------------------ */
const FLOORS = [
  { number: 6,  ra: "Abo",      residents: 50, nickname: "The Sixth Sense", color: "#E84A27" },
  { number: 7,  ra: "Rediet",   residents: 52, nickname: "Lucky Seven",     color: "#FF6B47" },
  { number: 8,  ra: "Berenice", residents: 51, nickname: "Infinity Floor",  color: "#FFB347" },
  { number: 9,  ra: "Cameron",  residents: 49, nickname: "Cloud Nine",      color: "#4A90D9" },
  { number: 10, ra: "Eva",      residents: 51, nickname: "Perfect Ten",     color: "#50C878" },
  { number: 11, ra: "Tyler",    residents: 52, nickname: "The Eleven",      color: "#9B59B6" },
  { number: 12, ra: "Noelle",   residents: 48, nickname: "Top Floor",       color: "#E67E22" },
];

/* ------------------------------------------------------------------
   CATEGORIES — the Fall 2026 scoring rules.

   Shared HLLC events, floor meetings and floor programming earn one
   point per resident. Meetings count only the floor's own residents;
   programming visitors earn points for their own floor.
   Other categories and advertised bonuses follow the rules below.

   `kind` drives how the site explains the category to residents.
   ------------------------------------------------------------------ */
const CATEGORIES = [
  { id: "attendance",  name: "Shared HLLC Events",     icon: "\u{1F31F}", kind: "per-person",
    award: "1 per resident",
    desc: "Every resident of your floor who signs in at an HLLC event is one point. No cap, no placement — turn out and you score." },

  { id: "meetings",    name: "Floor Meetings",         icon: "\u{1F465}", kind: "per-person",
    award: "1 per resident",
    desc: "Every resident of your floor who comes to its meeting is one point. No cap and no placement — the more of your floor turns up, the more you score." },

  { id: "iconvos",     name: "iConvos",                icon: "\u{1F4AC}", kind: "completion",
    award: "1 per completion + 15 / 10 / 5 bonus",
    desc: "One point per completed iConvo, plus 15, 10 or 5 bonus points for 1st, 2nd or 3rd by completion percentage. Ties share the place and bonus, with the following places skipped. Every floor tied at 100% gets the 15-point first-place bonus." },

  { id: "appraisals",  name: "RA Appraisals",          icon: "\u{1F4CB}", kind: "per-person",
    award: "1 per completed appraisal",
    desc: "One point for each resident's completed RA appraisal. Counts are supplied by HLLC staff." },

  { id: "programming", name: "Floor Programming",      icon: "\u{1F389}", kind: "per-person",
    award: "1 per resident",
    desc: "Your RA's own floor events. Every resident who turns up is one point, and anyone visiting from another floor earns that point for their own floor instead." },

  { id: "community",   name: "Community Initiatives",  icon: "\u{1F30C}", kind: "initiative",
    award: "1 per resident + 2 per win",
    desc: "Hall-wide initiative nights run for the whole building. Scored like a shared event — every resident of your floor who signs in is one point — plus two points for each game or contest one of your residents wins. Some nights are advertised as double points." },

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
     mult    OPTIONAL. The multiplier on a double-points night, e.g. `mult: 2`.
             `pts` must already be the multiplied figure — this field only
             tells the site to show a "2× POINTS" badge and explain the maths,
             so residents can see why the score is not the headcount.
     reached OPTIONAL but fill it in whenever you have a headcount.
             The site turns it into "20 of 51 · 39.2%" with a bar, so a
             floor that showed up and missed the top three still has
             its effort on the page instead of a bare zero.

   For a SHARED event, pts and reached are the same number.
   For a FLOOR MEETING or FLOOR PROGRAMMING, pts and reached are the
   same headcount. Earlier awards may retain the rules used when posted.
   ------------------------------------------------------------------ */
const AWARDS = [

  // Oct 12–27 Roompact audit: reviewed 55 past listings and the current-events list.
  // Counted Wardall, Honors LLC and ISR events only. Fifteen attendee lists checked;
  // Townsend 5th Floor South: Chipotle Dinner (Ld9YGY) had no eligible residents.
  // One point per unique resident name + assignment per event; excluded RAs,
  // repeated check-ins and residents outside Wardall floors 6–12.

  // 2026-10-26 — Roompact r1JPdK; 1 eligible residents.
  { date: "2026-10-26", floor: 6, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Spooky Showing Event" },
  { date: "2026-10-26", floor: 7, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Spooky Showing Event" },
  { date: "2026-10-26", floor: 8, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Spooky Showing Event" },
  { date: "2026-10-26", floor: 9, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Spooky Showing Event" },
  { date: "2026-10-26", floor: 10, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Spooky Showing Event" },
  { date: "2026-10-26", floor: 11, cat: "programming", pts: 1, place: null, reached: 1,
    note: "Spooky Showing Event" },
  { date: "2026-10-26", floor: 12, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Spooky Showing Event" },

  // 2026-10-22 — Roompact 7WV6yB; 17 eligible residents.
  { date: "2026-10-22", floor: 6, cat: "programming", pts: 14, place: null, reached: 14,
    note: "Brains for Bundt" },
  { date: "2026-10-22", floor: 7, cat: "programming", pts: 2, place: null, reached: 2,
    note: "Brains for Bundt" },
  { date: "2026-10-22", floor: 8, cat: "programming", pts: 1, place: null, reached: 1,
    note: "Brains for Bundt" },
  { date: "2026-10-22", floor: 9, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Brains for Bundt" },
  { date: "2026-10-22", floor: 10, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Brains for Bundt" },
  { date: "2026-10-22", floor: 11, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Brains for Bundt" },
  { date: "2026-10-22", floor: 12, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Brains for Bundt" },

  // 2026-10-22 — Roompact 7KPolP; 27 eligible residents.
  { date: "2026-10-22", floor: 6, cat: "attendance", pts: 9, place: null, reached: 9,
    note: "Honors Living-Learning Community Board Game Cafe" },
  { date: "2026-10-22", floor: 7, cat: "attendance", pts: 9, place: null, reached: 9,
    note: "Honors Living-Learning Community Board Game Cafe" },
  { date: "2026-10-22", floor: 8, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Honors Living-Learning Community Board Game Cafe" },
  { date: "2026-10-22", floor: 9, cat: "attendance", pts: 8, place: null, reached: 8,
    note: "Honors Living-Learning Community Board Game Cafe" },
  { date: "2026-10-22", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Honors Living-Learning Community Board Game Cafe" },
  { date: "2026-10-22", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Honors Living-Learning Community Board Game Cafe" },
  { date: "2026-10-22", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Honors Living-Learning Community Board Game Cafe" },

  // 2026-10-22 — Roompact 7o2g0Y; 2 eligible residents.
  { date: "2026-10-22", floor: 6, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Spookie Cookie Decorating" },
  { date: "2026-10-22", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Spookie Cookie Decorating" },
  { date: "2026-10-22", floor: 8, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Spookie Cookie Decorating" },
  { date: "2026-10-22", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Spookie Cookie Decorating" },
  { date: "2026-10-22", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Spookie Cookie Decorating" },
  { date: "2026-10-22", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Spookie Cookie Decorating" },
  { date: "2026-10-22", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Spookie Cookie Decorating" },

  // 2026-10-21 — Roompact L5e8y6; 1 eligible residents.
  { date: "2026-10-21", floor: 6, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/21" },
  { date: "2026-10-21", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/21" },
  { date: "2026-10-21", floor: 8, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Hall Council Meeting - 10/21" },
  { date: "2026-10-21", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/21" },
  { date: "2026-10-21", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/21" },
  { date: "2026-10-21", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/21" },
  { date: "2026-10-21", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/21" },

  // 2026-10-21 — Roompact L5eq1v; 3 eligible residents.
  { date: "2026-10-21", floor: 6, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Taste of Townsend" },
  { date: "2026-10-21", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Taste of Townsend" },
  { date: "2026-10-21", floor: 8, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Taste of Townsend" },
  { date: "2026-10-21", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Taste of Townsend" },
  { date: "2026-10-21", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Taste of Townsend" },
  { date: "2026-10-21", floor: 11, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Taste of Townsend" },
  { date: "2026-10-21", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Taste of Townsend" },

  // 2026-10-20 — Roompact L3YlJA; 26 eligible residents.
  { date: "2026-10-20", floor: 6, cat: "programming", pts: 0, place: null, reached: 0,
    note: "7/11 Game Night" },
  { date: "2026-10-20", floor: 7, cat: "programming", pts: 15, place: null, reached: 15,
    note: "7/11 Game Night" },
  { date: "2026-10-20", floor: 8, cat: "programming", pts: 1, place: null, reached: 1,
    note: "7/11 Game Night" },
  { date: "2026-10-20", floor: 9, cat: "programming", pts: 0, place: null, reached: 0,
    note: "7/11 Game Night" },
  { date: "2026-10-20", floor: 10, cat: "programming", pts: 0, place: null, reached: 0,
    note: "7/11 Game Night" },
  { date: "2026-10-20", floor: 11, cat: "programming", pts: 10, place: null, reached: 10,
    note: "7/11 Game Night" },
  { date: "2026-10-20", floor: 12, cat: "programming", pts: 0, place: null, reached: 0,
    note: "7/11 Game Night" },

  // 2026-10-19 — Roompact 7o2dMr; 20 eligible residents.
  { date: "2026-10-19", floor: 6, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 12 Chip Championship" },
  { date: "2026-10-19", floor: 7, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 12 Chip Championship" },
  { date: "2026-10-19", floor: 8, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 12 Chip Championship" },
  { date: "2026-10-19", floor: 9, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 12 Chip Championship" },
  { date: "2026-10-19", floor: 10, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 12 Chip Championship" },
  { date: "2026-10-19", floor: 11, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 12 Chip Championship" },
  { date: "2026-10-19", floor: 12, cat: "programming", pts: 20, place: null, reached: 20,
    note: "Wardall Floor 12 Chip Championship" },

  // 2026-10-18 — Roompact b2aGa1; 5 eligible residents.
  { date: "2026-10-18", floor: 6, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Bob Ross Painting & Rosati's" },
  { date: "2026-10-18", floor: 7, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Bob Ross Painting & Rosati's" },
  { date: "2026-10-18", floor: 8, cat: "programming", pts: 3, place: null, reached: 3,
    note: "Bob Ross Painting & Rosati's" },
  { date: "2026-10-18", floor: 9, cat: "programming", pts: 1, place: null, reached: 1,
    note: "Bob Ross Painting & Rosati's" },
  { date: "2026-10-18", floor: 10, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Bob Ross Painting & Rosati's" },
  { date: "2026-10-18", floor: 11, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Bob Ross Painting & Rosati's" },
  { date: "2026-10-18", floor: 12, cat: "programming", pts: 1, place: null, reached: 1,
    note: "Bob Ross Painting & Rosati's" },

  // 2026-10-15 — Roompact b0p5MB; 15 eligible residents.
  { date: "2026-10-15", floor: 6, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "October 15 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-15", floor: 7, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "October 15 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-15", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "October 15 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-15", floor: 9, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "October 15 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-15", floor: 10, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "October 15 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-15", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "October 15 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-15", floor: 12, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "October 15 2026 Honors Living-Learning Community Study & Snacks" },

  // 2026-10-15 — Roompact LqPO9r; 21 eligible residents.
  { date: "2026-10-15", floor: 6, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 10 CI 2" },
  { date: "2026-10-15", floor: 7, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 10 CI 2" },
  { date: "2026-10-15", floor: 8, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 10 CI 2" },
  { date: "2026-10-15", floor: 9, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 10 CI 2" },
  { date: "2026-10-15", floor: 10, cat: "programming", pts: 21, place: null, reached: 21,
    note: "Wardall Floor 10 CI 2" },
  { date: "2026-10-15", floor: 11, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 10 CI 2" },
  { date: "2026-10-15", floor: 12, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall Floor 10 CI 2" },

  // 2026-10-14 — Roompact LBW6np; 13 eligible residents.
  { date: "2026-10-14", floor: 6, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "The Taste and Influence of the African Diaspora with Dr. Jakia Marie" },
  { date: "2026-10-14", floor: 7, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "The Taste and Influence of the African Diaspora with Dr. Jakia Marie" },
  { date: "2026-10-14", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "The Taste and Influence of the African Diaspora with Dr. Jakia Marie" },
  { date: "2026-10-14", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "The Taste and Influence of the African Diaspora with Dr. Jakia Marie" },
  { date: "2026-10-14", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "The Taste and Influence of the African Diaspora with Dr. Jakia Marie" },
  { date: "2026-10-14", floor: 11, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "The Taste and Influence of the African Diaspora with Dr. Jakia Marie" },
  { date: "2026-10-14", floor: 12, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "The Taste and Influence of the African Diaspora with Dr. Jakia Marie" },

  // 2026-10-14 — Roompact bEaq4r; 9 eligible residents.
  { date: "2026-10-14", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Honors LLC Pillowpalooza" },
  { date: "2026-10-14", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Honors LLC Pillowpalooza" },
  { date: "2026-10-14", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Honors LLC Pillowpalooza" },
  { date: "2026-10-14", floor: 9, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Honors LLC Pillowpalooza" },
  { date: "2026-10-14", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Honors LLC Pillowpalooza" },
  { date: "2026-10-14", floor: 11, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Honors LLC Pillowpalooza" },
  { date: "2026-10-14", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Honors LLC Pillowpalooza" },

  // 2026-10-14 — Roompact 7Q9KRz; 4 eligible residents.
  { date: "2026-10-14", floor: 6, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Hall Council Meeting - 10/14" },
  { date: "2026-10-14", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/14" },
  { date: "2026-10-14", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Hall Council Meeting - 10/14" },
  { date: "2026-10-14", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/14" },
  { date: "2026-10-14", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/14" },
  { date: "2026-10-14", floor: 11, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Hall Council Meeting - 10/14" },
  { date: "2026-10-14", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Hall Council Meeting - 10/14" },

  // RA appraisal points supplied by Abo on Oct 11; one point per completion.
  { date: "2026-10-11", floor: 6, cat: "appraisals", pts: 50, place: null, reached: 50,
    note: "RA Appraisals" },
  { date: "2026-10-11", floor: 7, cat: "appraisals", pts: 26, place: null, reached: 26,
    note: "RA Appraisals" },
  { date: "2026-10-11", floor: 8, cat: "appraisals", pts: 19, place: null, reached: 19,
    note: "RA Appraisals" },
  { date: "2026-10-11", floor: 9, cat: "appraisals", pts: 49, place: null, reached: 49,
    note: "RA Appraisals" },
  { date: "2026-10-11", floor: 10, cat: "appraisals", pts: 36, place: null, reached: 36,
    note: "RA Appraisals" },
  { date: "2026-10-11", floor: 11, cat: "appraisals", pts: 31, place: null, reached: 31,
    note: "RA Appraisals" },
  { date: "2026-10-11", floor: 12, cat: "appraisals", pts: 48, place: null, reached: 48,
    note: "RA Appraisals" },

  // Sept 28–Oct 11 audit: reviewed all 49 past listings across location tags,
  // plus the current-events list. Eight Wardall, Honors LLC or ISR events qualified.
  // Counted unique visible resident name + assignment entries per event;
  // removed repeated check-ins, RA entries and residents outside Wardall floors 6–12.
  // Campus-wide events outside Wardall/Honors LLC/ISR are excluded by Abo's instruction.

  // 2026-10-11 — Roompact event xaB0Wk; 1 eligible residents.
  { date: "2026-10-11", floor: 6, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Black girl Relaxation" },
  { date: "2026-10-11", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Black girl Relaxation" },
  { date: "2026-10-11", floor: 8, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Black girl Relaxation" },
  { date: "2026-10-11", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Black girl Relaxation" },
  { date: "2026-10-11", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Black girl Relaxation" },
  { date: "2026-10-11", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Black girl Relaxation" },
  { date: "2026-10-11", floor: 12, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Black girl Relaxation" },

  // 2026-10-08 — Roompact event LlYQJ3; 21 eligible residents.
  { date: "2026-10-08", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "HLLC Monthly Crafts & Snacks: Make Your Own Loteria" },
  { date: "2026-10-08", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "HLLC Monthly Crafts & Snacks: Make Your Own Loteria" },
  { date: "2026-10-08", floor: 8, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "HLLC Monthly Crafts & Snacks: Make Your Own Loteria" },
  { date: "2026-10-08", floor: 9, cat: "attendance", pts: 10, place: null, reached: 10,
    note: "HLLC Monthly Crafts & Snacks: Make Your Own Loteria" },
  { date: "2026-10-08", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "HLLC Monthly Crafts & Snacks: Make Your Own Loteria" },
  { date: "2026-10-08", floor: 11, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "HLLC Monthly Crafts & Snacks: Make Your Own Loteria" },
  { date: "2026-10-08", floor: 12, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "HLLC Monthly Crafts & Snacks: Make Your Own Loteria" },

  // 2026-10-07 — Roompact event bPGKod; 3 eligible residents.
  { date: "2026-10-07", floor: 6, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Oct 7" },
  { date: "2026-10-07", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Oct 7" },
  { date: "2026-10-07", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "ISR Hall Council Meeting — Oct 7" },
  { date: "2026-10-07", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Oct 7" },
  { date: "2026-10-07", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "ISR Hall Council Meeting — Oct 7" },
  { date: "2026-10-07", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Oct 7" },
  { date: "2026-10-07", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Oct 7" },

  // 2026-10-05 — Roompact event LqPOvY; 18 eligible residents.
  { date: "2026-10-05", floor: 6, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall 8th Floor - Community Initiative 2" },
  { date: "2026-10-05", floor: 7, cat: "programming", pts: 1, place: null, reached: 1,
    note: "Wardall 8th Floor - Community Initiative 2" },
  { date: "2026-10-05", floor: 8, cat: "programming", pts: 17, place: null, reached: 17,
    note: "Wardall 8th Floor - Community Initiative 2" },
  { date: "2026-10-05", floor: 9, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall 8th Floor - Community Initiative 2" },
  { date: "2026-10-05", floor: 10, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall 8th Floor - Community Initiative 2" },
  { date: "2026-10-05", floor: 11, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall 8th Floor - Community Initiative 2" },
  { date: "2026-10-05", floor: 12, cat: "programming", pts: 0, place: null, reached: 0,
    note: "Wardall 8th Floor - Community Initiative 2" },

  // 2026-10-01 — Roompact event 76oW9v; 9 eligible residents.
  { date: "2026-10-01", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "October 1 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-01", floor: 7, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "October 1 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-01", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "October 1 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-01", floor: 9, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "October 1 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-01", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "October 1 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-01", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "October 1 2026 Honors Living-Learning Community Study & Snacks" },
  { date: "2026-10-01", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "October 1 2026 Honors Living-Learning Community Study & Snacks" },

  // 2026-09-30 — Roompact event b0RDZv; 38 eligible residents.
  { date: "2026-09-30", floor: 6, cat: "attendance", pts: 11, place: null, reached: 11,
    note: "Humanities Research Institute and Honors LLC Lunch with Associate Professor Mirelsie Velázquez, PhD" },
  { date: "2026-09-30", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Humanities Research Institute and Honors LLC Lunch with Associate Professor Mirelsie Velázquez, PhD" },
  { date: "2026-09-30", floor: 8, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "Humanities Research Institute and Honors LLC Lunch with Associate Professor Mirelsie Velázquez, PhD" },
  { date: "2026-09-30", floor: 9, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "Humanities Research Institute and Honors LLC Lunch with Associate Professor Mirelsie Velázquez, PhD" },
  { date: "2026-09-30", floor: 10, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Humanities Research Institute and Honors LLC Lunch with Associate Professor Mirelsie Velázquez, PhD" },
  { date: "2026-09-30", floor: 11, cat: "attendance", pts: 10, place: null, reached: 10,
    note: "Humanities Research Institute and Honors LLC Lunch with Associate Professor Mirelsie Velázquez, PhD" },
  { date: "2026-09-30", floor: 12, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Humanities Research Institute and Honors LLC Lunch with Associate Professor Mirelsie Velázquez, PhD" },

  // 2026-09-30 — Roompact event byNX84; 1 eligible residents.
  { date: "2026-09-30", floor: 6, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Sept 30" },
  { date: "2026-09-30", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Sept 30" },
  { date: "2026-09-30", floor: 8, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "ISR Hall Council Meeting — Sept 30" },
  { date: "2026-09-30", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Sept 30" },
  { date: "2026-09-30", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Sept 30" },
  { date: "2026-09-30", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Sept 30" },
  { date: "2026-09-30", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "ISR Hall Council Meeting — Sept 30" },

  // 2026-09-29 — Roompact event 78PNl6; 4 eligible residents.
  { date: "2026-09-29", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "HLLC Trivia Night" },
  { date: "2026-09-29", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "HLLC Trivia Night" },
  { date: "2026-09-29", floor: 8, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "HLLC Trivia Night" },
  { date: "2026-09-29", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "HLLC Trivia Night" },
  { date: "2026-09-29", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "HLLC Trivia Night" },
  { date: "2026-09-29", floor: 11, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "HLLC Trivia Night" },
  { date: "2026-09-29", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "HLLC Trivia Night" },

  // Sept 28 — iConvo counts supplied by Abo; corrected Oct 11.
  // Floors 6, 9, 10 and 12 tie for first. Floor 7 is fifth at 50/52.
  { date: "2026-09-28", floor: 6, cat: "iconvos", pts: 65, place: 1, reached: 50,
    note: "iConvos — 50 completed + 15 bonus points; tied for 1st" },
  { date: "2026-09-28", floor: 7, cat: "iconvos", pts: 50, place: 5, reached: 50,
    note: "iConvos — 50 completed + 0 bonus points; 5th place (count corrected Oct 11)" },
  { date: "2026-09-28", floor: 10, cat: "iconvos", pts: 66, place: 1, reached: 51,
    note: "iConvos — 51 completed + 15 bonus points; tied for 1st" },
  { date: "2026-09-28", floor: 12, cat: "iconvos", pts: 63, place: 1, reached: 48,
    note: "iConvos — 48 completed + 15 bonus points; tied for 1st" },
  { date: "2026-09-28", floor: 9, cat: "iconvos", pts: 64, place: 1, reached: 49,
    note: "iConvos — 49 completed + 15 bonus points; tied for 1st (roster corrected to 49 Oct 11)" },
  { date: "2026-09-28", floor: 8, cat: "iconvos", pts: 49, place: 6, reached: 49,
    note: "iConvos — 49 completed + 0 bonus points; 6th place" },
  { date: "2026-09-28", floor: 11, cat: "iconvos", pts: 49, place: 7, reached: 49,
    note: "iConvos — 49 completed + 0 bonus points; 7th place" },

  // Sept 22–27: counted from Roompact's attendee lists with multiple check-ins hidden.
  // Only Wardall floors 6–12 count; meetings count only the host floor's residents.
  // Floor 3–5 meetings add no awards, including two Floor 9 visitors at Floor 5's meeting.
  { date: "2026-09-27", floor: 9, cat: "meetings", pts: 34, place: null, reached: 34,
    note: "Floor Meeting #2 — 9th Floor Community Responsibility Meeting, Sept 27" },

  // Sept 24 — Sip & Schedule (Roompact event 7pyQN6)
  { date: "2026-09-24", floor: 6, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Sip & Schedule" },
  { date: "2026-09-24", floor: 7, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Sip & Schedule" },
  { date: "2026-09-24", floor: 8, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Sip & Schedule" },
  { date: "2026-09-24", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Sip & Schedule" },
  { date: "2026-09-24", floor: 10, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Sip & Schedule" },
  { date: "2026-09-24", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Sip & Schedule" },
  { date: "2026-09-24", floor: 12, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Sip & Schedule" },

  { date: "2026-09-23", floor: 7, cat: "meetings", pts: 26, place: null, reached: 26,
    note: "Floor Meeting #2 — Community Responsibility Floor Meeting, Sept 23" },
  { date: "2026-09-22", floor: 6, cat: "meetings", pts: 4, place: null, reached: 4,
    note: "Floor Meeting #2 — 6th Floor Community Responsibility Floor Meeting, Sept 22" },

  // Sept 22 — Light The Night Bike Light Installation Event (Roompact event 7pyY4E)
  { date: "2026-09-22", floor: 6, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Light The Night Bike Light Installation Event" },
  { date: "2026-09-22", floor: 7, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Light The Night Bike Light Installation Event" },
  { date: "2026-09-22", floor: 8, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Light The Night Bike Light Installation Event" },
  { date: "2026-09-22", floor: 9, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Light The Night Bike Light Installation Event" },
  { date: "2026-09-22", floor: 10, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Light The Night Bike Light Installation Event" },
  { date: "2026-09-22", floor: 11, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Light The Night Bike Light Installation Event" },
  { date: "2026-09-22", floor: 12, cat: "attendance", pts: 0, place: null, reached: 0,
    note: "Light The Night Bike Light Installation Event" },


  // 2026-09-21  Floor Meeting #2 — one point per resident who attended
  // Floors 6, 7 and 9 held their second meetings later; see the Sept 22–27 entries above.
  { date: "2026-09-21", floor: 8, cat: "meetings", pts: 37, place: null, reached: 37,
    note: "Floor Meeting #2 — Community Responsibility Floor Meeting, Sept 21" },
  { date: "2026-09-17", floor: 10, cat: "meetings", pts: 34, place: null, reached: 34,
    note: "Floor Meeting #2 — Wardall Floor 10 2nd Meeting, Sept 17" },
  { date: "2026-09-21", floor: 12, cat: "meetings", pts: 28, place: null, reached: 28,
    note: "Floor Meeting #2 — Wardall Floor 12 Meeting 2, Sept 21" },
  { date: "2026-09-17", floor: 11, cat: "meetings", pts: 24, place: null, reached: 24,
    note: "Floor Meeting #2 — Wardall 11th Floor Community Responsibility Meeting, Sept 17" },

  // 2026-09-21  Time Management Workshop with The Jeffries Center
  { date: "2026-09-21", floor: 10, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Time Management Workshop with The Jeffries Center" },
  { date: "2026-09-21", floor: 11, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Time Management Workshop with The Jeffries Center" },
  { date: "2026-09-21", floor: 6, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Time Management Workshop with The Jeffries Center" },
  { date: "2026-09-21", floor: 12, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Time Management Workshop with The Jeffries Center" },
  { date: "2026-09-21", floor: 7, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Time Management Workshop with The Jeffries Center" },
  { date: "2026-09-21", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Time Management Workshop with The Jeffries Center" },

  // 2026-09-17  Honors LLC Study & Snacks
  { date: "2026-09-17", floor: 7, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "Study & Snacks" },
  { date: "2026-09-17", floor: 11, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Study & Snacks" },
  { date: "2026-09-17", floor: 10, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Study & Snacks" },
  { date: "2026-09-17", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Study & Snacks" },

  // 2026-09-13  9th Floor Picnic and Games — Floor 9's own event.
  // Visitors from other floors earn for their own floor, one point each.
  { date: "2026-09-13", floor: 9, cat: "programming", pts: 17, place: null, reached: 17,
    note: "9th Floor Picnic and Games" },
  { date: "2026-09-13", floor: 8, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "9th Floor Picnic and Games — visiting from another floor" },
  { date: "2026-09-13", floor: 7, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "9th Floor Picnic and Games — visiting from another floor" },
  { date: "2026-09-13", floor: 12, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "9th Floor Picnic and Games — visiting from another floor" },

  // 2026-09-10  Clay & Cane's
  { date: "2026-09-10", floor: 7, cat: "attendance", pts: 16, place: null, reached: 16,
    note: "Clay & Cane's" },
  { date: "2026-09-10", floor: 12, cat: "attendance", pts: 9, place: null, reached: 9,
    note: "Clay & Cane's" },
  { date: "2026-09-10", floor: 8, cat: "attendance", pts: 5, place: null, reached: 5,
    note: "Clay & Cane's" },
  { date: "2026-09-10", floor: 11, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Clay & Cane's" },
  { date: "2026-09-10", floor: 6, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Clay & Cane's" },
  { date: "2026-09-10", floor: 10, cat: "attendance", pts: 2, place: null, reached: 2,
    note: "Clay & Cane's" },
  { date: "2026-09-10", floor: 9, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Clay & Cane's" },

  // 2026-09-09  Community Initiative 1 — game wins (2 pts each, counted per win)
  { date: "2026-09-09", floor: 8, cat: "community", pts: 10, place: null,
    note: "Minute to Win-It game wins — 5 wins across cheeseballs, tallest tower and spoon relay" },
  { date: "2026-09-09", floor: 10, cat: "community", pts: 10, place: null,
    note: "Minute to Win-It game wins — 5 wins across cheeseballs, tallest tower and spoon relay" },
  { date: "2026-09-09", floor: 7, cat: "community", pts: 6, place: null,
    note: "Minute to Win-It game wins — 3 wins in the spoon relay" },
  { date: "2026-09-09", floor: 6, cat: "community", pts: 2, place: null,
    note: "Minute to Win-It game wins — 1 win in the tallest tower" },

  // 2026-09-09  Community Initiative 1: Minute to Win-It — attendance, DOUBLE POINTS
  // Advertised as a double-points night in the kickoff email, so pts is twice
  // `reached`. `reached` stays the true headcount so the turnout bar and the
  // percentages on the page remain honest.
  { date: "2026-09-09", floor: 7, cat: "community", pts: 52, place: null, reached: 26, mult: 2,
    note: "Minute to Win-It — 26 residents × 2 points" },
  { date: "2026-09-09", floor: 10, cat: "community", pts: 30, place: null, reached: 15, mult: 2,
    note: "Minute to Win-It — 15 residents × 2 points" },
  { date: "2026-09-09", floor: 8, cat: "community", pts: 12, place: null, reached: 6, mult: 2,
    note: "Minute to Win-It — 6 residents × 2 points" },
  { date: "2026-09-09", floor: 6, cat: "community", pts: 4, place: null, reached: 2, mult: 2,
    note: "Minute to Win-It — 2 residents × 2 points" },
  { date: "2026-09-09", floor: 12, cat: "community", pts: 4, place: null, reached: 2, mult: 2,
    note: "Minute to Win-It — 2 residents × 2 points" },

  // 2026-09-08  Undergraduate Research at the University of Illinois Pan
  { date: "2026-09-08", floor: 10, cat: "attendance", pts: 4, place: null, reached: 4,
    note: "Undergraduate Research at the University of Illinois Panel with OUR Undergraduate Ambassadors" },
  { date: "2026-09-08", floor: 6, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Undergraduate Research at the University of Illinois Panel with OUR Undergraduate Ambassadors" },
  { date: "2026-09-08", floor: 9, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Undergraduate Research at the University of Illinois Panel with OUR Undergraduate Ambassadors" },
  { date: "2026-09-08", floor: 12, cat: "attendance", pts: 3, place: null, reached: 3,
    note: "Undergraduate Research at the University of Illinois Panel with OUR Undergraduate Ambassadors" },
  { date: "2026-09-08", floor: 7, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Undergraduate Research at the University of Illinois Panel with OUR Undergraduate Ambassadors" },
  { date: "2026-09-08", floor: 8, cat: "attendance", pts: 1, place: null, reached: 1,
    note: "Undergraduate Research at the University of Illinois Panel with OUR Undergraduate Ambassadors" },
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
  // 2026-08-19  Dinner with National & International Scholarships Progra
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
  "Ties share the place and the placement award. For iConvos, tied floors get the same bonus plus their own completed-iConvo count.",
  "Shared HLLC events, floor meetings and floor programming earn one point per resident. Floor meetings count only that floor's own residents.",
  "Earlier awards keep their posted points: Floor Meeting #1 used placement scoring, and Pizza and Planes used a turnout threshold. New attendance awards use one point per resident, with advertised bonuses applied where specified.",
  "Each completed iConvo earns one point. Completion percentage determines an extra 15 points for 1st, 10 for 2nd and 5 for 3rd. Ties share the place and bonus and skip subsequent places: four floors tied for 1st means the next floor is 5th. All floors at 100% share 1st and receive 15 bonus points.",
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
  return new Set(AWARDS.map((a) => a.date + "|" + a.cat + "|" + occasionTitle(a))).size;
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
 * The title an award belongs under, for grouping and for the block heading.
 *
 * Row notes may carry a trailing clause that applies to that floor only —
 * "Floor Meeting #1 — tied for 3rd" — so the group key is the note with any
 * such clause stripped. Without this, two tied floors split off into their own
 * block and one event appears twice in the log.
 */
function occasionTitle(award) {
  return String(award.note || "").split(" — ")[0].trim();
}

/** The floor-specific remainder of a note, if any. Shown on the row itself. */
function awardQualifier(award) {
  const parts = String(award.note || "").split(" — ");
  return parts.length > 1 ? parts.slice(1).join(" — ").trim() : "";
}

/**
 * Awards grouped into the occasions they belong to, newest first.
 *
 * Keyed on date + category + title, not just date + category: several
 * different shared events happen on the same day (Aug 19 had eight), and each
 * deserves its own block rather than being merged.
 */
function buildOccasions() {
  const map = new Map();
  for (const a of AWARDS) {
    const key = a.date + "|" + a.cat + "|" + occasionTitle(a);
    if (!map.has(key)) {
      map.set(key, { date: a.date, cat: a.cat, title: occasionTitle(a), rows: [] });
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
