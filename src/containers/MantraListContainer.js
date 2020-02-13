import {
    connect
} from 'react-redux';

import List from '../components/List';
import { actionAddMantra} from '../actions';

function mapStateToProps(state) {
    console.table(state);
    return {
        mantra: mantra
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ADD_MANTRA: () => {
            dispatch(actionAddMantra())
        }
    }
}