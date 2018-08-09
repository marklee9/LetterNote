import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';

export const fetchNotebooks = () => dispatch => (
  NotebookApiUtil.fetchNotebooks()
  .then(
    (notebooks) => dispatch({
      type: RECEIVE_NOTEBOOKS,
      notebooks
    }),
    (error) => dispatch({
      type: RECEIVE_SESSION_ERRORS,
      errors: error.responseJSON
    })
  )
);
