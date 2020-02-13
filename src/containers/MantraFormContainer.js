import {
    connect
} from 'react-redux';

import Input from '../components/Input';

// we dont need mapStateToProps!
// we arent displaying anything from redux state

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (newMantra) => {
            dispatch(actionAddMantra(newMantra))
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(Input);