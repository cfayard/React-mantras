import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props);
        console.log('i am the list constructor')
        this.state = {
            mantraArray: []
        }
    }
    
    render() {
        return (
            <ul>
               <li>mantra1</li> 
               <li>mantra2</li> 
               <li>mantra3</li> 
            </ul>
        )
    }
}

export default List