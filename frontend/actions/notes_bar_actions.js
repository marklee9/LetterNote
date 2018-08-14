export const OPEN_NOTEBAR = 'OPEN_NOTEBAR';
export const CLOSE_NOTEBAR = 'CLOSE_NOTEBAR';

export const openNoteBar = () => {
  return {
    type: OPEN_NOTEBAR,
  };
};

export const closeNoteBar = () => {
  return {
    type: CLOSE_NOTEBAR
  };
};
