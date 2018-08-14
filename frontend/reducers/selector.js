export const selectNotes = (state) => (
  Object.values(state.entities.notes).filter((note) => note.notebook_id === state.ui.currentNotebook)
);