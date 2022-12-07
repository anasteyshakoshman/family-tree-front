import React from 'react';
import PropTypes from 'prop-types';
// import { Snackbar } from '@mui/material';

const Notification = ({ message, handleClose }) => {
    return (
        // todo uncomment
        // <Snackbar
        //     message={message}
        //     open={Boolean(message)}
        //     autoHideDuration={4000}
        //     anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        //     onClose={handleClose} />
        <span />
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default Notification;
