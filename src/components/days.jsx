import React from 'react';
import SharedContext from './shared';

/**
 *
 * @return {dom} days
 */
function Days() {
    const {currDay, today, setTodayIndex} = React.useContext(SharedContext);
    const days = [];
    const month = currDay[1];
    const year = currDay[2];
    const toDay = today[0];
    const toMonth = today[1];
    const toYear = today[2];
    const curMMdays = new Date(year, month+1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const lastIndex = curMMdays+firstDay;
    const lastMMdays = new Date(year, month, 0).getDate();
    // last month
    let j = 0;
    for (let i = firstDay-1; i >= 0; i--) {
      const day = <div id={'d'+j}
        className='prev'
        data-testid={'d'+j}
        key={'d'+j}>{lastMMdays-i}</div>;
      days.push(day);
      j++;
    }
    // curr month
    j = 1;
    for (let i = firstDay; i < lastIndex; i++) {
      // console.log(j, todayd, month, todaym, year, todayy);
      if (j == toDay && month == toMonth && year == toYear) {
        setTodayIndex(j);
        days.push(<div id={'today'} className='today'
          key={'d'+i}
          data-testid='today'>{j}</div>);
      } else {
        days.push(<div id={'d'+i} className='curr'
          data-testid={'d'+i}
          key={'d'+i}>{j}</div>);
      }
      j++;
    }
    j = 1;
    for (let i = lastIndex; i < 42; i++) {
      days.push(<div id={'d'+i}className='next'
        data-testid={'d'+i}>
            {j}
            </div>);
      j++;
    }
    return (<div id='days'>{days}</div>);
};

export default Days;
