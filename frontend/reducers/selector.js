export const selectNotes = (state) => {
  if (state.entities.notes === null) {
    return null;
  } else {
    return Object.values(state.entities.notes).filter((note) => note.notebook_id === state.ui.currentNotebookId);
  }
};

export const selectNotesByTag = (state) => {
  if (state.entities.notes === null) {
    return null;
  } else {
    return Object.values(state.entities.notes).filter((note) => note.notebook_id === state.ui.currentNotebookId);
  }
};

export const selectNotebooks = (state) => {
  return Object.values(state.entities.notebooks).filter((note) => note.author_id === state.session.currentUserId);
};

export const selectTags = (state) => {
  return Object.values(state.entities.tags).filter((tag) => tag.user_id === state.session.currentUserId);
};