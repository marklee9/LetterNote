export const fetchTags = () => (
  $.ajax({
    method: "GET",
    url: "api/tags"
  })
);

export const createTag = (tag) => (
  $.ajax({
    method: "POST",
    url: "api/tags",
    data: { tag }
  })
);