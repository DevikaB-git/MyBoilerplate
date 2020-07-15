/*
 *
 * DateTimePicker reducer
 *
 */
import produce from 'immer';
import { Date_Picker } from './constants';

export const initialState = {
  dates: new Date(),
  iso: ''
};

/* eslint-disable default-case, no-param-reassign */
const dateTimePickerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case Date_Picker:
        draft.iso = (new Date(action.dates)).toISOString()
        draft.dates = new Date(draft.iso)
        return draft
      default:
        return draft
    }
  });

export default dateTimePickerReducer;
