import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dateTimePicker state domain
 */

const selectDateTimePickerDomain = state =>
  state.dateTimePicker || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DateTimePicker
 */

const makeSelectIso = () =>
  createSelector(
    selectDateTimePickerDomain,
    substate => substate.iso
  );

export { selectDateTimePickerDomain, makeSelectIso };
