export const selectNotes = (state) => {
  if (state.entities.notes === null) {
    return null;
  } else {
    return Object.values(state.entities.notes).filter((note) => note.notebook_id === state.ui.currentNotebookId);
  }
};

export const selectNotebooks = state => {
  return Object.values(state.entities.notebooks).filter((note) => note.author_id === state.session.currentUserId);
};

