import React from 'react';
import SharedContext from './shared';

/**
 *
 * @return {dom} next Button
 */
function NextBtn() {
    const {currDay, setDay} = React.useContext(SharedContext);
    const nextClick = async () => {
        const dd = currDay[0];
        let mm = currDay[1];
        let yyyy = currDay[2];
        if (mm == 11) {
            mm = -1;
            yyyy++;
        }
        mm++;
        setDay([dd, mm, yyyy]);
    };
    return (
        <button id="next"
        onClick={nextClick}>▶</button>
    );
};

export default NextBtn;
