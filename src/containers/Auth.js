import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../pages/Auth/Auth';
import { sendLoginData } from '../actions';

export default connect(
    state => ({
        login: state.auth.login,
        password: state.auth.password,
        isLoading: state.auth.isLoading
    }),
    dispatch => bindActionCreators({
        sendLoginData
    }, dispatch)
)(Auth);
