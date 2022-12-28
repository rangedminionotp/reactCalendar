import React from 'react';
import Month from './month';
import SharedContext from './shared';

/**
 * @return {dom} current month
 */
function MonthDisplay() {
    return (
        <SharedContext.Consumer>
            {({currDay}) =>(
                <div id='currentMonth'>
                    {Month[currDay[1]]}
                </div>
            )}
        </SharedContext.Consumer>
    );
};

export default MonthDisplay;
