import React from 'react';
import SharedContext from './shared';

/**
 *
 * @return {dom} prevButton
 */
function PrevBtn() {
    const {currDay, setDay} = React.useContext(SharedContext);
    const prevClick = async () => {
        const dd = currDay[0];
        let mm = currDay[1];
        let yyyy = currDay[2];
        if (mm == 0) {
            mm = 12;
            yyyy--;
        }
        mm--;
        setDay([dd, mm, yyyy]);
    };
    return (
        <button id="prev"
        onClick={prevClick}>◀</button>
    );
};

export default PrevBtn;
