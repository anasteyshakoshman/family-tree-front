import React from 'react';
import PropTypes from 'prop-types';
import { CardHumanType } from '../../constants/prop-types';

const Main = () => {
    return (
        <div className='main'>
            <h1>Family Tree will be here!</h1>
        </div>
    );
};

Main.propTypes = {
    list: PropTypes.arrayOf(CardHumanType)
};

export default Main;
