import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardHumanType } from '../../constants/prop-types';
import './Main.css';

const Main = (props) => {
    const { userId, getTreeByUserId } = props;

    useEffect(() => {
        // if (!userId) {
        //     window.location.pathname = '/login';
        //     return;
        // }

        getTreeByUserId(userId);
    }, [userId]);

    return (
        <div className='main'>
            <h1>Family Tree will be here!</h1>
            <h2>Your userId: {userId}</h2>
        </div>
    );
};

Main.propTypes = {
    userId: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(CardHumanType),
    getTreeByUserId: PropTypes.func.isRequired
};

export default Main;
