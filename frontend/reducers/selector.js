export const selectNotes = (state) => {
  if (state.entities.note === undefined) {
    return null;
  } else {
    return Object.values(state.entities.notes).filter((note) => note.notebook_id === state.ui.currentNotebook);
  }
};
