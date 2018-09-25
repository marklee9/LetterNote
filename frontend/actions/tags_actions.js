import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";
export const CURRENT_TAG = "CURRENT_TAG";

export const receiveTagErrors = errors => {
  return {
    type: RECEIVE_TAG_ERRORS,
    errors: errors.responseJSON
  };
};

export const fetchCurrentTag = tag => {
  return {
    type: CURRENT_TAG,
    currentTagId: tag.id,
    currentTagName: tag.name
  };
};

export const fetchTags = () => dispatch => (
  TagApiUtil.fetchTags()
    .then(
      (tags) => dispatch({
        type: RECEIVE_TAGS,
        tags
      }),
      (errors) => dispatch(receiveTagErrors(errors))
    )
);

export const createTag = (tagAPI) => dispatch => (
  TagApiUtil.createTag(tagAPI)
    .then(
      (tag) => dispatch({
        type: RECEIVE_TAG,
        tag
      }),
      (errors) => dispatch(receiveTagErrors(errors))
    )
);

export const updateTag = tagAPI => dispatch => (
  TagApiUtil.updateTag(tagAPI)
    .then(
      (tag) => dispatch({
        type: RECEIVE_TAG,
        tag
      }),
    errors => dispatch(receiveTagErrors(errors))
  )
);

export const deleteTag = tagId => dispatch => (
  TagApiUtil.deleteTag(tagId)
    .then(
      tag => dispatch({
        type: REMOVE_TAG,
        tag
      }),
    errors => dispatch(receiveTagErrors(errors))
  )
);

export const addTagToNote = (noteId, tagName) => dispatch => {
  TagApiUtil.addTagToNote(noteId, tagName).then(
    tagging => dispatch({
      type: RECEIVE_TAGGING,
      tagging
    }),
    errors => dispatch(receiveTagErrors(errors))
  );
};
