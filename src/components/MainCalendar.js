import React from 'react';
import { DateRangePicker } from 'react-dates';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

import AlertButton from './AlertButton';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
  reactDates: {
    ...DefaultTheme.reactDates,
    color: {
      ...DefaultTheme.reactDates.color,
      highlighted: {
        backgroundColor: '#82E0AA',
        backgroundColor_active: '#58D68D',
        backgroundColor_hover: '#58D68D',
        color: '#186A3B',
        color_active: '#186A3B',
        color_hover: '#186A3B',
      },
    },
  },
});

const propTypes = {
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
};

const defaultProps = {
  autoFocus: true,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,
};

class MainCalendar extends React.Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = 'startDate';
    } else if (props.autoFocusEndDate) {
      focusedInput = 'endDate';
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {

    const { focusedInput, startDate, endDate } = this.state;

    const startDateString = startDate && startDate.format('YYYY-MM-DD');
    const endDateString = endDate && endDate.format('YYYY-MM-DD');

    const dateStrings = [startDateString, endDateString];

    return (
      <div>
        <DateRangePicker
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          startDateId='startDateId'
          endDateId='endDateId'
          showClearDates={true}
          showDefaultInputIcon={true}
          small={true}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          startDatePlaceholderText='From'
          endDatePlaceholderText='To'
        />
        <AlertButton dateStrings={dateStrings}/>
      </div>
    );
  }
}

MainCalendar.propTypes = propTypes;
MainCalendar.defaultProps = defaultProps;

export default MainCalendar;
