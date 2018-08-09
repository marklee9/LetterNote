export const fetchNotebooks = () => (
  $.ajax({
    method: "GET",
    url: "api/notebooks"
  })
);

export const fetchNotebook = (id) => (
  $.ajax({
    method:"GET",
    url: `api/notebooks/${id}`
  })
);


