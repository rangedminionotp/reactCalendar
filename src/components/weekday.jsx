import React from 'react';
import Week from './week';

/**
 *
 * @return {dom} weekday
 */
function Weekday() {
    const weekday = Week.map((weeks) =>
    <div>{weeks}</div>);
    return (
        <div id='weekdays'>
            {weekday}
        </div>
    );
}

export default Weekday;
