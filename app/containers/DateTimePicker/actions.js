/*
 *
 * DateTimePicker actions
 *
 */

import { Date_Picker } from './constants';

export function Load_Date_Picker(dates) {
  return {
    type: Date_Picker,
    dates
  };
}
