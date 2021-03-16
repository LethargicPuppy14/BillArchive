import React, {Component} from 'react'
import Bill from './Bill'
//<br />

class App extends React.Component{
    render(){
        const billDetails =
            [{name: 'The Bill Bill'},
            {proposedBy: 'Congressman Ruben'},
            {text: 'Creates a cool law'},
            {modifies: 'The Star-Royalfred'},
            {modifiedBy: 'The Act Act'}
        ]

        return(
            <div className="App">
                <Bill theDeets={billDetails}/>
            </div>
        )
    }
}

export default App