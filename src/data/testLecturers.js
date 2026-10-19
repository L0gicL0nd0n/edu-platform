import { lecturers } from './lecturers';

// TEST DATA ONLY: repeats the 10 real lecturers 20 times (200 total)
// so that the effect of useDeferredValue is visible.
// Delete this file (and its import in Lecturers.js) before the final merge
// if the author asks for it.
const COPIES = 20;

export const manyLecturers = Array.from({ length: COPIES }, (_, i) =>
  lecturers.map((l) => ({ ...l, id: `${l.id}-${i}` }))
).flat();
