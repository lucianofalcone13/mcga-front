import React from 'react'

class Task extends React.Component {
    render() {
        return (
            <li key={this.props.id}>{this.props.description}</li>
        )
    }
}

export default Task