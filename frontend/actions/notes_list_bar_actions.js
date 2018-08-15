export const OPEN_NOTELISTBAR = 'OPEN_NOTELISTBAR';
export const CLOSE_NOTELISTBAR = 'CLOSE_NOTELISTBAR';

export const openNoteBar = () => {
  return {
    type: OPEN_NOTELISTBAR,
  };
};

export const closeNoteBar = () => {
  return {
    type: CLOSE_NOTELISTBAR
  };
};
