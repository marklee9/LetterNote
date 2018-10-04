import * as TaggingAPIUtil from '../util/tagging_api_util';

export const RECEIVE_ALL_TAGGINGS = 'RECEIVE_ALL_TAGGINGS';
export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const DELETE_TAGGING = 'DELETE_TAGGING';
export const RECEIVE_TAGGING_ERRORS = 'RECEIVE_TAGGING_ERRORS';

export const receiveTaggingErrors = errors => {
  return {
    type: RECEIVE_TAGGING_ERRORS,
    errors: errors.responseJSON
  };
};

export const fetchAllTaggings = () => dispatch => (
  TaggingAPIUtil.fetchAllTaggings()
    .then(taggings => dispatch({
      type: RECEIVE_ALL_TAGGINGS,
      taggings
    }))
);

export const fetchTagging = id => dispatch => (
  TaggingAPIUtil.fetchTagging(id)
    .then(
      (tagging) => dispatch({
        type: RECEIVE_TAGGING,
        tagging
      }),
      (errors) => dispatch(receiveTaggingErrors(errors))
      )
);

export const createTagging = (taggingAPI) => dispatch => (
  TaggingAPIUtil.createTagging(taggingAPI)
    .then(
        (tagging) => dispatch({
          type: RECEIVE_TAGGING,
          tagging
        }),
      (errors) => dispatch(receiveTaggingErrors(errors))
    )
  );

export const deleteTagging = id => dispatch => (
  TaggingAPIUtil.deleteTagging(id)
    .then(tagging => dispatch({
      type: DELETE_TAGGING,
      taggingId: tagging.id
    }))
);