/**
 *
 * DateTimePicker
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectIso } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import DateAndTimePickers from './Components/DateAndTimePickers';
import { Load_Date_Picker } from './actions';

export function DateTimePicker(props) {
  useInjectReducer({ key: 'dateTimePicker', reducer });
  useInjectSaga({ key: 'dateTimePicker', saga });

  return (
    <div>

      <Helmet>
        <title>DateTimePicker</title>
        <meta name="description" content="Description of DateTimePicker" />
      </Helmet>
      <form>
        <DateAndTimePickers label='SELECT DATE AND TIME' type='datetime-local' onChange={props.handlechange} />
        <DateAndTimePickers label='ISO DATE AND TIME' type='text' value={props.iso} />

      </form>
    </div>
  );
}

DateTimePicker.propTypes = {
  iso: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  iso: makeSelectIso()
});

function mapDispatchToProps(dispatch) {
  return {
    handlechange: (date) => dispatch(Load_Date_Picker(date.target.value))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DateTimePicker);
