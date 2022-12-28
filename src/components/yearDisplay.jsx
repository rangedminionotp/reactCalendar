import React from 'react';
import SharedContext from './shared';

/**
 * @return {dom} current month
 */
function YearDisplay() {
    const {currDay} = React.useContext(SharedContext);
    return (
        <div id='currentYear'>
            {currDay[2]}
        </div>
    );
}

export default YearDisplay;
