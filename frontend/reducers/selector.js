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
    let result = [];
    let notes = [];
    let allTaggings = Object.values(state.entities.taggings).filter((tagging) => 
      tagging.tag_id === state.ui.currentTagId
    );
    allTaggings.forEach((tagging) => {
      result.push(tagging.note_id);
    });
    result.forEach((noteId) => {
      notes.push(Object.values(state.entities.notes).filter((note) => note.id === noteId));
    });
    console.log(notes);
    return notes;
  }
};

export const selectNotebooks = (state) => {
  return Object.values(state.entities.notebooks).filter((note) => note.author_id === state.session.currentUserId);
};

export const selectTags = (state) => {
  return Object.values(state.entities.tags).filter((tag) => tag.user_id === state.session.currentUserId);
};