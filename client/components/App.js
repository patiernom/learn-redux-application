import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function MapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function MapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(MapStateToProps, MapDispatchToProps)(Main);

export default App;