export const OPEN_TAGNOTEBAR = 'OPEN_TAGNOTEBAR';
export const CLOSE_TAGNOTEBAR = 'CLOSE_TAGNOTEBAR';

export const openTagNoteBar = () => {
  return {
    type: OPEN_TAGNOTEBAR,
  };
};

export const closeTagNoteBar = () => {
  return {
    type: CLOSE_TAGNOTEBAR
  };
};
