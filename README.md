# HLLC Floor Competition

Live standings for the Honors Living-Learning Community floor competition in
Wardall Hall, Illinois Street Residence, University of Illinois Urbana-Champaign.

Seven floors, 6 through 12, compete all year.

---

## What this is

Seven files. No build step, no server, no database, no Node. Open `index.html`
in a browser and it works. Drop the folder on any static host and it works there
too.

| File | What it is |
| --- | --- |
| **`data.js`** | **The only file you edit.** Season, floors, categories, and every award. |
| `index.html` | Standings — leader card, table, stats, per-floor breakdown. |
| `activity.html` | The full log, filterable by floor and category. |
| `about.html` | Scoring rules, counting rules, roster sizes. |
| `display.html` | Lobby/TV mode. Reloads itself every five minutes. |
| `styles.css` | The visual system. |
| `nav.js` | Shared header, footer, starfield. |

---

## Posting new points

Open `data.js`. Find the `AWARDS` list. Add a line per floor, newest at the top:

```js
{ date: "2026-09-15", floor: 9, cat: "community", pts: 15, place: 1,
  note: "Study Night — 1st place" },
```

| Field | What goes in it |
| --- | --- |
| `date` | `"YYYY-MM-DD"` |
| `floor` | `6`–`12` |
| `cat` | an `id` from `CATEGORIES` — `attendance`, `meetings`, `community`, `iconvos`, `notes`, `clean`, `nominations` |
| `pts` | points awarded. `0` is fine and still shows the result |
| `place` | `1`, `2`, `3`… or `null` for flat awards |
| `note` | the one line residents read. Say what earned it |

Then change `SEASON.updated` to today's date, save, and refresh.

That's the whole job. **You never add up a total by hand.** Standings, ranks,
ties, category breakdowns, the activity log, the stat cards and the display
board are all worked out from `AWARDS` every time a page loads — so the
standings and the log can never disagree with each other.

### Some worked examples

A placement result across all seven floors — post every floor, including the
ones that scored nothing, so residents can see how close it was:

```js
{ date: "2026-10-01", floor: 12, cat: "meetings", pts: 10, place: 1,
  note: "Floor Meeting #2 — 40 of 48 residents (83.3%)" },
{ date: "2026-10-01", floor: 7,  cat: "meetings", pts: 6,  place: 2,
  note: "Floor Meeting #2 — 39 of 52 residents (75.0%)" },
// …and so on down to 7th
```

A tie — give both floors the same `place` and the same `pts`:

```js
{ date: "2026-10-01", floor: 7,  cat: "meetings", pts: 2, place: 3,
  note: "Floor Meeting #2 — 34 of 52 (65.4%) — tied for 3rd" },
{ date: "2026-10-01", floor: 11, cat: "meetings", pts: 2, place: 3,
  note: "Floor Meeting #2 — 34 of 52 (65.4%) — tied for 3rd" },
```

A weekly cleanliness award — one line, no `place`:

```js
{ date: "2026-09-15", floor: 10, cat: "clean", pts: 5, place: null,
  note: "Cleanest floor of the week — named by the building service workers" },
```

A resident nomination:

```js
{ date: "2026-09-16", floor: 8, cat: "nominations", pts: 5, place: null,
  note: "Resident nomination approved — scholarship award" },
```

### Fixing a mistake

Edit or delete the line. There is no ledger to keep consistent — the totals are
recomputed from scratch on every page load.

### Changing a rule

Point values live in `CATEGORIES` in the same file. Change `award` there and it
updates the Scoring page. Past awards keep the points they were given, which is
correct — changing a rule should not rewrite history.

### Roster changes

`residents` on each floor in `FLOORS` is the denominator for every turnout and
completion percentage. Keep it current if someone moves in or out.

---

## Scoring rules (Fall 2026, confirmed)

| Category | How it is judged | Points |
| --- | --- | --- |
| Event Attendance | placement by turnout percentage | 10 / 6 / 2 |
| Floor Meetings | placement by turnout percentage | 10 / 6 / 2 |
| Community Initiatives | placement | 15 / 13 / 11 |
| iConvos | placement by completion percentage | 15 / 13 / 11 |
| Notes for Introduction | placement | 10 / 8 / 6 |
| Cleanest Floor | one floor per week | 5 |
| Resident Nominations | per approved nomination | 5 |

Counting rules:

- The RA's own sign-in never counts toward their floor.
- Duplicate sign-ins at the same event count once.
- Late sign-ins count.
- Entries back-filled by staff count.
- **Ties share the place and share the points.** The competition runs all year,
  so there is nothing to break.
- Turnout is measured against roster size, so a floor of 48 is not punished for
  being smaller than a floor of 52.

### Attendance is scored in blocks, not per event

There were 22 HLLC events between move-in and the first week of classes.
Scoring each separately at 10 / 6 / 2 would have put up to **190 points** on
attendance alone against roughly **60** for every other category combined all
semester — attendance would have become the competition. So a run of events is
summed into one turnout figure and placed once. Same data, same winner,
proportionate weight.

---

## Hosting it

It is plain static files, so almost anything works. GitHub Pages is free and
takes about a minute:

1. Push this folder to a GitHub repository.
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. It goes live at `https://<username>.github.io/<repo>/`.

Every later update is a `data.js` edit, a commit, and a push. Pages redeploys
itself.

For the lobby TV, point a browser at `display.html` full-screen. It reloads
every five minutes, so it picks up new points on its own.

---

## Notes

- Floor nicknames ("Lucky Seven", "Cloud Nine"…) are decorative placeholders.
  Rename them in `FLOORS` or set them to `""`.
- Fonts come from Google Fonts. If the site is ever run somewhere without
  internet, it falls back to the system sans-serif and still looks fine.
- Animation is disabled automatically for anyone with "reduce motion" turned on.
- Not an official University of Illinois publication.
