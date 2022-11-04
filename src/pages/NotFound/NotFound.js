import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>NotFound Page will be here!</h1>
            <Link className='link' to='/'>На главную :)</Link>
        </div>
    );
};

export default NotFound;
