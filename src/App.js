
import React from 'react';
import './App.css'

import { createStore } from 'redux';
import {mantras} from './reducers'

import MantraForm from './containers/MantraFormContainer';
import MantraList from './containers/MantraListContainer'

import { Provider } from 'react-redux'
const store = createStore(mantras);

function App() {
    return (     
      <div className="App">
        <Provider store={store}>
          <MantraForm />
          <MantraList />
        </Provider>
      </div>
  )
}


export default App;
