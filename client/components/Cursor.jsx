import React from 'react'
import Typist from 'react-typist'

class Cursor extends React.Component {
    state = {
        typing: 'true'
    }
    done = () => {
        this.setState({
            typing: false
        }, () => {
            this.setState({
                typing: 'true'
            })
        })
    }
    render() {
        {this.state.typing 
        ? <Typist onTypingDone={this.done}>|</Typist> : ''}
    }
}

export default Cursor

