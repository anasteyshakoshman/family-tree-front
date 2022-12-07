import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/Main/Main';
import { getTreeByUserId } from '../actions';

export default connect(
    state => ({
        userId: state.auth.userId
    }),
    dispatch => bindActionCreators({
        getTreeByUserId
    }, dispatch)
)(Main);
