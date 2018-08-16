export const NEW_QUILL = 'NEW_QUILL';
export const EDIT_QUILL = 'EDIT_QUILL';

export const newQuill = () => {
  return {
    type: NEW_QUILL,
  };
};

export const editQuill = () => {
  return {
    type: EDIT_QUILL
  };
};