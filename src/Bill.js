import React, {Component} from 'react'

class Bill extends Component{
    render(){

        return(
            <div>
                <h1>{this.props.name}</h1>
                <i>{this.props.proposedBy}</i>
                <p>{this.props.text}</p>
                <br />
                <p><b>Modifies: </b>Implementation pending</p>
                <p><b>Modified by: </b>Implementation pending</p>
            </div>
        )
    }
}

export default Bill