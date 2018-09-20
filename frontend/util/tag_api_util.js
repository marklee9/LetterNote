export const fetchTags = () => (
  $.ajax({
    method: "GET",
    url: "api/tags"
  })
);