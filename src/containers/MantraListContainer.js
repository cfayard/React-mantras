// we need connect function from react-redux
import {
    connect
} from 'react-redux';
// we need our dumb omponent
import List from '../components/List';


// we need? mapStateToProps
function mapStateToProps(state) {
    return {
        mantras: state
    }
}

// we need? mapDispatchToProps
// nope. this component does not change redux state

// "wire" everything together
// and export it!!!!
const reduxConnector = connect(mapStateToProps);
export default reduxConnector(List);