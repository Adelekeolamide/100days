import { render } from './render.js';

const filterDone = (listNotes) => {
   if (listNotes == undefined || listNotes == null) {
      return;
   }
   const done = listNotes.filter((note) => note.done === true);

   render(done);
};

const filterAll = (listNotes) => {
   render(listNotes);
};

const filterNotYet = (listNotes) => {
   if (listNotes == undefined || listNotes == null) {
      return;
   }

   const notYet = listNotes.filter((note) => note.done === false);
   render(notYet);
};

export { filterAll, filterDone, filterNotYet };
