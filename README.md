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
| `reached` | *optional.* how many residents took part, e.g. `reached: 20` |

Then change `SEASON.updated` to today's date, save, and refresh.

### Always fill in `reached` when you have a headcount

This is the field that stops a floor feeling ambushed by a zero. The site turns
`reached: 20` into **"20 of 51 residents took part · 39.2%"** with a bar, on the
standings table and next to the result in the log. Without it, a floor that
turned out twenty people and came fourth looks identical to a floor where nobody
came at all.

Leave it off only where a headcount is meaningless — a cleanliness award, a
nomination.

That's the whole job. **You never add up a total by hand.** Standings, ranks,
ties, category breakdowns, the activity log, the stat cards and the display
board are all worked out from `AWARDS` every time a page loads — so the
standings and the log can never disagree with each other.

### Some worked examples

A placement result across all seven floors — **post every floor, including the
ones that scored nothing.** That is what makes the board fair to read: the zeroes
come with their turnout attached, so fourth place reads as a near miss rather
than an absence.

```js
{ date: "2026-10-01", floor: 12, cat: "meetings", pts: 10, place: 1, reached: 40,
  note: "Floor Meeting #2" },
{ date: "2026-10-01", floor: 7,  cat: "meetings", pts: 6,  place: 2, reached: 39,
  note: "Floor Meeting #2" },
{ date: "2026-10-01", floor: 8,  cat: "meetings", pts: 0,  place: 6, reached: 24,
  note: "Floor Meeting #2" },
// …every floor, 1st through 7th
```

You do not need to write the percentage — the site works it out from `reached`
and the floor's roster size.

A tie — give both floors the same `place` and the same `pts`:

```js
{ date: "2026-10-01", floor: 7,  cat: "meetings", pts: 2, place: 3, reached: 34,
  note: "Floor Meeting #2 — tied for 3rd" },
{ date: "2026-10-01", floor: 11, cat: "meetings", pts: 2, place: 3, reached: 34,
  note: "Floor Meeting #2 — tied for 3rd" },
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

## Scoring rules (Fall 2026)

Two kinds of event, scored differently on purpose.

**Shared HLLC events** — every floor invited, so a headcount is a fair contest:

| Category | How it is judged | Award |
| --- | --- | --- |
| Shared HLLC Events | every person counts | 1 per resident, no cap |
| Notes for Introduction | every note counts | 1 each |

**Floor events** — only your own floor invited, so a raw headcount would just
reward whoever schedules the most:

| Category | How it is judged | Award |
| --- | --- | --- |
| Floor Meetings | % of your roster, top 3 | 40 / 30 / 20 |
| iConvos | % of your roster, top 3 | 100 / 75 / 50 |
| Floor Programming | turnout thresholds | 5 / 10 / 20 / 30 |

**Everything else:**

| Category | How it is judged | Award |
| --- | --- | --- |
| Community Initiatives | judged by staff, top 3 | 60 / 45 / 30 |
| Cleanest Floor | one floor per week | 25 |
| Resident Nominations | flat, per approved award | 10 each |
| Event Wins | flat, per win | 2 each |

**Double-points nights.** Some events are advertised as double points. Write the
doubled figure into `pts` and leave `reached` as the true headcount — the site
uses `reached` for the turnout bar and the percentage, so the participation
figure stays honest while the score reflects the promotion. Say so in the note,
as the Sept 9 Minute to Win-It rows do.

**Event Wins** is two points every time a resident wins a game or contest at an
HLLC event — double what showing up is worth, counted per win, so a resident who
takes three games earns three times. There is deliberately **no bonus for
sweeping** an event. A sweep bonus would push floors to field their single
strongest player in every game instead of rotating people in, which cuts against
the whole point of the competition; and on a public board it would single out one
identifiable resident, which is exactly what the FERPA rule below exists to
prevent.

The **Floor Programming ladder**: 5+ residents earns 5, 10+ earns 10, 20+ earns
20, 30+ earns 30. Capped at 30, so an RA who runs a lot of events is rewarded but
cannot win the season on volume.

Counting rules:

- The RA's own sign-in never counts toward their floor.
- Signing in twice at the same event counts once.
- Late sign-ins count. Entries back-filled by staff count.
- **Ties share the place and share the points.** The competition runs all year,
  so there is nothing to break.
- Percentage categories use roster size, so a floor of 48 is never at a
  disadvantage against a floor of 52.

### Why the percentages are only on the floor-event categories

Roster sizes span 48 to 52 — an 8% spread. Ranking the *shared* events by
per-capita rate instead of raw count produces an identical order, so dividing
would add arithmetic to the explanation for no change in outcome. The floor-event
categories are different: there is no cross-floor contest in them at all, so a
percentage is the only fair comparison available.

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

## Why the home page leads with an explainer

The percentage categories pay only the top three floors, so a floor can turn out
respectably, land fourth, and score nothing there. Read cold, the standings table
makes that look like apathy — which is discouraging, and wrong.

So `index.html` opens with **How points work**, above the leaderboard. It leads
with the shared-versus-floor distinction, because that one idea explains
everything else: where everyone is invited, each person is a point; where only
your floor is invited, it is a percentage or a threshold. Then the categories
nobody has contested yet, and five concrete things a resident can do this week.
The panel states plainly that a low total is not a floor where nobody showed up.
The activity page repeats the point, and the display board carries a one-line
version.

Those numbers are computed, not typed — the count of unscored categories and the
cleanliness projection come from `AWARDS` and `SEASON.ends`, so the message stays
true as the season fills in and quietly stops overstating things once most
categories have been contested.

---

## Where the numbers come from

`roompact-source.json` in this folder is the audit trail: **31 Roompact events
with all 992 raw sign-in records**, pulled from
`https://roompact.com/attendance/events/<id>`. Every single number in `data.js`
is derived from it — the 89 shared-event rows, all 7 floor-meeting counts, the
Pizza and Planes threshold. Nothing is typed in by hand, so any figure on the
site can be traced back to the individual check-ins behind it.

