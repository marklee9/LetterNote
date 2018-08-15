export const OPEN_NOTELISTBAR = 'OPEN_NOTELISTBAR';
export const CLOSE_NOTELISTBAR = 'CLOSE_NOTELISTBAR';

export const openNoteListBar = () => {
  return {
    type: OPEN_NOTELISTBAR,
  };
};

export const closeNoteListBar = () => {
  return {
    type: CLOSE_NOTELISTBAR
  };
};
