# Lecturers Site (proj1)

Tutoring website: a list of lecturer cards; the button "Подробнее и тарифы" opens a modal with education, subjects and prices.

## Stack
- Node.js v24.21.0
- npm v11.19.0
- React 18 (react-scripts 5.x, CRA)
- Plain CSS

## Run
git clone <URL>
cd edu-platform
npm install
npm start

## Folder structure
src/components/  — Header, Hero, About, Partners, Lecturers, LecturerCard
src/data/lecturers.js — all data
src/App.js, src/App.css — layout and styles

## Routing
No router — single page, section switching via React state.

## Variant 4 — useDeferredValue
Goal: smooth search over a large lecturer list.
Where: src/components/Lecturers.js
Tool: useDeferredValue (React 18).
Criteria:
- No lag while typing with 100+ items.
- Indicator shown while results are stale.
- Old list does not disappear instantly.

## Variant 5 — reference
Lazy-load photos with IntersectionObserver + useRef in LecturerCard.js.
