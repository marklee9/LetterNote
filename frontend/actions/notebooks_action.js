import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';
export const RECEIVE_NOTEBOOK_ERRORS = 'RECEIVE_NOTEBOOK_ERRORS';

export const fetchNotebooks = () => dispatch => (
  NotebookApiUtil.fetchNotebooks()
  .then(
    (notebooks) => dispatch({
      type: RECEIVE_NOTEBOOKS,
      notebooks
    })
  )
);

export const fetchNotebook = (id) => dispatch => (
  NotebookApiUtil.fetchNotebook(id)
  .then(
    (notebook) => dispatch({
      type: RECEIVE_NOTEBOOK,
      notebook
    }),
    (error) => dispatch({
      type: RECEIVE_NOTEBOOK_ERRORS,
      errors: error.responseJSON
    })
  )
);

export const createNotebook = (notebookAPI) => dispatch => (
  NotebookApiUtil.createNotebook(notebookAPI)
  .then(
    (notebook) => dispatch({
      type: RECEIVE_NOTEBOOK,
      notebook
    }),
    (error) => dispatch({
      type: RECEIVE_NOTEBOOK_ERRORS,
      errors: error.responseJSON
    })
  )
);

export const updateNotebook = (notebookAPI) => dispatch => (
  NotebookApiUtil.updateNotebook(notebookAPI)
  .then(
    (notebook) => dispatch({
      type: RECEIVE_NOTEBOOK,
      notebook
    }),
    (error) => dispatch({
      type: RECEIVE_NOTEBOOK_ERRORS,
      errors: error.responseJSON
    })
  )
);

export const deleteNotebook = (id) => dispatch => (
  NotebookApiUtil.deleteNotebook(id)
  .then(
    (notebook) => dispatch({
      type: DELETE_NOTEBOOK,
      notebookId: id
    }),
    (error) => dispatch({
      type: RECEIVE_NOTEBOOK_ERRORS,
      errors: error.responseJSON
    })
  )
);