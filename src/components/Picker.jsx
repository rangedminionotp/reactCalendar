import React from 'react';
import './Picker.css';
import Weekday from './weekday';
import PrevBtn from './prevBtn';
import NextBtn from './nextBtn';
import SharedContext from './shared';
import MonthDisplay from './monthDisplay';
import YearDisplay from './yearDisplay';
import Days from './days';
/**
 * Picker component.
 * @return {dom} picker
 */
function Picker() {
  const dater = new Date();
  const dd = dater.getDate();
  const mm = dater.getMonth();
  const yyyy = dater.getFullYear();
  // what current month and day will be
  const [currDay, setDay] = React.useState([dd, mm, yyyy]);
  // the day, month, and year for 'today'
  const [today, setToday] = React.useState([dd, mm, yyyy]);
  const [todayIndex, setTodayIndex] = React.useState(-1);
  return (
    <SharedContext.Provider value={{
      today, setToday,
      todayIndex, setTodayIndex,
      currDay, setDay,
    }}>
      <div id='picker'>
        <PrevBtn />
        <NextBtn />
        <div id='display'>
          <MonthDisplay />
          <YearDisplay />
        </div>
        <Weekday />
        <Days />
      </div>
    </SharedContext.Provider>
  );
};

export default Picker;
