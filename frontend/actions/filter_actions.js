import { fetchNotebooks } from './notebooks_action';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchNotebooks(getState().ui.filters)(dispatch);
};