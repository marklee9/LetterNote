import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";

export const fetchTags = () => dispatch => {
  TagApiUtil.fetchTags()
    .then(
      (tags) => dispatch({
        type: RECEIVE_TAGS,
        tags
      }),
      (error) => dispatch({
        type: RECEIVE_TAG_ERRORS,
        errors: error.responseJSON
      })
    );
};