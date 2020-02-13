
import React from 'react';
import List from './components/List'
import Input from './components/Input'

function App() {
    return (     
      <div className="App">
          <List />
          <Input />
      </div>
  )
}
class MantraApp extends React.Component {
    render() {
        return (     
            <div>
                <List />
                <Input />
            </div>)

    }
}

export default App;
