import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/Main/Main';
import { } from '../actions';

export default connect(
    state => ({
        // props
    }),
    dispatch => bindActionCreators({
        // actions
    }, dispatch)
)(Main);
