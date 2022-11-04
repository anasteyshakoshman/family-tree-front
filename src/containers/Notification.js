import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearAlertMessage } from '../actions';
import Notification from '../components/Notification/Notification';

export default connect(
    state => ({
        message: state.notification.message
    }), dispatch => ({
        handleClose: bindActionCreators(clearAlertMessage, dispatch)
    })
)(Notification);
