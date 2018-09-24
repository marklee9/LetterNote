export const fetchAllTaggings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/taggings'
  })
);

export const fetchTagging = id => (
  $.ajax({
    method: 'GET',
    url: `api/taggings/${id}`
  })
);

export const createTagging = (tagging) => {
  return (
  $.ajax({
    method: 'POST',
    url: `api/taggings`,
    data: { tagging }
  }));
};
  
// );

export const deleteTagging = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/taggings/${id}`
  })
);