**That file is gitignored and must stay that way.** It contains student names,
NetIDs and student ID numbers for roughly 300 residents. This repository is
public. `data.js` holds only aggregate counts, which is why it is safe to commit.

**No resident name ever goes in this repository.** FERPA covers student
education records, and attendance at a residence-hall event is one. Award notes
name the *event* and the floor, never a person — "Minute to Win-It — 5 game
wins", not who won them. RA first names are fine: they are staff, and they are
already published on the Floors table.

To rebuild after pulling fresh Roompact data, the counting rules applied are:
drop any record whose name matches an RA, drop anyone not in Wardall Hall floors
6–12, collapse duplicate check-ins on NetId, and for a floor event count only
that floor's own residents.

---

## The favicon

`favicon.svg` is the master; `favicon.ico`, `apple-touch-icon.png` and
`icon-512.png` are generated from it.

The mark is the header's orange accent bar beside three standings bars, in the
same colours the leaderboard uses for 1st, 2nd and 3rd place. It is built
entirely from this site's own visual language.

**It uses no University of Illinois trademark** — no Block I, no "Illinois"
wordmark, no athletics mark. The relevant risk with a university is trademark
rather than copyright: the marks are registered, and putting one on an
unofficial site risks implying an affiliation that does not exist. School
colours on their own are not protectable, so the navy-and-orange palette is
fine to keep. The footer already states the site is not an official University
publication, which is the other half of not implying endorsement. None of this
is legal advice — if the Hall Director wants it cleared, University Housing
communications is the place to ask.

The `.ico` carries six frames, and the 16px one is a **different, simpler
drawing** — two bars instead of three, every edge on a whole pixel. Three bars
cannot resolve at 16px and turn to mush, which is what multi-frame ICO exists
for. To regenerate after editing the SVG:

```bash
pip install cairosvg pillow
python3 - <<'EOF'
import cairosvg
from PIL import Image
sizes = [32, 48, 64, 128, 256]
frames = {}
for s in sizes:
    cairosvg.svg2png(url='favicon.svg', write_to=f'/tmp/{s}.png',
                     output_width=s, output_height=s)
    frames[s] = Image.open(f'/tmp/{s}.png').convert('RGBA')
# keep the hand-tuned 16px frame — do not downscale the full mark into it
frames[16] = Image.open('favicon-16.png').convert('RGBA')
order = [16] + sizes
frames[256].save('favicon.ico', format='ICO', sizes=[(s, s) for s in order],
                 append_images=[frames[s] for s in order if s != 256])
cairosvg.svg2png(url='favicon.svg', write_to='apple-touch-icon.png',
                 output_width=180, output_height=180)
cairosvg.svg2png(url='favicon.svg', write_to='icon-512.png',
                 output_width=512, output_height=512)
EOF
```

`site.webmanifest` also makes the site installable to a phone home screen,
which is handy for checking standings without hunting for the URL.

---

## Notes

- Floor nicknames ("Lucky Seven", "Cloud Nine"…) are decorative placeholders.
  Rename them in `FLOORS` or set them to `""`.
- Fonts come from Google Fonts. If the site is ever run somewhere without
  internet, it falls back to the system sans-serif and still looks fine.
- Animation is disabled automatically for anyone with "reduce motion" turned on.
- Not an official University of Illinois publication.
