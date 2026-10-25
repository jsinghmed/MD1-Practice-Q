# MSK Summative

A question-bank style study site for the MSK summative exam, with three sections:

- **Histology** — 63 questions from *MSK Question Review 1*
- **MSK Physiology** — 46 questions from *MSK Review Physio 1*, with the explanations and figures from the slides
- **Biochemistry** — 37 questions from *BCHM tips & qs* plus 23 new practice questions written from the exam blueprint (collagen & elastin, GAGs, glycolysis, glycogen metabolism)
- **Anatomy (BRS)** — 178 BRS Gross Anatomy questions from the *Limb Anatomy Question Bank* (Gray's Anatomy Review questions left out), in 14 upper and lower limb topics

Features: pick an answer and **Submit** to see why the correct answer is right and why each other choice is wrong; topic chapters; Scramble Choices; Highlight / Eraser; Flag; cross-out (✕) on choices; per-question notes. Everything saves in your browser (localStorage). Reset chapter clears answers only — highlights, flags and notes stay. Keys: ← → move · A–F pick · Enter submit.

## Put it on GitHub Pages

1. Create a new repository on GitHub (e.g. `msk-summative`).
2. upload every file in this folder (there are no subfolders) to the repository root.
3. In the repo go to **Settings → Pages**, set **Source** to *Deploy from a branch*, branch **main**, folder **/ (root)**, and save.
4. After a minute the site is live at `https://<your-username>.github.io/msk-summative/`.

## Editing questions

- `questions.js` — histology
- `physiology.js` — physiology (`se` = explanation from the slides, `fig` = figure slides)
- `biochemistry.js` — biochemistry (`src: "doc"` from the document, `src: "new"` written from the blueprint)
- `anatomy.js` — anatomy (stems and explanations are HTML; `ref` gives the BRS chapter and question number)

Each entry has the stem (`s`), choices (`c`), the index of the correct choice (`a`, counting from 0), the explanation (`e`), and one note per choice (`w`). Add `ns: true` to stop a question's choices from being scrambled.
