export const fetchNotes = () => (
  $.ajax({
    method: "GET",
    url: "api/notes"
  })
);

export const fetchNote = (id) => {
  debugger;
  return $.ajax({
    method:"GET",
    url: `api/notes/${id}`
  });
};

export const deleteNote = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/notes/${id}`
  })
);

export const createNote = (note) => (
  $.ajax({
    method: "POST",
    url: `api/notes`,
    data: { note }
  })
);

export const updateNote = (note) => (
  $.ajax({
    method: "POST",
    url: `api/notes/${note.id}`,
    data: { note }
  })
);


