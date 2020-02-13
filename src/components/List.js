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
                
            </ul>
        )
    }
}

export default List